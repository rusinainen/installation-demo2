import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useState }from 'react';

const arvonta = Math.floor(Math.random() * 100) + 1;

export default function App() {
  const[text, setText] = useState('');
  var arvaus = text;
  var i = 1;

  const buttonPressed = () => {
    var viesti1 = "Your guess " + arvaus + " is too low " + arvonta;
    var viesti2 = "Your guess " + arvaus + " is too high " + arvonta;
    var success = "You guessed the number in " + i + " guesses";

    if (arvaus < arvonta) {
      Alert.alert(viesti1);
      i++;
    }
    if (arvaus > arvonta) {
      Alert.alert(viesti2);
      i++;
    }
    if (arvaus == arvonta) {
      Alert.alert(success);
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
