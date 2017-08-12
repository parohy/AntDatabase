import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title, subtitle, style }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.titleStyle}>{title}</Text>
    {subtitle ? <Text style={styles.subtitleStyle}>{subtitle}</Text> : null}
  </View>
);

const styles = {
  container: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    margin: 3,
    padding: 5
  },
  titleStyle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 23,
    lineHeight: 26
  },
  subtitleStyle: {
    color: '#6F6F6F',
    fontSize: 16,
    lineHeight: 18,
    paddingTop: 4,
    fontStyle: 'italic'
  }
};

export { Header };
