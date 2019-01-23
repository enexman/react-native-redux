import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Color } from './../../css';

class HeroSmallLine extends React.Component {
  render() {
    const { hero, theme } = this.props;
    const totalWidth = 200;
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
    backgroundColor: Color.black,
    paddingLeft: 5,
    paddingRight: 5,
  },
  line: {
    width: 200,
    height: 10,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  lineEmpty: {
    width: 0,
    height: 10,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  lineWound: {
    width: 0,
    height: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Color.red,
  },
});

export default connect(({hero, theme}) => ({hero, theme}), {})(HeroSmallLine);
