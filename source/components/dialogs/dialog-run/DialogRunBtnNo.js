import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { closeDialogRun } from '../../../actions';
import { Color } from '../../../css';

class DialogRunBtnNo extends React.Component {
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
    this.props.closeDialogRun();
  }
  render() {
    const { theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[styles.button, theme.borderColor, this.state.touchColor && theme.backgroundColor]}>
          <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>Нет</Text>
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
    borderWidth: 1,
  },
  text: {
    fontSize: 13,
  },
  touchColorText: {
    color: Color.black,
    fontWeight: 'bold',
  },
  invisible: {
    display: 'none',
  }
});

export default connect(({theme}) => ({theme}), {closeDialogRun})(DialogRunBtnNo);
