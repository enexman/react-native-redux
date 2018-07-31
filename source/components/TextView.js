import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../css';

class TextView extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textColor}>{this.props.name} </Text>
        <Text style={styles.textColor}>{this.props.value}</Text>
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
    color: Colors.green
  },
});

export default TextView;
