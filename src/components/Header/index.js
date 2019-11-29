import React from 'react'
require('./index.css')

function Header(props) {
    let {title} = props;
    return (
        <div>
            {props.back ? <div id="header"><i onClick={props.back}></i>{title}</div> : <div id="header">{title}</div>}
        </div>
    )
}
export default Header