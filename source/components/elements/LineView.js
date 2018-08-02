import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from './../../css';

class Room extends React.Component {
  render() {
    return (
      <View style={styles.line}></View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    marginBottom: 10,
    marginTop: 10,
    height: 2,
    backgroundColor: Color.green,
  },
});

export default Room;
