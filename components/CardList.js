import React from 'react';
import { FlatList } from 'react-native';

import { Card } from './Card';

export const CardList = props => {

  return (
    <FlatList
      data={ props.cards }
      renderItem={ ({ item }) => <Card { ...item } /> }
      keyExtractor={ (x, index) => `index-${ index }` }
    />
  );
}
