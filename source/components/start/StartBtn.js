import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from './../../css';

class StartBtn extends React.Component {
  render() {
    return (
      <View style={styles.button}>
        <Text
          style={styles.green}
          onPress={() =>
            this.props.navigate('Room')
          }
        >START GAME
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.black,
    width: 120,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.green,
    borderWidth: 2,
  },
  green: {
    color: Colors.green,
    fontWeight: 'bold',
  },
});


export default StartBtn;
