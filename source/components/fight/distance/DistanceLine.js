import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { setLongShoot } from '../../../actions';
import { Color, buttonHeroAttack, simpleText } from '../../../css';
import { } from '../../../data/constants';

class Distance extends React.Component {

  render() {
    const { theme } = this.props;
    return (
      <View style={[styles.container,]}>
        <View style={styles.maskContainer}>
          <View style={[styles.mask, theme.backgroundColor]}></View>
          <View style={[styles.maskRed]}></View>
        </View>
        <Image
          style={[styles.image]}
          source={require('../../../image/distance-mask.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 41,
    height: 150,
  },
  image: {
    width: 41,
    height: 150,
  },
  maskContainer: {
    position: 'absolute',
  },
  mask: {
    width: 41,
    height: 90,
  },
  maskRed: {
    width: 41,
    height: 60,
    backgroundColor: Color.red,
  },
});

export default connect(({theme}) => ({theme}), {})(Distance);
