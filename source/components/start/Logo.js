import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text, Image } from 'react-native';

class Logo extends React.Component {
  render() {
    const { theme } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.mask, theme.backgroundColor,]}></View>
        <Image
          style={styles.image}
          source={require('../../image/logo-mask.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  mask: {
    position: 'absolute',
    width: 200,
    height: 200,
  }
});

export default connect(({theme}) => ({theme}))(Logo);
