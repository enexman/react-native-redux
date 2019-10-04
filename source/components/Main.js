import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Color } from '../styles';
import { doTest } from '../action';

class Main extends React.Component {

  state = {
    touchColor: false,  // псевдокласс active для кнопки enter
  };

  onPressInOut() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPress() {
  }

  render() {

    return (
      <View style={styles.container}>
          <TouchableWithoutFeedback onPressIn={this.onPressInOut.bind(this)} onPressOut={this.onPressInOut.bind(this)} onPress={this.onPress.bind(this)}>
            <View style={styles.button}>
              <Text style={[styles.textBtn, this.state.touchColor && styles.opacity]}>
                Enter
              </Text>
            </View>
          </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: Color.background,
    paddingTop: 25,
    paddingLeft: 5,
    paddingRight: 5,
  },
  button: {
    marginLeft: 5,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: Color.textLevel_1,
  },
  opacity: {
    opacity: 0.3,
  }
});


export default connect(test => test, {doTest})(Main);


