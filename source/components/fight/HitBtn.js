import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { setHitByHand } from '../../actions';
import { Color, buttonHeroAttack, simpleText } from '../../css';

class HitBtn extends React.Component {
  state ={
    touchColor: false,
  };
  onPressInTouchable() {
    if (this.props.monster.distance > 0) return;

    this.setState({
      touchColor: true,
    })
  }
  onPressTouchable() {
    if (this.props.monster.distance > 0) return;

    this.setState({
      touchColor: !this.state.touchColor
    });
    this.props.setHitByHand();
  }
  render() {
    const { heroAttack, theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[styles.button]}>
          <View style={[styles.mask, theme.backgroundColor, this.state.touchColor && styles.touchColorBG, heroAttack.hitByHand && styles.touchColorBG]}></View>
          <Image
            style={[styles.image]}
            source={require('../../image/fist-mask.png')}
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

export default connect(({heroAttack, theme, monster}) => ({heroAttack, theme, monster}), {setHitByHand})(HitBtn);
