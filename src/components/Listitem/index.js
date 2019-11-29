import React from 'react'
import Top from '../Top'
require('./index.css')

const Listitem = (props) => {
    function goDetail(id){
        props.history.push({pathname:'/detail/'+id});
    }
    const {topic} = props
    return (
        <div className="p-sm flex items-center" id="listItem" onClick={()=>goDetail(topic.id)}>
            <img src={topic.author.avatar_url} className="img" alt="haha"/>
            <div className="flex-one">
                <h4 className="texthid">{topic.title}</h4>
                <p className="text-lightgray">
                    <span className="m-r-sm">发布：{topic.create_at}</span>
                    <span>流量：{topic.reply_count}/{topic.visit_count}</span>
                </p>
            </div>
            {topic.top?<Top title="置顶" hStyle={{'marginLeft':'5px'}} />: null}
            {topic.good?<Top title="精华" hStyle={{'marginLeft':'5px'}} />: null}
        </div>
    )
}

export default Listitem