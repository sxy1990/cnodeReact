import React from 'react'
import logo from './logo192.png'
require('./index.css')

const Comment = (props) => {
    return (
        <div className="p-sm flex" id="comment">
            <img src={logo} alt="头像" className="img m-r-sm"/>
            <div className="flex-one">
                <div className="top m-b-sm">
                    <span className="m-r-sm">author</span>
                    <span className="text-navy">1楼-5年前</span>
                </div>
                <div className="text-lightgray f16">@think2011 nvm在安装完之后，会在profile文件里头添加上自己的export信息，在unix系统中，多个环境变量配置文件可能会互相冲突（优先级）。

如果你曾经装过例如homebrew等修改过环境变量的程序之后，可能会创建.bashrc文件，然后</div>
            </div>
        </div>
    )
}
export default Comment