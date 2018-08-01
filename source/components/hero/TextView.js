import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from '../../css';

class TextView extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textColor}>{this.props.name} </Text>
        <Text style={[styles.textColor, styles.weight]}>{this.props.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  textColor: {
    color: Color.green,
  },
  weight: {
    fontWeight: 'bold',
  }
});

export default TextView;
