import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from './../../css';

class RoomMessage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.message}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    color: Color.green,
  }
});

export default RoomMessage;
