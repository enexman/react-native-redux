import React from 'react';
import { StyleSheet, Image, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import ImageList from '../../image-list/ImageList';
import { openDialogMonster } from '../../../actions';
import MonsterMask from './MonsterMask';

class Monster extends React.Component {
  onPressTouchable() {
    this.props.openDialogMonster();
  }
  render() {
    const { monster } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={styles.container}>
          <MonsterMask />
          <ImageList name={monster.name}/>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 150,
    overflow: 'hidden',
  },
});

export default connect(({monster}) => ({monster}), {openDialogMonster})(Monster);
