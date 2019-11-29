import React from 'react'
import moment from '../../../utils/momentUTC'
import Header from '../../../components/Header'
import Top from '../../../components/Top'
import Comment from './Comment'
import Loading from '../../../components/Loading'
import { getTopicDetail,collect,de_collect,getCollect } from '../webapi'
require('./index.css')


class Detail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            detail:{},
            topic_id:'',
            accesstoken:'3f958423-4436-4fa2-adcc-f8a4354c6f40',
            collectFlag:true
        }
    }

   componentDidMount() {
        //console.log(this.props.match)
        this.getCollectList()
        
        
    }
    async getCollectList() {
        const id = this.props.match.params.id;
        let response = await getCollect();
        let collectList = response.data;
        collectList.forEach((item) => {
            if(item.id === id){
                this.setState({
                    collectFlag : false
                })
            }
        })
        this.getDetail(id)
    }
    async getDetail(id) {
       
        let response = await getTopicDetail(id);
        let detail = response.data;
        let fromTime = moment(detail.create_at).fromNow();
        this.setState({
            detail:{...detail,...{fromTime}},
            topic_id:id
        })
    }
    createMarkup()  {
        const {detail} = this.state
        return {__html: detail.content};
    }
    collectHandle =  () =>   {
        let data = {
            accesstoken:this.state.accesstoken,
            topic_id: this.state.topic_id 
        }
        collect(data).then(res => {
           if(res.success){
               this.setState(prevState => ({
                   collectFlag : !prevState.collectFlag
               }))
           }
        })

    }
    decollectHandle = () => {
        let data = {
            accesstoken:this.state.accesstoken,
            topic_id: this.state.topic_id 
        }
        de_collect(data).then(res => {
            if(res.success) {
                this.setState(prevState => ({
                    collectFlag : !prevState.collectFlag
                }))
            }
        })
    }
    goBack = () => {
        this.props.history.goBack()
    }
    renderContent(detail) {
        return (
            <div>
                <Header title="详情页" back={this.goBack}></Header>
                <div className="bg-white detail">
                    <div className="header">
                        <div className="header-top flex">
                            {detail.top ? <Top title="置顶" hStyle={{'marginRight':'5px'}}/> : null}
                            {detail.good ? <Top title="精华" hStyle={{'marginRight':'5px'}}/> : null}
                            <h4 className="texthid flex-one">{detail.title}</h4>
                        </div>
                        <p className="text-lightgray">
                            <span className="m-r-xs">发布：{detail.fromTime}</span>
                            <span className="m-r-xs">作者：{detail.author && detail.author.loginname}</span>
                            <span>浏览：{detail.visit_count}</span>
                        </p>
                    </div>
                    <div className="content">
                        <div dangerouslySetInnerHTML={this.createMarkup()}>
                        </div>
                        <div className="text-center m-t-sm m-b-sm">
                            {this.state.collectFlag ? 
                                <span className="btn-collect" onClick={this.collectHandle}>收藏</span>
                                :
                                <span className="btn-collect btn-deCollect" onClick={this.decollectHandle}>取消收藏</span>
                            }
                        </div>
                    </div>
                    <div className="gray-pane"></div>
                    {detail.replies.map((item,index)=><Comment comment={item} key={item.id} index={index+1}/>)}
                </div>
            </div>
        )
    }
    render() {
        const {detail} = this.state
        return (
            <div>
                {detail.title ? this.renderContent(detail) : <Loading/>}
            </div>
        )
    }
}

export default Detail