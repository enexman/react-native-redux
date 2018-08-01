import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert} from 'react-native';
import { connect } from 'react-redux';
import { Color } from './../../css';
import { nextMove, createRoom } from '../../actions';

class NavButton extends React.Component {
  state ={
    touchColor: false,
  };
  onPressInTouchable() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }
  onPressTouchable() {
    this.setState({
      touchColor: !this.state.touchColor
    });
    this.getNavigation(this.props.target);
  }
  getNavigation(navigation) {
    switch (navigation) {
      case 'forward' :
      case 'right' :
      case 'left' :
      case 'fight' :
      case 'run' :
        this.props.nextMove();
        this.props.createRoom();
        return;
      default: return;
    }
  }
  render() {
    let target;
    switch (this.props.target) {
      case 'forward' : target = 'Go forward';
        break;
      case 'right' : target = 'Go to the right';
        break;
      case 'left' : target = 'Go to the left';
        break;
      case 'fight' : target = 'Take the fight';
        break;
      case 'run' : target = 'Run without looking back';
        break;
      default: break;
    }
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={styles.container}>
          <View style={[styles.circle, this.state.touchColor && styles.touchCircle]}></View>
          <Text style={styles.text}>
            {target}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: Color.red,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderColor: Color.green,
    borderWidth: 2,
    marginRight: 10,
  },
  touchCircle: {
    backgroundColor: Color.green,
  },
  text: {
    color: Color.green,
  }
});

export default connect(null,{nextMove, createRoom})(NavButton);
