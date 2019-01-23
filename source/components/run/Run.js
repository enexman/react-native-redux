import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text } from 'react-native';
import RunOkBtn from './RunOkBtn';

class Run extends React.Component {
  render() {
    const { theme } = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.text, theme.color]}>Это не бегство, а достойное отступление =)</Text>
        <RunOkBtn />
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
  text: {
    marginBottom: 15,
  },
});

export default connect(({theme}) => ({theme}), {})(Run);
