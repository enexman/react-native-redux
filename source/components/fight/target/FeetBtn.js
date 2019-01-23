import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { setTargetAttack } from '../../../actions';
import { Color, buttonMonsterAttack } from '../../../css';

class BodyBtn extends React.Component {
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
    this.props.setTargetAttack('feet');
  }
  render() {
    const { heroAttack, monster, theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[
          styles.button,
          this.state.touchColor && styles.opacity,
          (heroAttack.target === 'feet') && styles.opacity,
        ]}>
          <Text style={[
            styles.text,
            theme.color,
            monster.health.feet && styles.redText,
          ]}>
            Ноги
          </Text>
          <View style={[
            styles.smallCircle,
            theme.borderColor,
            this.state.touchColor && theme.backgroundColor,
            (heroAttack.target === 'feet') && theme.backgroundColor,
            monster.health.feet && styles.redBorder,
          ]}></View>
          <View style={[
            styles.line,
            theme.backgroundColor,
            monster.health.feet && styles.redBG,
          ]}></View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 66,
    height: 34,
    justifyContent: 'center',
    opacity: 0.3,
    alignItems: 'flex-end',
  },
  opacity: {
    opacity: 1.
  },
  text: {
    fontSize: 13,
  },
  smallCircle: {
    position: 'absolute',
    borderRadius: 50,
    width: 16,
    height: 16,
    borderWidth: 2,
    left: 0,
    bottom: 0,
  },
  line: {
    width: 50,
    height: 2,
    right: 0,
  },
  redBG: {
    backgroundColor: Color.red,
  },
  redBorder: {
    borderColor: Color.red,
  },
  redText: {
    color: Color.red,
  },
});

export default connect(({heroAttack, monster, theme}) => ({heroAttack, monster, theme}), {setTargetAttack})(BodyBtn);
