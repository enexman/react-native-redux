import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { isOpen } from './../../actions';
import DialogBtnYes from './DialogBtnYes';
import DialogBtnNo from './DialogBtnNo';
import { Color } from './../../css';

class Dialog extends React.Component {
  render() {
    const { dialog, sum} = this.props.room;
    return (
      <View style={[styles.dark, !this.props.dialog.isOpen && styles.invisible]}>
        <View style={styles.container}>
          <Text style={styles.text}>{dialog + ((sum) ? sum : '')}</Text>
          <View style={styles.wrapper}>
            <DialogBtnYes />
            <DialogBtnNo />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dark: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    position: 'absolute',
    backgroundColor: Color.black,
    justifyContent: 'space-around',
    width: 280,
    height: 80,
    left: 150,
    top: 110,
    borderColor: Color.green,
    borderWidth: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: Color.green,
    fontSize: 13,
    textAlign: 'center',
  },
  invisible: {
    display: 'none',
    position: 'relative',
  }
});

export default connect(({dialog, room}) => ({dialog, room}),{isOpen})(Dialog);
