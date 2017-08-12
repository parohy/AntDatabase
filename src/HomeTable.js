import React, { Component } from 'react';
import { View, VirtualizedList } from 'react-native';
import { connect } from 'react-redux';
import { getData } from './redux/actions/dataActions';
import { onScrollEvent } from './redux/actions/uiActions';
import ItemAntCard from './components/ItemAntCard';
import NavBar from './components/NavBar';

class HomeTable extends Component {
  componentWillMount() {
    this.props.getData();
  }

  render() {
    const { offset } = this.props.uiEvent['home'];
    return (
      <View style={styles.container}>
        <NavBar id='home' label='Ant Database' />
        <View style={[styles.listContainer, { marginTop: 64 - offset }]}>
          <VirtualizedList
            data={this.props.data}
            renderItem={({ item }) => <ItemAntCard antData={item} />}
            keyExtractor={item => item.id}
            getItemCount={data => data.length}
            getItem={(data, index) => data[index]}
            onScroll={event => this.props.onScrollEvent('home', event.nativeEvent.contentOffset.y)}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#e6ffee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    // marginTop: 64
  }
};

const mapStateToProps = newState => (
  {
    data: newState.data.json,
    uiEvent: newState.uiEvent
  }
);

export default connect(
  mapStateToProps,
  { getData, onScrollEvent })(HomeTable);
