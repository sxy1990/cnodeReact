import React, { Component } from 'react'
import Layout from '../views/Layout'

/**
 * 异步加载模块
 * @param {*} importComponent 
 */

 export default function asyncComponent(importComponent) {
     class AsyncComponent extends Component {
         constructor(props) {
             super(props);
             this.state = {
                 component: null
             }
         }

         async componentDidMount() {
             const { view:component } = await importComponent();
             this.setState({ component });
         }

         render() {
             const C = this.state.component;
             return C ?<Layout history={this.props.history}> <C {...this.props} /></Layout> : null;
         }
     }
     return AsyncComponent;
 }