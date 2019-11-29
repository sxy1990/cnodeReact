import React from 'react'
import moment from '../../../../utils/momentUTC'
require('./index.css')

const Recent = (props) => {
    function goDetail(id) {
        props.history.push('/detail/'+id);
    }
    return (
        <div id="recent" className="p-sm" onClick={()=>goDetail(props.id)}>
        <h4 className="texthid f16 m-b-xs">{props.title}</h4>
        <p className="text-lightgray text-right">{moment(props.last_reply_at).fromNow()}</p>
        </div>
    )
}
export default Recent