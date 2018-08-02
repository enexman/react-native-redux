import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import InventoryItem from './InventoryItem';
import { Color } from './../../css';

class InventoryList extends React.Component {
  render() {
    const { inventory } = this.props;
    const inventories = inventory.map((it) => {
      return <InventoryItem key={it.id} inventoryItem={it}/>
    });

    return (
      <View style={styles.container}>
        {inventories}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
    // alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
});

// export default connect(({inventory}) => ({inventory}))(Inventory);
export default connect(({inventory}) => ({inventory}), {})(InventoryList);
