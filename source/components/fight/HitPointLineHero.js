import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Color } from './../../css';

class HitPointLineHero extends React.Component {
  render() {
    const { hero, theme } = this.props;
    const totalWidth = 240;
    const fullLine = totalWidth/100 * (hero.hitPoint/hero.fullPoint * 100);
    const woundLine = totalWidth/100 * (hero.wound/hero.fullPoint * 100);
    const emptyLine = totalWidth - fullLine - woundLine;

    let colorPer = hero.hitPoint/hero.fullPoint * 100;
    let color = theme.activeTheme;
    if (60 > colorPer && colorPer >= 40) color = Color.yellow;
    if (40 > colorPer && colorPer >= 20) color = Color.orange;
    if (20 > colorPer && colorPer >= 0) color = Color.grey;

    return (
      <View style={styles.container}>
        <Text style={[styles.text, theme.color]}>{hero.name.toUpperCase()}: </Text>
        <View style={[styles.lineEmpty, theme.borderColor, {width: emptyLine}]}></View>
        <View style={[styles.lineWound, theme.borderColor, {width: woundLine}]}></View>
        <View style={[styles.line, theme.borderColor, {backgroundColor: color}, {width: fullLine}]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: 240,
    height: 12,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  lineEmpty: {
    width: 0,
    height: 12,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  lineWound: {
    width: 0,
    height: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Color.red,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default connect(({hero, theme}) => ({hero, theme}), {})(HitPointLineHero);
