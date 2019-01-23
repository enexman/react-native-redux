import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Color } from '../../css';
class MonsterCell extends React.Component {

  render() {
    const { monster } = this.props;
    let monsterSize = {width: 6, height: 6,};
    switch (monster.level) {
      case 1 : monsterSize = {width: 8, height: 8,}; break;
      case 2 : monsterSize = {width: 9, height: 9,}; break;
      case 3 : monsterSize = {width: 10, height: 10,}; break;
      case 4 : monsterSize = {width: 11, height: 11,}; break;
      case 5 : monsterSize = {width: 12, height: 12,}; break;
    }
    return (
      <View style={[styles.circle, monsterSize, monster.dead && styles.dead]}></View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 50,
    margin: 2,
    backgroundColor: Color.red
  },
  dead: {
    backgroundColor: 'transparent',
    borderColor: Color.red,
    borderWidth: 1,
  }
});

export default connect(({theme}) => ({theme}), {})(MonsterCell);
