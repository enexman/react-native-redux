import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { changeScreen } from '../../actions'
import { Color } from './../../css';
import { screenNavigation } from '../../data/screen-navigation';

class SkipBtn extends React.Component {
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
    const { changeScreen } = this.props;
    changeScreen(screenNavigation.levels);
  }

  render() {
    const { theme } = this.props;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.button, this.props.rotate]}>
          <View style={[styles.mask, theme.backgroundColor, this.state.touchColor && styles.touchColorBG]}></View>

          <Image
            style={[styles.image]}
            source={require('../../image/arrow-mask.png')}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchColorBG: {
    opacity: 0.5,
  },
  image: {
    width: 20,
    height: 20,
  },
  mask: {
    position: 'absolute',
    width: 20,
    height: 20,
    opacity: 1,
  }
});

export default connect(({theme}) => ({theme}), {changeScreen})(SkipBtn);
