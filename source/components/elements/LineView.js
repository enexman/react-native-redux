import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from './../../css';

class LineView extends React.Component {
  render() {
    const { hero, theme } = this.props;
    // const totalWidth = 100;
    // const fullLine = totalWidth/100 * (hero.hitPoint/hero.fullPoint * 100);
    // const woundLine = totalWidth/100 * (hero.wound/hero.fullPoint * 100);
    // const emptyLine = totalWidth - fullLine - woundLine;
    return (
      <View style={styles.container}>
        <View style={[styles.line, theme.borderColor, theme.backgroundColor]}></View>
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
    marginBottom: 10,
    marginTop: 10,
    height: 2,
    width: '100%',

  },
  lineEmpty: {
    width: 0,
    height: 2,
    backgroundColor: Color.red,
  },
  lineWound: {
    width: 0,
    height: 2,
    backgroundColor: Color.red,
  },
});

export default connect(({theme, hero}) => ({theme, hero}))(LineView);

// <View style={[styles.lineEmpty, theme.borderColor, {width: emptyLine  + '%'}]}></View>
// <View style={[styles.lineWound, theme.borderColor, {width: woundLine  + '%'}]}></View>
// <View style={[styles.line, theme.borderColor, theme.backgroundColor, {width: fullLine + '%'}]}></View>
