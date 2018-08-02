import React from 'react';
import { StyleSheet, Image, View, Text, TouchableWithoutFeedback } from 'react-native';

class HeroInventoryBtn extends React.Component {
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
    this.props.navigate('Inventory');
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={styles.container}>
          <Image
            style={{width: 150, height: 100}}
            source={{uri: 'http://placehold.it/150x100'}}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

export default HeroInventoryBtn;
