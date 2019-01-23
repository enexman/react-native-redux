import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import HeroCell from './HeroCell';
import MonsterCell from './MonsterCell';
import SpeakerCell from './SpeakerCell';

class MapCell extends React.Component {
  render() {
    const { theme, item, monster, hero, speaker } = this.props;

    const heroCell = (hero) ? <HeroCell /> : null;

    const monsterCells = (monster) ? monster.map((it) => {
      return <MonsterCell key={it.key} monster={it} />;
    }) : null;

    const speakerCell = (speaker) ? <SpeakerCell /> : null;

    return (
      <View style={[styles.container, theme.borderColor, item.position,]}>
        {heroCell}
        {monsterCells}
        {speakerCell}
        <Text style={[styles.text, theme.color]}>{item.name.toUpperCase()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 39,
    height: 39,
    // borderWidth: 1,
    margin: 1,
    flexWrap: 'wrap',
  },
  text: {
    position: 'absolute',
    left: 3,
    top: 0,
    fontSize: 12,
  },
});

export default connect(({theme}) => ({theme}), {})(MapCell);

