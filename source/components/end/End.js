import React from 'react';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import EndBtn from './EndBtn';
import { connect } from 'react-redux';

class End extends React.Component {
  render() {
    const { theme } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={[styles.image, theme.backgroundColor]}
          source={require('../../image/rip-mask.png')}
        />
        <EndBtn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  mask: {
    position: 'absolute',
    width: 150,
    height: 150,
  }
});

export default connect(({theme}) => ({theme}))(End);
