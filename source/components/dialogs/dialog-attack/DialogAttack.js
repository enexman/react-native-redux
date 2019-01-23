import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { closeDialogAttack } from '../../../actions';
import { Color } from '../../../css';

class DialogAttack extends React.Component {
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
    this.props.closeDialogAttack();
  }

  render() {
    const { isOpenAttack, message } = this.props.dialog;
    const { theme } = this.props;
    return (
      <View style={[styles.dark, !isOpenAttack && styles.invisible]}>
        <View style={[styles.container, theme.borderColor]}>
          <Text style={[styles.text, theme.color]}>{message}</Text>
          <View style={styles.wrapper}>
            <TouchableWithoutFeedback
              onPressIn={this.onPressInTouchable.bind(this)}
              onPress={this.onPressTouchable.bind(this)}
            >
              <View style={[styles.button, theme.borderColor, this.state.touchColor && theme.backgroundColor]}>
                <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>ОК</Text>
              </View>
            </TouchableWithoutFeedback>
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
  },
  button: {
    width: 110,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  touchColorText: {
    color: Color.black,
    fontWeight: 'bold',
  },
});

export default connect(({dialog, theme}) => ({dialog, theme}), {closeDialogAttack})(DialogAttack);
