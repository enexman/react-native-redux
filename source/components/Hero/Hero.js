import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeroParameters from'./HeroParameters'
import HeroWeapons from'./HeroWeapons'
import HeroInventoryBtn from'./HeroInventoryBtn'
import HeroRace from'./HeroRace'
import HeroKarma from'./HeroKarma'

class Hero extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeroRace />
        <View style={styles.wrapper}>
          <HeroParameters />
          <HeroWeapons />
          <HeroInventoryBtn navigate={this.props.navigate}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    marginLeft: 20,
    marginRight: 20,
  },
  wrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default Hero;
