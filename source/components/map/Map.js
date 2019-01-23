import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Text } from 'react-native';
import TitleBlock from '../elements/TitleBlock'
import MapCell from './MapCell';
import { screenNavigation } from '../../data/screen-navigation';

class Map extends React.Component {
  render() {
    const { room, monsters, hero, speakers, level } = this.props;
    const activeRoom = room.filter((it) => it.name === hero.room)[0];

    // отображение спикеров в соседних комнатах
    const boolSpeakers = speakers.filter((speaker) => {
      return activeRoom.direction.some((room) => {
        return speaker.room === room.name || activeRoom.name === speaker.room;
      })
    });

    // отображение монстров в соседних комнатах
    const boolMonsters = monsters.filter((monster) => {
      return activeRoom.direction.some((room) => {
        return monster.room === room.name || activeRoom.name === monster.room;
      })
    });

    const listCells = room.map((it, key) => {
      // const monster = monsters.filter((item) => item.room === it.name); // видно по всей карте
      const monster = boolMonsters.filter((item) => item.room === it.name);
      // const speaker = speakers.filter((item) => item.room === it.name)[0]; // видно по всей карте
      const speaker = boolSpeakers.filter((item) => item.room === it.name)[0];
      const heroItem = (it.name === hero.room) ? hero : null;
      return <MapCell
        key={key}
        item={it}
        monster={monster}
        hero={heroItem}
        speaker={speaker}
      />
    });
    return (
      <View style={styles.container}>
        <TitleBlock title={'Карта ' + level.active} toBack={screenNavigation.room}/>
        <View style={styles.wrapper}>
          <View>
            <Image
              style={[styles.image]}
              source={require('../../image/map.jpg')}
            />
            {listCells}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    // backgroundColor: 'gray',
  },
  image: {
    position: 'absolute',
    width: 552,
    height: 210,
    marginLeft: -291,
    marginTop: -120,
    // opacity: 0.5,
  },
});

export default connect(
  ({room, monsters, hero, speakers, level}) => ({room, monsters, hero, speakers, level})
)(Map);
