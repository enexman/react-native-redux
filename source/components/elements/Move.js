import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from './../../css';

class Move extends React.Component {
  render() {
    const { theme, move } = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.text, theme.color,]}>ХОД: {move.increment}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 100,
    top: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.black,
  },
  text: {
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
  },
});

export default connect(({theme, move}) => ({theme, move}))(Move);

