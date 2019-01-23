import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { addWeapon, removeWeapon, removeInventory, addInventory } from './../../actions';
import { Color } from './../../css';

class ToggleBtn extends React.Component {

  onPressTouchable() {
    const { item, addWeapon, removeInventory, removeWeapon, addInventory} = this.props;
    if (!item.active) {
      addWeapon(item);
      removeInventory(item);
    } else if(item.active) {
      removeWeapon(item);
      addInventory(item);
    }
  }
  render() {
    const { theme } = this.props;
    const item = this.props.inventory.filter((it) => it.key === this.props.item.key)[0];
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={this.onPressTouchable.bind(this)}
        >
          <View style={[styles.button, theme.borderColor, item.active && theme.backgroundColor]}>
            <Text style={[styles.text, theme.color, item.active && styles.touchColorText]}>{!item.active ? 'ВЗЯТЬ' : 'СНЯТЬ'}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 110,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  text: {
    fontSize: 13,
  },
  touchColorText: {
    color: Color.black,
    fontWeight: 'bold',
  },
});

export default connect(
  ({inventory, theme}) => ({inventory, theme}),
  {addWeapon, removeWeapon, removeInventory, addInventory}
)(ToggleBtn);
