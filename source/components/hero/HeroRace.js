import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextView from './TextView';

class HeroRace extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextView name="Race:" value="Human"/>
        <TextView name="Class:" value="no class"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
  },
});

export default HeroRace;
