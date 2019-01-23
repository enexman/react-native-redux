import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import MapCell from '../map/MapCell';
import { changeScreen, } from '../../actions';
import { Color } from '../../css';
import { screenNavigation } from '../../data/screen-navigation';

class Map extends React.Component {
  onPress() {
    this.props.changeScreen(screenNavigation.map);
  }
  render() {
    const { room, monsters, hero, speakers, level, theme } = this.props;
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
        speaker={speaker}/>
    });

    // Alert.alert(activeRoom.position.left + ' ' + activeRoom.position.top);
    return (
      <TouchableWithoutFeedback onPress={this.onPress.bind(this)} >
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={[
              styles.card,
              {left: -activeRoom.position.left + 50 + activeRoom.position.width/2,
              top: -activeRoom.position.top + 50 + activeRoom.position.height/2}
            ]}>
              <Image
                style={[styles.image]}
                source={require('../../image/map.jpg')}
              />
              {listCells}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    left: -50,
    top: -50,
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: Color.black,
  },
  card: {
    position: 'absolute',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{scale: 0.6}],
  },
  image: {
    position: 'absolute',
    width: 552,
    height: 210,
    marginLeft: -291,
    marginTop: -120,
    opacity: 0.5,
  },
});

export default connect(
  ({room, monsters, hero, speakers, level, theme}) => ({room, monsters, hero, speakers, level, theme}),
  {changeScreen}
)(Map);
