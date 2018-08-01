import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { Color } from './../../css';

class StartBtn extends React.Component {
  state ={
    touchColor: false,
  };
  _onPressInTouchableWithoutFeedback() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }
  _onPressTouchableWithoutFeedback() {
    this.setState({
      touchColor: !this.state.touchColor
    });
    this.props.navigate('Room');
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPressIn={this._onPressInTouchableWithoutFeedback.bind(this)}
        onPress={this._onPressTouchableWithoutFeedback.bind(this)}
      >
        <View style={[styles.button, this.state.touchColor && styles.touchColorBG]}>
          <Text style={[styles.green, this.state.touchColor && styles.touchColorText]}>START GAME</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.black,
    width: 120,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.green,
    borderWidth: 2,
  },
  green: {
    color: Color.green,
    fontWeight: 'bold',
  },
  touchColorBG: {
    backgroundColor: Color.green,
  },
  touchColorText: {
    color: Color.black,
  }
});
// Alert.alert('click In')
export default StartBtn;
