import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeroParameters from'./HeroParameters'
import HeroArmor from'./HeroArmor'
import HeroInventoryBtn from'./HeroInventoryBtn'

class Hero extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>Race: Human</Text>
          <Text>Class: no class</Text>
        </View>
        <View style={styles.container}>
          <HeroParameters />
          <HeroArmor />
          <HeroInventoryBtn />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flexDirection: 'row',
    // flex: 1,
    // backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Hero;
