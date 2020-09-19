import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useState }from 'react';

const arvonta = Math.floor(Math.random() * 100) + 1;

export default function App() {

  const[text, setText] = useState('');
  var arvaus = text;

//Jäin i:n lukumäärän laskemiseen

  const buttonPressed = () => {
      var i = 1;
    if (arvaus < arvonta) {
      Alert.alert("Your guess " + arvaus + " is too low " + i);
      i++;
    } if (arvaus > arvonta) {
      Alert.alert("Your guess " + arvaus + " is too high" + i);
      i++;
    }

  }

  return (
      <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <StatusBar style="auto" />
      <TextInput
      label="numero"
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setText(text)}
      value={text}
      />
      <Button onPress={buttonPressed} title="Try" />
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
