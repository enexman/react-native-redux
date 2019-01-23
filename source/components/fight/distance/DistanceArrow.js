import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { setLongShoot } from '../../../actions';
import { Color, buttonHeroAttack, simpleText } from '../../../css';
import { criticalDistance } from '../../../data/constants';

class DistanceArrow extends React.Component {

  render() {
    const { monster, theme } = this.props;
    const color = (monster.distance > criticalDistance)
      ? theme.activeTheme
      : Color.red;
    const distance = (monster.distance > 100) ? '100+' : monster.distance;
    return (
      <View style={styles.wrapper}>
        <Text style={[styles.text, {color}]}>{distance}</Text>
        <View style={[styles.button,]}>
          <View style={[styles.mask, {backgroundColor: color}]}></View>
          <Image
            style={[styles.image]}
            source={require('../../../image/arrow-distance-mask.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
  },
  image: {
    width: 20,
    height: 20,
  },
  mask: {
    position: 'absolute',
    width: 20,
    height: 20,
  },
  text: {
    paddingTop: 1,
    fontSize: 12,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

});

export default connect(({monster, theme}) => ({monster, theme}), {})(DistanceArrow);
