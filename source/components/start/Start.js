import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import StartBtn from './StartBtn';
import LoadBtn from './LoadBtn';
import Logo from './Logo';
// import ManualBtn from './ManualBtn';
// import SettingsBtn from '../elements/SettingsBtn';

class Start extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <LoadBtn/>
        <StartBtn/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(null)(Start);
