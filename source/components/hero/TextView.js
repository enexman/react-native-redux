import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

class TextView extends React.Component {

  render() {
    const { name, value, theme, width } = this.props;
    return (
      <View style={[styles.container]}>
        <Text style={[theme.color, styles.text, width &&  styles.width]}>{name} </Text>
        <Text style={[theme.color, styles.weight]}>{value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 13,
  },
  weight: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  width: {
    width: 75,
    textAlign: 'right',
  }
});

export default connect(({theme}) => ({theme}), {})(TextView);

