import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { changeScreen } from '../../../actions';
import { Color, buttonRoomAction } from '../../../css';
import { screenNavigation } from '../../../data/screen-navigation';

class FightBtn extends React.Component {
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
    const { changeScreen } = this.props;
    changeScreen(screenNavigation.speaker);
  }
  
  render() {
    const { theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.button, this.state.touchColor && theme.backgroundColor]}>
          <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>Поговорить</Text>
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
    fontWeight: 'bold',
  },
  touchColorText: {
    color: Color.black,
  }
});

export default connect(({theme}) => ({theme}), {changeScreen})(FightBtn);
