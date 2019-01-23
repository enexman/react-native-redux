import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text, Image, Alert } from 'react-native';
import VisibleBtn from './VisibleBtn';
import FindBlock from './find-block/FindBlock';
import FightBlock from './fight-block/FightBlock';
import RelaxBtn from './RelaxBtn';
import SpeakBtn from './SpeakBtn';
import { somebodyNearly, } from '../../../util';

class RoomActionButtons extends React.Component {

  render() {
    const { hero, monsters, isFightOpen, find, speakers, room} = this.props;

    const activeRoom = room.filter((it) => it.name === hero.room)[0];
    const speaker = speakers.filter((it) => it.room === hero.room)[0];
    const monstersList = monsters.filter((it) => it.room === hero.room);

    const findBlock = (!isFightOpen)
      ? <FindBlock />
      : null;
    const fightBlock = (monstersList) 
      ? <FightBlock monsters={monstersList} />
      : null;

    const boolMonsterNearly = somebodyNearly(activeRoom, monsters);
    const relaxBtn = (!isFightOpen && !find.activated && !boolMonsterNearly)
      ? <RelaxBtn />
      : null;
    const visibleBtn = (!isFightOpen && !find.activated && boolMonsterNearly)
      ? <VisibleBtn />
      : null;
    const speakBtn = (!isFightOpen && !find.activated && speaker) 
      ? <SpeakBtn /> 
      : null;


    return (
      <View style={styles.container}>
        {findBlock}
        {fightBlock}
        {visibleBtn}
        {relaxBtn}
        {speakBtn}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
  },
});

export default connect(
  ({monsters, hero, find, speakers, room}) => {
    const isFightOpen = monsters.some((it) => !it.dead && it.room === hero.room);
    return {monsters, hero, isFightOpen, find, speakers, room}
  },
  {}
)(RoomActionButtons);
