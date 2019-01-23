import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { connect } from 'react-redux';

class ImageList extends React.Component {

  render() {
    const { name } = this.props;

    return (
    <View style={styles.container}>
      <Image
        style={[styles.image, name === 'Монстр 1-ур' && {display: 'flex'}]}
        source={require('../../image/monster-1.png')}
      />
      <Image
        style={[styles.image, name === 'Монстр 2-ур' && {display: 'flex'}]}
        source={require('../../image/monster-2.png')}
      />
      <Image
        style={[styles.image, name === 'Монстр 3-ур' && {display: 'flex'}]}
        source={require('../../image/monster-3.png')}
      />
      <Image
        style={[styles.image, name === 'Монстр 4-ур' && {display: 'flex'}]}
        source={require('../../image/monster-4.png')}
      />
      <Image
        style={[styles.image, name === 'Монстр 5-ур' && {display: 'flex'}]}
        source={require('../../image/monster-5.png')}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
  },
  image: {
    width: 100,
    height: 100,
    display: 'none',
  },
});

export default connect(null, {})(ImageList);
