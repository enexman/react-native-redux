import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text } from 'react-native';
import { maxHeroParameter } from '../../../data/constants';
import { simpleText } from '../../../css';

class BonusVictory extends React.Component {

  render() {
    const { accuracy, strength, rating, agility, hero, theme } = this.props;

    const maxAccuracy = (hero.accuracy + accuracy>= maxHeroParameter) ?
      <Text style={[styles.text, theme.color]}>макс</Text>
      : null;

    const maxStrength = (hero.strength + strength >= maxHeroParameter) ?
      <Text style={[styles.text, theme.color]}>макс</Text>
      : null;

    const maxAgility = (hero.agility + agility >= maxHeroParameter) ?
      <Text style={[styles.text, theme.color]}>макс</Text>
      : null;

    const textAccuracy = (accuracy)
      ? <Text style={[styles.text, theme.color]}>Точность +{accuracy} {maxAccuracy}</Text>
      : null;

    const textStrength = (strength)
      ? <Text style={[styles.text, theme.color]}>Сила +{strength} {maxStrength}</Text>
      : null;

    const textAgility = (agility)
      ? <Text style={[styles.text, theme.color]}>Уклонение +{agility} {maxAgility}</Text>
      : null;

    return (
      <View style={styles.container}>
        {textAccuracy}
        {textStrength}
        {textAgility}
        <Text style={[styles.text, theme.color]}>Рейтинг +{rating}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  text: {
    ...simpleText,
  }
});


export default connect(({hero, theme}) => ({hero, theme}))(BonusVictory);
