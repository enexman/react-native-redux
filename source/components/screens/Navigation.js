import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, StatusBar, } from 'react-native';
import MainScreen from './MainScreen';
import { Color } from '../../styles';
import { screenNavigation } from '../../data';

StatusBar.setHidden(true);

class Navigation extends React.Component {

  render() {
    const { activeScreen } = this.props.screens;

    console.log('---', activeScreen)
    const navigation = (() => {
      switch (activeScreen) {
        case screenNavigation.main : return <MainScreen />;
        default : return <MainScreen />;
      }
    })();

    return (
      <View style={styles.container}>
        {navigation}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
  },
});

export default connect(screens => screens, {})(Navigation);
