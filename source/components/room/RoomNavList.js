import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import RoomNavBtn from './RoomNavBtn';


class RoomNavList extends React.Component {
  rotateBtn(name) {
    switch (name) {
      case 'top': {
        return {transform: [{ "rotate": "-90deg" }]}
      }
      case 'bottom': {
        return {transform: [{ "rotate": "90deg" }]}
      }
      case 'left': {
        return {transform: [{ "rotate": "180deg" }]}
      }
      case 'right': {
        return {transform: [{ "rotate": "0deg" }]}
      }
    }
  }

  render() {
    const { direction, isFightOpen, hero } = this.props;
    const navigationBtn = (!isFightOpen || hero.invisible) ? direction.map((it, key) => {

      return <RoomNavBtn key={key} name={it.name} rotate={this.rotateBtn(it.arrow)}/>
    }) : null;

    return (
      <View style={styles.button}>
        {navigationBtn}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
  },
});

export default connect(
  ({monsters, hero}) => {
    const isFightOpen = monsters.some((it) => !it.dead && it.room === hero.room);
    return {monsters, hero, isFightOpen}
  },
  {}
)(RoomNavList);
