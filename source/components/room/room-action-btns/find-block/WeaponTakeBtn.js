import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { buttonRoomAction, touchColorText } from '../../../../css';
import { screenNavigation } from '../../../../data/screen-navigation';
import {
  changeScreen,
  addNewWeaponInventory,
  deactivateWeapon,
  findIsActivated,
} from '../../../../actions';

class WeaponTakeBtn extends React.Component {
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
    const { changeScreen, addNewWeaponInventory, weapon, deactivateWeapon, findIsActivated, medicals, hero } = this.props;

    const boolMedical = medicals.medicals.some((it) => it.room === hero.room);

    addNewWeaponInventory(weapon);
    deactivateWeapon(weapon);
    changeScreen(screenNavigation.room);
    if (!boolMedical) {
      findIsActivated();
    }
  }

  render() {
    const { theme, weapon } = this.props;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.button, this.state.touchColor && theme.backgroundColor]}>
          <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>Взять {weapon.name}</Text>
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
    ...touchColorText,
  }
});

export default connect(
  ({room, theme, medicals, hero}) => ({room, theme, medicals, hero}),
  {changeScreen, addNewWeaponInventory, deactivateWeapon, findIsActivated}
)(WeaponTakeBtn);
