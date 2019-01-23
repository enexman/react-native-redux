import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import DistanceLine from './DistanceLine';
import DistanceArrow from './DistanceArrow';
// import { Color } from '../../../css';


class Distance extends React.Component {
  render() {
    const { monster, theme } = this.props;
    const distance = (monster.distance > 100) ? 100 : monster.distance;
    const position = 150 - Math.round(150/100 * distance);
    return (
      <View style={styles.container}>
        <Text style={[styles.text, theme.color]}>РАССТОЯНИЕ</Text>
        <View style={styles.wrapper}>
          <DistanceLine />
          <View style={[styles.position, {top: position}]}>
            <DistanceArrow />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 35,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: -30,
  },
  position: {
    position: 'absolute',
    left: -35,
    width: 35,
    height: 80,
    top: 0,
  }
});

export default connect(({monster, theme}) => ({monster, theme}), {})(Distance);
