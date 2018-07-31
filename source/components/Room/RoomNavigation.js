import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class RoomNavigation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Navigation</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default RoomNavigation;
