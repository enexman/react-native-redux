import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { changeScreen, } from '../../../actions';
import { Color, titleText, simpleText } from '../../../css';
import BonusBtn from './BonusBtn';
import BonusVictory from './BonusVictory';

class DialogDead extends React.Component {

  render() {
    const { monster, hero, theme } = this.props;
    let message;
    const visible = (() => {
      const monsterMessage = (monster.dead) ? 'Монстр убит!' : '';
      const heroMessage = (hero.dead) ? 'Герой погиб!' : '';
      message = heroMessage ? heroMessage : monsterMessage;
      return (monster.dead || hero.dead);
    })();

    const { head, hands, feet } = monster.health;
    let accuracy = 0;
    let strength = 0;
    let agility = 0;
    let rating = 0;
    if (monster.dead) {
      accuracy = 1;
      rating = monster.rating;
      if(head || hands || feet) {
        accuracy = 2;
      }
      if(monster.distance === 0) {
        strength = 1;
        agility = 1;
      }
    }
    const bonusStatus = (monster.dead && !hero.dead)
      ? <BonusVictory accuracy={accuracy} strength={strength} agility={agility} rating={rating}/>
      : null;
    const noBonus = (!monster.dead)
      ? <Text style={[styles.text, theme.color]}>Вы не получили бонус</Text>
      : null;
    return (
      <View style={[styles.dark, !visible && styles.invisible]}>
        <View style={[styles.container, theme.borderColor]}>
          <Text style={[styles.titleText, theme.color]}>{message}</Text>
          {bonusStatus}
          {noBonus}
          <BonusBtn accuracy={accuracy} strength={strength} agility={agility} rating={rating}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dark: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    position: 'absolute',
    backgroundColor: Color.black,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 220,
    // height: 140,
    left: '50%',
    marginLeft: -110,
    top: '50%',
    marginTop: -90,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    ...simpleText,
    marginBottom: 10,
  },
  titleText: {
    ...titleText,
  },
  invisible: {
    display: 'none',
    position: 'relative',
  },
});

export default connect(
  ({monster, hero, theme}) => ({monster, hero, theme}),
  {changeScreen,}
)(DialogDead);
