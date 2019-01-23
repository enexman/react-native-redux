import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { changeScreen } from '../../actions';
import { Color } from '../../css';
import { screenNavigation } from '../../data/screen-navigation';

class RunOkBtn extends React.Component {
  state = {
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
    const { changeScreen } = this.props;
    changeScreen(screenNavigation.room);
  }
  render() {
    const { theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[styles.button, this.state.touchColor && theme.backgroundColor]}>
          <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>Продолжить</Text>
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
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  touchColorText: {
    color: Color.black,
    fontWeight: 'bold',
  },
});

export default connect(
  ({room, theme}) => ({room, theme}),
  {changeScreen}
)(RunOkBtn);
