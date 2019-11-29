import React from 'react'
import { TabBar } from 'antd-mobile';
import { homedir } from 'os';


class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedTab: 'redTab',
      fullScreen: true,
    };
     
  }
  render() {
    const {history} = this.props
    let pathname = history.location.pathname
    let hidden = pathname.includes('/detail') ? true : false
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', width: '100%', bottom: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#079395"
          barTintColor="white"
          hidden={hidden}
        >

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url('+require('./home.png')+') center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url('+require('./home_on.png')+') center center /  21px 21px no-repeat' }}
              />
            }
            title="首页"
            key="Home"
            selected={pathname === '/topic'}
            onPress={() => {
              // this.setState({
              //   selectedTab: 'redTab',
              // });
              history.push('/topic');
            }}
            data-seed="logId1"
          >
         
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url('+require('./collect.png')+') center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url('+require('./collect_on.png')+') center center /  21px 21px no-repeat' }}
              />
            }
            title="收藏"
            key="collect"
            selected={pathname === '/collect'}
            onPress={() => {
              // this.setState({
              //   selectedTab: 'greenTab',
              // });
              history.push('/collect');
            }}
          >
           
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: require('./person.png') }}
            selectedIcon={{ uri: require('./person_on.png') }}
            title="个人"
            key="person"
            selected={pathname === '/person'}
            onPress={() => {
              // this.setState({
              //   selectedTab: 'yellowTab',
              // });
              history.push('/person');
            }}
          >
           
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarComponent

