import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Color } from './../../css';

class InventoryItem extends React.Component {
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
  }
  render() {
    // const { message, navigation, type } = this.props.inventory;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[styles.button, this.state.touchColor && styles.touchColorBG]}>
          <Text style={[styles.text, this.state.touchColor && styles.touchColorText]}>
            {this.props.inventoryItem.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.black,
    marginBottom: 5,
  },
  text: {
    color: Color.green,
    textAlign: 'center',
  },
  touchColorBG: {
    backgroundColor: Color.green,
  },
  touchColorText: {
    color: Color.black,
    fontWeight: 'bold',
  }
});

// export default connect(({inventory}) => ({inventory}))(Inventory);
export default connect(null, {})(InventoryItem);
