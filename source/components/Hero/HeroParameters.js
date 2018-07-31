import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextView from'./../TextView'

class HeroParameters extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextView name="Name:" value="Hero"/>
        <TextView name="Level:" value="1"/>
        <TextView name="Strength:" value="16"/>
        <TextView name="Agility:" value="12"/>
        <TextView name="Luck:" value="9"/>
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

export default HeroParameters;
