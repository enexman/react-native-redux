import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

class HeroCell extends React.Component {

  render() {
    const { theme } = this.props;
    return (
      <View style={[styles.circle, theme.backgroundColor]}></View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 50,
    width: 10,
    height: 10,
    margin: 2,
  },
});

export default connect(({theme}) => ({theme}), {})(HeroCell);
