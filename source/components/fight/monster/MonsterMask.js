import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Color } from '../../../css';

class MonsterMask extends React.Component {
  render() {
    const { monster, theme } = this.props;

    let colorPer = monster.hitPoint/monster.fullPoint * 100;
    let color = theme.activeTheme;
    if (60 > colorPer && colorPer >= 40) color = Color.yellow;
    if (40 > colorPer && colorPer >= 20) color = Color.orange;
    if (20 > colorPer && colorPer >= 0) color = Color.grey;

    return (
      <View style={styles.container}>
        <View style={[styles.line, {backgroundColor: color}]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    position: 'absolute',
    top: 1,
  },
  line: {
    width: 150,
    height: 148,
  },
});

export default connect(({monster, theme}) => ({monster, theme}), {})(MonsterMask);
