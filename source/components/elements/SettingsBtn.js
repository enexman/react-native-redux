import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { changeScreen } from '../../actions'
import { Color } from './../../css';
import { screenNavigation } from './../../data/screen-navigation';

class SettingsBtn extends React.Component {
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
    changeScreen(screenNavigation.settings);
  }

  render() {
    const { theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.container]}>
          <View style={[styles.button]}>
            <View style={[styles.mask, theme.backgroundColor, this.state.touchColor && styles.touchColorBG]}></View>
            <Image
              style={[styles.image]}
              source={require('../../image/gear-mask.png')}
            />
          </View>
        </View>

      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchColorBG: {
    opacity: 0.5,
  },
  image: {
    width: 40,
    height: 40,
  },
  mask: {
    position: 'absolute',
    width: 40,
    height: 40,
    opacity: 1,
  }
});

export default connect(({theme}) => ({theme}), {changeScreen})(SettingsBtn);
