import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { addWeapon, dropWeapon, activeDescription } from './../../actions';
import { Color } from './../../css';

class TakeBtn extends React.Component {
  state ={
    touchColor: false,
  };
  onPressInTouchable() {
    this.setState({
      touchColor: true,
    })
  }
  onPressTouchable() {
    this.setState({
      touchColor: !this.state.touchColor
    });
    const { addWeapon, dropWeapon, activeDescription, item } = this.props;
    addWeapon(item);
    dropWeapon(item.id);
    activeDescription({id: '', description: ''});
  }
  render() {
    const { id } = this.props.item;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[styles.button, this.state.touchColor && styles.touchColorBG, id ? '': styles.invisible]}>
          <Text style={[styles.text, this.state.touchColor && styles.touchColorText]}>TAKE</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 110,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.green,
    borderWidth: 1,
  },
  text: {
    color: Color.green,
    fontSize: 13,
  },
  touchColorBG: {
    backgroundColor: Color.green,
  },
  touchColorText: {
    color: Color.black,
    fontWeight: 'bold',
  },
  invisible: {
    display: 'none',
  }
});

export default connect(null, {addWeapon, dropWeapon, activeDescription})(TakeBtn);
