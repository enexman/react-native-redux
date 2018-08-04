import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import DropBtn from './DropBtn';
import TakeBtn from './TakeBtn';
import { Color } from './../../css';

class InventoryDesc extends React.Component {
  render() {
    const { description } = this.props.description;
    return (
      <View style={styles.container}>
        <Text style={styles.green}>{description.description}</Text>
        <View style={styles.wrapper}>
          <DropBtn id={description.id}/>
          <TakeBtn item={description}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default connect(({description}) => ({description}), {})(InventoryDesc);
