import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import HitPointLineMonster from './HitPointLineMonster';
import HitPointLineHero from './HitPointLineHero';
import RunBtn from './RunBtn';
import LongShootBtn from './LongShootBtn';
import ShootBtn from './ShootBtn';
import HitBtn from './HitBtn';
import AttackBtn from './AttackBtn';
import BigCircle from './BigCircle';
import Monster from './monster/Monster';
import DialogList from '../dialogs/DialogList';
import Distance from './distance/Distance';
import Target from './target/Target';
import StatusWound from './StatusWound';
import KitBtn from '../room/KitBtn';
import LogFight from './LogFight';
import { wrapper } from '../../css';

class Fight extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.statusWound}>
            <StatusWound  />
          </View>
          <View style={styles.distance}>
            <Distance  />
          </View>
          <View style={styles.bigCircle}>
            <BigCircle />
            <Monster />
          </View>
          <View style={styles.attackBtn}>
            <Target />
            <LongShootBtn />
            <ShootBtn />
            <HitBtn />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <View style={styles.kit}>
              <KitBtn />
            </View>
            <RunBtn />
          </View>
          <View style={styles.lineHealth}>
            <LogFight />
            <HitPointLineMonster />
            <HitPointLineHero />
          </View>
          <AttackBtn />
        </View>
        <DialogList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // justifyContent: 'space-around',
    // backgroundColor: 'red',

  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  attackBtn: {
    marginRight: 10,
    marginTop: 10,
    width: 130,
    alignItems: 'flex-end',
    alignSelf: 'center',
    // backgroundColor: 'grey',

  },
  footer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    // backgroundColor: 'yellow',
    // alignSelf: 'flex-end',
    marginTop: 'auto',
  },
  footerLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',
  },
  lineHealth: {
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  bigCircle: {
    // flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 210,
    height: 210,
    // backgroundColor: 'yellow',
  },
  distance: {
    width: 90,
    height: 180,
    alignSelf: 'center',
    // backgroundColor: 'green',
  },
  statusWound: {
    // height: 80,
    // width: 45,
    alignSelf: 'center',
    marginLeft: 10,
    // backgroundColor: 'green',
  },
  kit: {
    position: 'absolute',
    top: -50,
    left: 10
  },
});

export default connect(null, {})(Fight);
