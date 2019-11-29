import React from 'react'
require('./index.css')
const Top = (props) => {
    
    return (
        <span id="top" style={props.hStyle}>{props.title}</span>  
    )
}
export default Top