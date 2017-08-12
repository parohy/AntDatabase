import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ProgressiveImage, Header } from './components/reusable';
import Images from './img/images';

class AntDetail extends Component {
  render() {
    const {
      Family,
      Name,
      Location,
      Habitat,
      Colonyform,
      Queen,
      Worker,
      Polymorph,
      Soldier,
      Males,
      Nutrition
    } = this.props.antData;
    const fullName = `${Family} ${Name}`;
    return (
      <View style={styles.container}>
        <ProgressiveImage
          style={styles.image}
          source={Images[`${Family.toLowerCase()}_${Name}`]}
        />

        <View style={styles.detailContainer}>
          <Header title={fullName} />
          <Text>{`Location:     ${Location}`}</Text>
          <Text>{`Habitat:      ${Habitat}`}</Text>
          <Text>{`Colonyform:   ${Colonyform}`}</Text>
          <Text>{`Queen:        ${Queen}`}</Text>
          <Text>{`Worker:       ${Worker}`}</Text>
          <Text>{`Polymorph:    ${Polymorph}`}</Text>
          <Text>{`Soldier:      ${Soldier}`}</Text>
          <Text>{`Males:        ${Males}`}</Text>
          <Text>{`Nutrition:    ${Nutrition}`}</Text>
        </View>

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#e6ffee',
    marginTop: -64,
    alignItems: 'center',
  },
  detailContainer: {
    marginTop: -50,
    flex: 1,
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: '#b3ffcb',
    borderRadius: 20
  },
  header: {
    backgroundColor: '#fff'
  },
  image: {
    width: Dimensions.get('window').width,
    height: 250
  }
}

export default AntDetail;
