import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { setLongShoot } from '../../actions';
// import { Color, buttonHeroAttack, simpleText } from '../../css';

class LongShootBtn extends React.Component {
  state ={
    touchColor: false,
  };
  onPressIn() {
    if (this.props.monster.distance <= 0) return;
    this.setState({
      touchColor: true,
    })
  }
  onPress() {
    if (this.props.monster.distance <= 0) return;
    this.setState({
      touchColor: !this.state.touchColor
    });
    this.props.setLongShoot();
  }
  render() {
    const { heroAttack, theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.button, ]}>
          <View style={[styles.mask, theme.backgroundColor, this.state.touchColor && styles.touchColorBG, heroAttack.longShoot && styles.touchColorBG]}></View>
          <Image
            style={[styles.image]}
            source={require('../../image/accuracy-aim-mask.png')}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  touchColorBG: {
    opacity: 1,
  },
  image: {
    width: 55,
    height: 55,
  },
  mask: {
    position: 'absolute',
    width: 55,
    height: 55,
    opacity: 0.3,
  }
});

export default connect(({heroAttack, theme, monster}) => ({heroAttack, theme, monster}), {setLongShoot})(LongShootBtn);
