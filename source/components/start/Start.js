import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import StartBtn from './StartBtn'
import { Colors } from './../../css';

class Start extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StartBtn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Start;
