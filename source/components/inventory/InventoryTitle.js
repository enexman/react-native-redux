import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import CloseBtn from './CloseBtn';
import { Color } from './../../css';

class InventoryTitle extends React.Component {
  render() {
    // const { message, navigation, type } = this.props.inventory;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Inventory</Text>
        <CloseBtn navigate={this.props.navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: Color.green,
    fontWeight: 'bold',
    fontSize: 20,
  }
});

// export default connect(({inventory}) => ({inventory}))(Inventory);
export default connect(null, {})(InventoryTitle);
