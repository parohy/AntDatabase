import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomeTable from '../HomeTable';
import AntDetail from '../AntDetail';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key='home'>
          <Scene
            key='homePage'
            component={HomeTable}
            hideNavBar
            initial
          />
          <Scene
            key='antDetail'
            component={AntDetail}
            navigationBarStyle={styles.navBarStyleHome}
          />
        </Scene>
      </Router>
    );
  }
}

const styles = {
  navBarStyleHome: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  }
};

export default AppRouter;
