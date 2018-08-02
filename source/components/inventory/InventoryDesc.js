import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import DropBtn from './DropBtn';
import TakeBtn from './TakeBtn';
import { Color } from './../../css';

class InventoryDesc extends React.Component {
  render() {
    // const { message, navigation, type } = this.props.inventory;
    return (
      <View style={styles.container}>
        <Text style={styles.green}>Description inventory</Text>
        <View style={styles.wrapper}>
          <DropBtn />
          <TakeBtn />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
    // alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  green: {
    color: Color.green,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

// export default connect(({inventory}) => ({inventory}))(Inventory);
export default connect(null, {})(InventoryDesc);
