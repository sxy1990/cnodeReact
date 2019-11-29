import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';

class Menu extends React.Component {
   
  onChange = (tab) => {
    this.props.onChange(tab)
  }  
  render() {
    // const tabs = [
    //   { title: '全部' },
    //   { title: '精华' },        
    //   { title: '分享' },
    //   { title: '问答' },
    //   { title: '招聘' },
    //   { title: '客户端测试' }
    // ];
    const { tabs } = this.props    
    return (
      <div>
        <WhiteSpace />
        <Tabs tabs={tabs} 
              tabBarActiveTextColor={'#079395'}
              tabBarUnderlineStyle={{border:'1px #079395 solid'}}
              onChange={this.onChange}
              renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}

export default Menu
