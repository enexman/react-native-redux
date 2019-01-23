import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text, Image, Alert } from 'react-native';
import FightBtn from './FightBtn';
// import { moveToRoom } from '../../../../actions';

class FightBlock extends React.Component {

  render() {
    const { monsters, } = this.props;

    const fightButtons = (monsters) ? monsters.map((it) => {
      return (it && !it.dead) ? <FightBtn key={it.key} monster={it} /> : null;
    }) : null;

    return (
      <View style={styles.container}>
        {fightButtons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(
  ({hero}) => ({hero}),
  {}
)(FightBlock);
