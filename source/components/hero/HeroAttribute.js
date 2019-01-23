import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Color } from './../../css';

class HitPointLineHero extends React.Component {
  render() {
    const { dataName, dataSum, theme } = this.props;
    const maxData = 80;
    const totalWidth = 160;
    const fullLine = totalWidth/100 * (dataSum/maxData * 100);
    const emptyLine = totalWidth - fullLine;

    let colorPer = dataSum/maxData * 100;
    let color = theme.activeTheme;
    if (60 > colorPer && colorPer >= 40) color = Color.yellow;
    if (40 > colorPer && colorPer >= 20) color = Color.orange;
    if (20 > colorPer && colorPer >= 0) color = Color.grey;

    return (
      <View style={styles.container}>
        <Text style={[styles.text, theme.color]}>{dataName}:</Text>
        <Text style={[styles.textWeight, theme.color]}>{dataSum}</Text>
        <View style={[styles.line, theme.borderColor, {backgroundColor: color}, {width: fullLine}]}></View>
        <View style={[styles.lineEmpty, theme.borderColor, {width: emptyLine}]}></View>
        <Text style={[styles.textWeight, theme.color]}>{maxData}</Text>
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
    width: 160,
    height: 12,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  lineEmpty: {
    width: 0,
    height: 12,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 12,
    width: 70,
    textAlign: 'right',
  },
  textWeight: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
  },
});

export default connect(({hero, theme}) => ({hero, theme}), {})(HitPointLineHero);
