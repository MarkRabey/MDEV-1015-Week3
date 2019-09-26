import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Form } from './components/Form';
import { CardList } from './components/CardList';

export default function App() {
  const [cards, setCards] = useState([]);

  const addCard = (details) => {
    console.log(details);
    setCards(cards.concat(details));
  }

  return (
    <View style={styles.container}>
      <Form onSubmit={ addCard } />
      <CardList cards={ cards } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
