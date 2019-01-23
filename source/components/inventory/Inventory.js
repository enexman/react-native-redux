import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import TitleBlock from '../elements/TitleBlock';
import InventoryItem from './InventoryItem';
import { screenNavigation } from '../../data/screen-navigation';

class Inventory extends React.Component {
  render() {
    const { inventory } = this.props;
    return (
      <View style={styles.container}>
        <TitleBlock title="Инвентарь" toBack={screenNavigation.room}/>
        <FlatList
          data={inventory}
          renderItem={({item}) => <InventoryItem key={item.key} item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(({inventory}) => ({inventory}), {})(Inventory);
