import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { closeDialogMonster } from '../../../actions';
import { Color } from '../../../css';

class DialogAttack extends React.Component {
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
    this.props.closeDialogMonster();
  }

  render() {
    const { isOpenMonster } = this.props.dialog;
    const { theme, } = this.props;
    const { name, speed, distance, hitPoint, fullPoint, attack, health } = this.props.monster;

    return (
      <View style={[styles.dark, !isOpenMonster && styles.invisible]}>
        <View style={[styles.container, theme.borderColor]}>
          <View style={styles.texts}>
            <Text style={[theme.color,]}>{name.toUpperCase()}</Text>
            <Text style={[theme.color,]}>Здоровье: {hitPoint} из {fullPoint}</Text>
            <Text style={[theme.color,]}>Атака: {attack}</Text>
            <Text style={[theme.color,]}>Скорость: {speed}</Text>
            <Text style={[theme.color, health.head && styles.red]}>
              Голова: {health.head ? 'повреждена, получает двойной урон' : 'цела'}
            </Text>
            <Text style={[theme.color, health.hands && styles.red]}>
              Руки: {health.hands ? 'повреждены, вдвое снижен урон от атаки' : 'целы'}
            </Text>
            <Text style={[theme.color, health.feet && styles.red]}>
              Ноги: {health.feet ? 'повреждены, скорость снижена вдвое' : 'целы'}
            </Text>
          </View>
          <View style={styles.wrapper}>
            <TouchableWithoutFeedback
              onPressIn={this.onPressIn.bind(this)}
              onPressOut={this.onPressOut.bind(this)}
              onPress={this.onPress.bind(this)}
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
    width: 330,
    height: 200,
    left: '50%',
    marginLeft: -160,
    top: '50%',
    marginTop: -100,
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
  texts: {
    alignItems: 'center',
    justifyContent: 'center',
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
  red: {
    color: Color.red,
  },
});

export default connect(({dialog, theme, monster}) => ({dialog, theme, monster}), {closeDialogMonster})(DialogAttack);
