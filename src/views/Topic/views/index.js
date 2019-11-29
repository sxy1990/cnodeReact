import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { getTopic } from '../actions'
// import Tabbar from '../../components/Tabbar/Tabbar'
import Header from '../../../components/Header'
import Menu from '../../../components/Menu'
import Listitem from '../../../components/Listitem'

class Topic extends Component {
    constructor(props) {
        super(props)
        this.state = {
           tabs : [
                 { title: '全部',tab:'all' },
                 { title: '精华',tab:'good' },        
                 { title: '分享',tab:'share' },
                 { title: '问答',tab:'ask' },
                 { title: '招聘',tab:'job' },
                 { title: '客户端测试',tab:'dev' }
            ],
           topic:[],
           page:1,
           tab:'all',
           mh:400,
           dataSize:0,
           timer:null,
           params:{
            page:1,
            tab:'all',
            limit:10,
            mdrender:false
           },
           noData:'没有更多'
        }
        this.myRef = React.createRef();
    }
    onChange = (tab) => {
        // let params = {
        //     page:this.state.page,
        //     tab:tab.tab,
        //     limit:10,
        //     mdrender:false
        //   }
        let tabParam = {tab:tab.tab,page:1}
        this.setState(prevState => ({
            params:{...prevState.params,...tabParam},
            tab : tab.tab
        }),function(){
             this.myRef.current.scrollTop = 0
             this.getTopicHandle(this.state.params)
        })
       
    }
    componentDidMount() {
        // let params = {
        //   page:this.state.page,
        //   tab:this.state.tabs[0].tab,
        //   limit:10,
        //   mdrender:false
        // }

       this.getTopicHandle(this.state.params)
       //节流滚动
       this.myRef.current.onscroll = () => {
          clearTimeout(this.state.timer)
          var timer = setTimeout(() => {
            var st = this.myRef.current.scrollTop
            if(this.state.mh <= st + this.myRef.current.offsetHeight){
                this.setState(prevState => ({params: {...prevState.params,...{page:prevState.params.page+1}}}),function(){
                    if(this.state.dataSize !== 0){
                        this.getTopicHandle(this.state.params)
                    }
                })
            }
              
          }, 1000);
          this.setState({timer})
       }
       
    }
    componentWillUnmount(){
        clearTimeout(this.state.timer)
    }
    getTopicHandle = (param) =>{
        this.props.getTopic(param).then(res => {
           // console.log(res)
            this.setState({
                mh:this.myRef.current.scrollHeight,
                dataSize:res.length
            })
        })
       
    }
    render() {
        const {topic} = this.props
        const topicFilter = topic && topic[this.state.tab]

        return (
            <div>
           
                <Header title="首页"></Header>
                <Menu onChange={this.onChange} tabs={this.state.tabs}/>
       
                <div className="bg-white no-scroll" ref={this.myRef} style={{height:'600px',overflow:'auto'}}>
                {topicFilter.length > 0 
                ?
                topicFilter.map((item) => <Listitem topic={item} key={item.id} history={this.props.history}/> )
                : null}
                {this.state.dataSize > 0 ? <span className="text-center block" style={{lineHeight:'40px'}}>加载更多</span>:<span className="text-center block" style={{lineHeight:'40px'}}>没有更多</span>}
                </div>
            
            </div> 
        )
    }
}

Topic.propTypes = {
    topic: PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
    return {
        topic: state.topic
    }
}
const mapDispatchToProps = ({
    getTopic: getTopic
})
export default connect(mapStateToProps,mapDispatchToProps)(Topic)