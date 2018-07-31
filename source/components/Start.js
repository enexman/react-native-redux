import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Colors } from '../css';

class Start extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Text
            style={styles.green}
            onPress={() =>
              this.props.navigate('Room')
            }
          >START GAME
          </Text>
        </View>
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
  button: {
    backgroundColor: Colors.black,
    width: 120,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.green,
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: 'white',
  },
  green: {
    color: Colors.green,
    fontWeight: 'bold',
  },
});


export default Start;
