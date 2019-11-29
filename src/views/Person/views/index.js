import React from 'react'
import Header from '../../../components/Header'
import Menu from '../../../components/Menu'
import Rencent from './Rencent'
import Loading from '../../../components/Loading'
import logo from './logo192.png'
import {getUserInfo} from '../webapi'
require('./index.css')

class Person extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tabs : [
                  { title: '最近发布' },
                  { title: '最近回复' }
             ],
            userInfo:{},
            recent:[]
         }
    }
    onChange = (tab) => {
        this.setState(prevState => ({
            recent:tab.title === '最近发布'?prevState.userInfo.recent_replies:prevState.userInfo.recent_topics
        }))
    }
    componentDidMount() {
        this.getUserInfo();
    }
    async getUserInfo() {
        let response = await getUserInfo();
        this.setState({
            userInfo:response.data,
            recent:response.data.recent_replies
        });
    }
    renderContent(userInfo) {
        return (
            <div id="person" className="bg-white">
                <div className="header-top">
                    <div className="avatar text-center">
                        <img src={userInfo.avatar_url ? userInfo.avatar_url : logo} alt="avatar" className="img" />
                        <span className="block f16">{userInfo.loginname}</span>
                    </div>
                    <span className="score">积分：{userInfo.score}</span>
                </div>
                <Menu onChange={this.onChange} tabs={this.state.tabs}/>
                {this.state.recent.map(item => <Rencent {...item} history={this.props.history}  key={item.id}/>)}
                
            </div>
        )
    }
    render() {
        let {userInfo} = this.state
        return (
            <div>
                <Header title="个人中心"/>
                {userInfo.loginname ? this.renderContent(userInfo) : <Loading />}
            </div>
        )
    }
}

export default Person