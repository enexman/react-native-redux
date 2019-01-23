import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Color } from '../../css';

class SpeakerCell extends React.Component {

  render() {
    return (
      <View style={[styles.circle]}></View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 50,
    width: 10,
    height: 10,
    margin: 2,
    backgroundColor: Color.green,
  },
});

export default connect(null, {})(SpeakerCell);
