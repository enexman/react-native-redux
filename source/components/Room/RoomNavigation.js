import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavButton from './NavButton';

class RoomNavigation extends React.Component {
  render() {
    const { navigation } = this.props;
    const navButtons = navigation.map((it, id) => {
      return <NavButton key={id} target={it}/>
    });
    return (
      <View style={styles.container}>
        {navButtons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default RoomNavigation;
