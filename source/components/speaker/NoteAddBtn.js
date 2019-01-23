import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { buttonRoomInnerAction, touchColorText } from './../../css';
import { screenNavigation } from './../../data/screen-navigation';
import {
  changeScreen,
  addNote,
} from '../../actions';

class NoteAddBtn extends React.Component {
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
    const { changeScreen, addNote, note } = this.props;
    changeScreen(screenNavigation.room);
    addNote(note);
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
          <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>Закончить разговор</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    ...buttonRoomInnerAction,
  },
  text: {
    fontWeight: 'bold',
  },
  touchColorText: {
    ...touchColorText,
  }
});

export default connect(
  ({room, theme}) => ({room, theme}),
  {changeScreen, addNote}
)(NoteAddBtn);
