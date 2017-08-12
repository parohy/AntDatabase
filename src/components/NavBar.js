import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    const { offset } = this.props.uiEvent[this.props.id];
    return (
      <View style={[styles.container, this.props.style, { marginTop: -offset }]}>
        <Text style={styles.text}>{this.props.label}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    elevation: 1
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    padding: 10
  }
};

export default connect(newState => ({ uiEvent: newState.uiEvent }), null)(NavBar);
