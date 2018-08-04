import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Color } from './../../css';

class InventoryFooter extends React.Component {
  render() {
    // const { message, navigation, type } = this.props.inventory;
    return (
      <View style={styles.container}>
        <Text style={styles.green}>max elements: 10</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  green: {
    color: Color.green,
  },
});

// export default connect(({inventory}) => ({inventory}))(Inventory);
export default connect(null, {})(InventoryFooter);
