import React from 'react'
import moment from '../../../../utils/momentUTC'
require('./index.css')

const Comment = (props) => {
    const {comment,index} = props
    const time = moment(comment.create_at).fromNow()
    function createMarkup(){
        return {__html:comment.content}
    }
    return (
        <div className="p-sm flex" id="comment">
            <img src={comment.author && comment.author.avatar_url} alt="头像" className="img m-r-sm"/>
            <div className="flex-one">
                <div className="top m-b-sm">
                    <span className="m-r-sm">{comment.author && comment.author.loginname}</span>
                    <span className="text-navy">{index}楼-{time}</span>
                </div>
                <div className="text-lightgray f16" dangerouslySetInnerHTML={createMarkup()}></div>
            </div>
        </div>
    )
}
export default Comment