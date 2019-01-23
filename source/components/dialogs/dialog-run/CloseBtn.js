import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { closeDialogRun, setMonsterAttack, setMonsterDistance } from '../../../actions';
import { Color } from '../../../css';

class DialogRunBtnNo extends React.Component {
  state ={
    touchColor: false,
  };

  onPressIn() {
    this.setState({
      touchColor: !this.state.touchColor
    });
  }

  onPressOut() {
    this.setState({
      touchColor: !this.state.touchColor
    });
  }

  onPress() {
    const { closeDialogRun, setMonsterAttack, monster, setMonsterDistance} = this.props;

    closeDialogRun();

    if(monster.distance <= 0) {
      setMonsterAttack(monster);
      return;
    }

    setMonsterDistance(monster);
  }

  render() {
    const { theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.button, theme.borderColor, this.state.touchColor && theme.backgroundColor]}>
          <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>Ок</Text>
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

export default connect(
  ({theme, monster}) => ({theme, monster}),
  {closeDialogRun, setMonsterAttack, setMonsterDistance}
)(DialogRunBtnNo);
