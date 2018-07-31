import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Room extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Room</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Room;
