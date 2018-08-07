import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import LineView from './../elements/LineView';
import { Color } from './../../css';

class Room extends React.Component {
  render() {
    const { message, navigation, type } = this.props.room;
    return (
      <View style={styles.container}>
        <LineView />
        <LineView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
    justifyContent: 'space-between',
  },
});

export default connect(({room}) => ({room}))(Room);
