import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { changeScreen } from '../../actions'
import { Color } from './../../css';
import { screenNavigation } from '../../data/screen-navigation';

class ManualBtn extends React.Component {
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
    this.props.changeScreen(screenNavigation.manual);
  }
  render() {
    const { theme } = this.props;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[styles.button, theme.borderColor, this.state.touchColor && styles.touchColorBG]}>
          <Text style={[styles.text, theme.color]}>Правила</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: Color.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  text: {
    // fontSize: 12,
  },
  touchColorBG: {
    borderColor: Color.black,
    borderBottomWidth: 1,
  },
});

export default connect(({theme}) => ({theme}), {changeScreen})(ManualBtn);
