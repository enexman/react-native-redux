import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { isOpen, isTouch } from './../../actions';
import { Color } from './../../css';

class RoomMessage extends React.Component {
  onPressTouchable() {
    if(!this.props.dialog.isTouch && this.props.room.dialog) {
      this.props.isOpen(true);
      this.props.isTouch(true);
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={styles.container}>
          <Text style={styles.text}>
            {this.props.message}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    color: Color.green,
  }
});

export default connect(({dialog, room}) => ({dialog, room}), {isOpen, isTouch})(RoomMessage);
