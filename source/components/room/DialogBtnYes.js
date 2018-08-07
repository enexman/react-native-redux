import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { isOpen, updateParameter } from './../../actions';
import { Color } from './../../css';

class DialogBtnYes extends React.Component {
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
    this.props.isOpen(false);
    switch (this.props.room.type) {
      case 'book' :
        this.props.updateParameter(this.props.room);
        return;
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[styles.button, this.state.touchColor && styles.touchColorBG]}>
          <Text style={[styles.text, this.state.touchColor && styles.touchColorText]}>YES</Text>
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

export default connect(({room}) => ({room}), {isOpen, updateParameter})(DialogBtnYes);
