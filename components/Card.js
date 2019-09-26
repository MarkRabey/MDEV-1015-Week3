import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

export const Card = props => (
  <View>
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: props.avatar_url }}
    />
    <Text>{ props.name }</Text>
  </View>
);
