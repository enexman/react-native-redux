import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text } from 'react-native';
import TitleBlock from '../elements/TitleBlock';
import SkipBtn from './SkipBtn';

class Intro extends React.Component {
  render() {
    const { theme } = this.props;

    return (
      <View style={styles.container}>
        <TitleBlock title="История" toBack={false} />
        <Text style={[styles.text, theme.color]}>
          Вы летите в космосе в состоянии криосна, затем просыпаетесь и поехали..
        </Text>
        <SkipBtn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 20,
  }
});


export default connect(({theme}) => ({theme}), {})(Intro);

