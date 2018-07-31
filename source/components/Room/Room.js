import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Hero from '../hero/Hero'
import RoomMessage from './RoomMessage'
import RoomNavigation from './RoomNavigation'
import RoomMove from './RoomMove'

class Room extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RoomMove />
        <RoomMessage />
        <RoomNavigation />
        <Hero />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Room;
