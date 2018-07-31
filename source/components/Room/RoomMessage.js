import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class RoomMessage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You meet a monster</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

export default RoomMessage;
