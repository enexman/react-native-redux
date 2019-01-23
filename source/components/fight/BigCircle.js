import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

class BigCircle extends React.Component {

  render() {
    const { theme } = this.props;
    return (
      <View style={[styles.button,]}>
        <View style={[styles.mask, theme.backgroundColor]}></View>
        <Image
          style={[styles.image]}
          source={require('../../image/aim-circle-mask.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  touchColorBG: {
    opacity: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  mask: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
});

export default connect(({theme}) => ({theme}), {})(BigCircle);
