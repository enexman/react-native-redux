import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Hero from '../hero/Hero'
import RoomMessage from './RoomMessage'
import RoomNavigation from './RoomNavigation'
import RoomMove from './RoomMove'
import LineView from './../elements/LineView';

import { Color } from './../../css';

class Room extends React.Component {
  render() {
    const { message, navigation, type } = this.props.room;
    return (
      <View style={styles.container}>
        <RoomMove />
        <RoomMessage message={message}/>
        <RoomNavigation navigation={navigation}/>
        <Hero navigate={this.props.navigate}/>
        <LineView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
});

export default connect(({room}) => ({room}))(Room);
