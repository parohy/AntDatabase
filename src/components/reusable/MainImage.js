import React from 'react';
import { Image } from 'react-native';

const MainImage = ({ path, style }) => (
  <Image
    style={style}
    source={path.includes('http') ? { uri: path } : path}
  />
);

export { MainImage };
