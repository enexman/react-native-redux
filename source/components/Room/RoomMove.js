import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { Color } from './../../css';
import LineView from './../elements/LineView';

class RoomMove extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LineView />
        <View style={styles.move}>
          <Text style={styles.text}>Move: {this.props.move.move}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  move: {
    position: 'absolute',
    left: 100,
    backgroundColor: Color.black,
  },
  text: {
    color: Color.green,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default connect(({move}) => ({move}), {})(RoomMove);
