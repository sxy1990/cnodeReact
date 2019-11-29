import React, { Component } from 'react'
import Tabbar from '../../components/Tabbar/Tabbar'

class Layout extends Component {
    
      
      render() {
        return (
          <div>
            <div>{this.props.children}</div>
            <Tabbar history={this.props.history} />
          </div>
        );
      }
}

export default Layout