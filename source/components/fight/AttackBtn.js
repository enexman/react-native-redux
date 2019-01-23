import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { connect } from 'react-redux';
import { setHeroAttack, setMonsterAttack, openDialogAttack } from '../../actions';

class AttackBtn extends React.Component {
  state ={
    touchColor: false,
  };

  onPressIn() {
    const {heroAttack, monster} = this.props;
    if((heroAttack.longShoot || heroAttack.shoot) && (monster.distance <= 0)) return;

    this.setState({
      touchColor: true,
    })
  }

  onPressOut() {
    this.setState({
      touchColor: false,
    })
  }

  onPress() {
    const { setHeroAttack, heroAttack, hero, setMonsterAttack, monster, openDialogAttack } = this.props;
    const { target, shoot, longShoot, hitByHand } = heroAttack;

    if((heroAttack.longShoot || heroAttack.shoot) && (monster.distance <= 0)) return;

    if(longShoot && !target) {
      openDialogAttack('Выберите цель');
      return;
    }

    if(!shoot && !longShoot && !hitByHand) {
      openDialogAttack('Выберите удар');
      return;
    }

    setHeroAttack(heroAttack, hero);
    setMonsterAttack(monster);
  }
  render() {
    const { theme, heroAttack } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[
          styles.button,
          theme.borderColor,]}
        >
          <View style={[styles.mask, theme.backgroundColor, this.state.touchColor && styles.touchColorBG]}></View>

          <Image
            style={[styles.image, heroAttack.longShoot && styles.visible]}
            source={require('../../image/accuracy-aim-mask.png')}
          />
          <Image
            style={[styles.image, heroAttack.shoot && styles.visible]}
            source={require('../../image/aim-mask.png')}
          />
          <Image
            style={[styles.image, heroAttack.hitByHand && styles.visible]}
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
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    marginRight: 40,
    marginLeft: 'auto',
  },
  text: {},
  touchColorBG: {
    opacity: 1,
  },
  mask: {
    borderRadius: 50,
    position: 'absolute',
    width: 70,
    height: 70,
    opacity: 0.3,
  },
  image: {
    borderRadius: 50,
    width: 70,
    height: 70,
    display: 'none',
  },
  visible: {
    display: 'flex',
  },
});

export default connect(
  ({heroAttack, hero, monster, theme}) => ({heroAttack, hero, monster, theme}),
  {setHeroAttack, setMonsterAttack, openDialogAttack}
)(AttackBtn);
