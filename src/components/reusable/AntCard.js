import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Header } from './Header';
import { ProgressiveImage } from './ProgressiveImage';
import Images from '../../img/images';

class AntCard extends Component {
  render() {
    const { Family, Name, Location, Queen, Worker } = this.props.antData;
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.hideImage ? null : <View style={styles.imageContainer}>
          <ProgressiveImage
            style={styles.image}
            source={Images[`${Family.toLowerCase()}_${Name}`]}
          />
        </View>}
        <Header
          style={styles.header}
          title={`${Family} ${Name}`}
          subtitle={`${Location} | Q: ${Queen} W: ${Worker}`}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginBottom: 10,
    paddingBottom: 10,
    backgroundColor: '#fff'
  },
  imageContainer: {
    elevation: 3,
    backgroundColor: '#e6ffee'
  },
  header: {
    backgroundColor: '#fff'
  },
  image: {
    width: Dimensions.get('window').width,
    height: 250
  }
}

export { AntCard };
