import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import {
  healHero,
  deactivateMedical,
  findIsActivated
} from '../../../../actions';
import { Color, buttonRoomAction } from '../../../../css';

class MedicalBtn extends React.Component {
  state ={
    touchColor: false,
  };

  onPressIn() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPressOut() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPress() {
    const { deactivateMedical, medical, findIsActivated, weapons, hero } = this.props;

    const boolWeapon = weapons.some((it) => it.room === hero.room);

    deactivateMedical(medical);
    if (!boolWeapon) {
      findIsActivated();
    }
  }

  render() {
    const { theme } = this.props;
    const message = 'Аптечка';
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.button, this.state.touchColor && theme.backgroundColor]}>
          <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>{message}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    ...buttonRoomAction,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  touchColorText: {
    color: Color.black,
  }
});

export default connect(
  ({room, hero, theme, weapons,}) => ({room, hero, theme, weapons,}),
  {healHero, deactivateMedical, findIsActivated}
)(MedicalBtn);
