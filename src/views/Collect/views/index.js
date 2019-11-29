import React, { Component } from 'react'
import Header from '../../../components/Header'
import Listitem from '../../../components/Listitem'
import Loading from '../../../components/Loading'
import {getCollect} from '../../Detail/webapi'


class Collect extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    async componentDidMount() {
        let response = await getCollect();
        this.setState(prevState => ({
            list:response.data
        }))
    }
    render() {
        let { list } = this.state
        return (
            <div>
                <Header title="我的收藏"/>
                <div className="bg-white">
                {
                    list.length > 0 ? 
                    list.map((item) => <Listitem topic={item} key={item.id} {...this.props}/>)
                    :
                    
                    <Loading />
                }
                </div>
            </div>
        )
    }
}

export default Collect