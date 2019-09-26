import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

export const Form = props => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.github.com/users/${ username }`)
      .then(res => res.json())
      .then(json => {
        if(props.onSubmit) {
          props.onSubmit(json);
        }
        setUsername('');
      });
  }

  return (
    <View>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 20,
        }}
        value={ username }
        onChangeText={ setUsername }
      />

      <Button
        title="Add Card"
        onPress={ handleSubmit }
      />
    </View>
  );
}
