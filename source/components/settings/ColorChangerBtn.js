import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Color } from './../../css';
import { changeTheme } from '../../actions';

class ColorChangerBtn extends React.Component {
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
    this.props.changeTheme(this.props.color);
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[styles.button, {backgroundColor: this.props.color},  this.state.touchColor && styles.touchColorBG]}>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 25,
    height: 25,
  },
  touchColorBG: {
    opacity: 0.5,
  },
});

export default connect(null, {changeTheme})(ColorChangerBtn);
