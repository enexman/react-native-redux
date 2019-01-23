import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import DialogDead from './dialog-dead/DialogDead';
import DialogRun from './dialog-run/DialogRun';
import DialogAttack from './dialog-attack/DialogAttack';
import DialogMonster from './dialog-monster/DialogMonster';


class DialogList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DialogDead />
        <DialogRun />
        <DialogAttack />
        <DialogMonster />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default connect(null, {})(DialogList);
