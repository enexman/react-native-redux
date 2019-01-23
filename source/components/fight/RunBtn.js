import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { openDialogRun } from '../../actions';

class RunBtn extends React.Component {
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
    const { openDialogRun, hero } = this.props;
    openDialogRun(hero);
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
            style={styles.image}
            source={require('../../image/flag-mask.png')}
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
    width: 55,
    height: 55,
    borderRadius: 55,
    marginLeft: 10,

  },
  touchColorBG: {
    opacity: 1,
  },
  image: {
    width: 55,
    height: 55,
  },
  mask: {
    position: 'absolute',
    width: 55,
    height: 55,
    opacity: 0.3,
  }
});

export default connect(({theme, hero}) => ({theme, hero}), {openDialogRun})(RunBtn);
