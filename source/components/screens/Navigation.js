import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, StatusBar, } from 'react-native';
import HeroScreen from './HeroScreen';
import StartScreen from './StartScreen';
import IntroScreen from './IntroScreen';
import FightScreen from './FightScreen';
import InventoryScreen from './InventoryScreen';
import RoomScreen from './RoomScreen';
import MapScreen from './MapScreen';
import NotesScreen from './NotesScreen';
import SpeakerScreen from './SpeakerScreen';
import SettingsScreen from './SettingsScreen';
import ManualScreen from './ManualScreen';
import LevelsScreen from './LevelsScreen';
import RunScreen from './RunScreen';
import EndScreen from './EndScreen';
import TestScreen from './TestScreen';
import LineView from '../elements/LineView';
import Move from '../elements/Move';
import { Color } from '../../css';
import { screenNavigation } from '../../data/screen-navigation';

StatusBar.setHidden(true);

class Navigation extends React.Component {

  render() {
    const { activeScreen } = this.props.screens;
    const navigation = (() => {
      switch (activeScreen) {
        case screenNavigation.start : return <StartScreen />;
        case screenNavigation.intro : return <IntroScreen />;
        case screenNavigation.hero : return <HeroScreen />;
        case screenNavigation.inventory : return <InventoryScreen />;
        case screenNavigation.room : return <RoomScreen />;
        case screenNavigation.fight : return <FightScreen />;
        case screenNavigation.run : return <RunScreen />;
        case screenNavigation.map : return <MapScreen />;
        case screenNavigation.notes : return <NotesScreen />;
        case screenNavigation.speaker : return <SpeakerScreen />;
        case screenNavigation.settings : return <SettingsScreen />;
        case screenNavigation.manual : return <ManualScreen />;
        case screenNavigation.levels : return <LevelsScreen />;
        case screenNavigation.end : return <EndScreen />;
        case screenNavigation.test : return <TestScreen />;
        default : return <StartScreen />;
      }
    })();

    const lineView = (
      activeScreen === screenNavigation.start
      || activeScreen === screenNavigation.end
    ) ? null : <LineView />;

    const move = (
      activeScreen === screenNavigation.start
      || activeScreen === screenNavigation.intro
      || activeScreen === screenNavigation.levels
      || activeScreen === screenNavigation.fight
      || activeScreen === screenNavigation.monster
      || activeScreen === screenNavigation.end
    ) ? null : <Move />;

    return (
      <View style={styles.container}>
        {lineView}
        {move}
        {navigation}
        {lineView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
  },
});

export default connect(({screens}) => ({screens}), {})(Navigation);
