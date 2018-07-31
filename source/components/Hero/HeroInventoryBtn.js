import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

class HeroInventoryBtn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 150, height: 100}}
          source={{uri: 'http://placehold.it/150x100'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default HeroInventoryBtn;
