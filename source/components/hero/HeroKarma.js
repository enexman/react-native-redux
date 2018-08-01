import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from './../../css';

class HeroKarma extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 20,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Color.red,
  }
});

export default HeroKarma;
