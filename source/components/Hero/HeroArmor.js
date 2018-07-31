import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextView from'./../TextView'

class HeroArmor extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextView name="Head:" value="null"/>
        <TextView name="Body:" value="null"/>
        <TextView name="Hand right:" value="null"/>
        <TextView name="Hand left:" value="null"/>
        <TextView name="Feet:" value="null"/>
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

export default HeroArmor;
