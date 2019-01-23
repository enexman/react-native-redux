import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import DialogRunBtnYes from './DialogRunBtnYes';
import DialogRunBtnNo from './DialogRunBtnNo';
import CloseBtn from './CloseBtn';
import { Color } from '../../../css';

class Dialog extends React.Component {

  render() {
    const { isOpen, run } = this.props.dialog;
    const { theme } = this.props;
    const message = (run) ? 'Вы хотите покинуть бой?' : 'Сбежать не удалось';
    const yesBtn = (run) ? <DialogRunBtnYes /> : <CloseBtn />;
    const noBtn = (run) ? <DialogRunBtnNo /> : null;
    return (
      <View style={[styles.dark, !isOpen && styles.invisible]}>
        <View style={[styles.container, theme.borderColor]}>
          <Text style={[styles.text, theme.color]}>{message}</Text>
          <View style={styles.wrapper}>
            {yesBtn}
            {noBtn}
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
    left: '50%',
    marginLeft: -140,
    top: '50%',
    marginTop: -40,
    borderWidth: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
  },
  invisible: {
    display: 'none',
    position: 'relative',
  }
});

export default connect(
  ({dialog, theme}) => ({dialog, theme}),
  {})
(Dialog);
