import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import { Color } from '../../css';

class StatusWound extends React.Component {
  render() {
    const { monster } = this.props;

    return (
      <View style={styles.container}>
        <Text style={[styles.text, monster.health.hands && styles.opacity]}>A/2</Text>
        <Text style={[styles.text, monster.health.feet && styles.opacity]}>SLOW</Text>
        <Text style={[styles.text, monster.health.head && styles.opacity]}>x2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  text: {
    color: Color.red,
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 0.5,
  },
  opacity: {
    opacity: 1,
  },
});

export default connect(({monster}) => ({monster}))(StatusWound);
