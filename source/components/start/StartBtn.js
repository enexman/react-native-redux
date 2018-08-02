import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { Color } from './../../css';

class StartBtn extends React.Component {
  state ={
    touchColor: false,
  };
  onPressInTouchable() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }
  onPressTouchable() {
    this.setState({
      touchColor: !this.state.touchColor
    });
    this.props.navigate('Room');
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[styles.button, this.state.touchColor && styles.touchColorBG]}>
          <Text style={[styles.text, this.state.touchColor && styles.touchColorText]}>START GAME</Text>
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
  text: {
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
