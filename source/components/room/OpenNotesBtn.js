import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { changeScreen } from '../../actions';
// import { Color, buttonRoomNav } from './../../css';
import { screenNavigation } from '../../data/screen-navigation';

class OpenNotesBtn extends React.Component {
  state ={
    touchColor: false,
  };

  onPressIn() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPressOut() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPress() {
    this.props.changeScreen(screenNavigation.notes);
  }

  render() {
    const { theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.button]}>
          <View style={[styles.mask, theme.backgroundColor, this.state.touchColor && styles.touchColorBG]}></View>

          <Image
            style={[styles.image]}
            source={require('../../image/note-mask.png')}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginRight: 15,
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

export default connect(({theme}) => ({theme}), {changeScreen})(OpenNotesBtn);
