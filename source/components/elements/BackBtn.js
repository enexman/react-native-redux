import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { changeScreen } from '../../actions'
import { Color } from './../../css';

class BackBtn extends React.Component {
  state ={
    touchColor: false,
  };

  onPressIn() {
    this.setState({
      touchColor: true,
    })
  }

  onPressOut() {
    this.setState({
      touchColor: false,
    })
  }

  onPress() {
    const { changeScreen, path } = this.props;
    changeScreen(path);
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
          <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>X</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 25,
    height: 25,
    right: 20,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  touchColorText: {
    color: Color.black,
  }
});

export default connect(({theme}) => ({theme}), {changeScreen})(BackBtn);
