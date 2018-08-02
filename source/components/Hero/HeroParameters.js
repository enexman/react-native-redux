import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import TextView from'./TextView'

class HeroParameters extends React.Component {
  render() {
    const { name, level, strength, agility, luck } = this.props.hero;
    return (
      <View style={styles.container}>
        <TextView name="Name:" value={name}/>
        <TextView name="Level:" value={level}/>
        <TextView name="Strength:" value={strength}/>
        <TextView name="Agility:" value={agility}/>
        <TextView name="Luck:" value={luck}/>
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

export default connect(({hero}) => ({hero}))(HeroParameters);

