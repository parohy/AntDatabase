import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AntCard } from './reusable';

class ItemAntCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Actions.antDetail({ antData: this.props.antData });
        }}
      >
        <AntCard antData={this.props.antData} />
      </TouchableOpacity>
    );
  }
}

export default ItemAntCard;
