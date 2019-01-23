import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Color } from '../../css';

class LogFight extends React.Component {
  render() {
    const { monster, hero, theme } = this.props;
    if (!hero.log) {
      return  (
        <View style={styles.container}>
          <Text style={[styles.text, theme.color]}>ЛОГ: </Text>
          <Text style={[styles.text, theme.color]}> ---- /</Text>
          <Text style={[styles.text, {color: Color.red}]}>/ ----</Text>
        </View>
      )
    }
    const heroLog = (hero.wound)
      ? '/ РАНЕНИЕ ' + hero.wound
      : (monster.distance)
      ? '/ ВНЕ ДОСИГАЕМОСТИ'
      : '/ ПРОМАХ' ;

    const monsterLog = (monster.wound)
      ? 'РАНЕНИЕ ' + monster.wound + ' /'
      : 'ПРОМАХ /' ;
    return (
      <View style={styles.container}>
        <Text style={[styles.text, theme.color]}>ЛОГ: </Text>
        <Text style={[styles.text, theme.color]}>{monsterLog}</Text>
        <Text style={[styles.text, {color: Color.red}]}>{heroLog}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 33,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default connect(({monster, hero, theme}) => ({monster, hero, theme}), {})(LogFight);
