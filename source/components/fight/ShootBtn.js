import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { setShoot } from '../../actions';
import { Color, buttonHeroAttack } from '../../css';

class LongShootBtn extends React.Component {
  state ={
    touchColor: false,
  };
  onPressInTouchable() {
    if (this.props.monster.distance <= 0) return;

    this.setState({
      touchColor: true,
    })
  }
  onPressTouchable() {
    if (this.props.monster.distance <= 0) return;

    this.setState({
      touchColor: !this.state.touchColor
    });
    this.props.setShoot();
  }
  render() {
    const { heroAttack, theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[styles.button]}>
          <View style={[styles.mask, theme.backgroundColor, this.state.touchColor && styles.touchColorBG, heroAttack.shoot && styles.touchColorBG]}></View>
          <Image
            style={[styles.image]}
            source={require('../../image/aim-mask.png')}
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

export default connect(({heroAttack, theme, monster}) => ({heroAttack, theme, monster}), {setShoot})(LongShootBtn);
