import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import LevelBtn from './LevelBtn';
import TitleBlock from '../elements/TitleBlock';

class Levels extends React.Component {
  render() {
    const { theme } = this.props;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const levels = arr.map((level) => <LevelBtn levelName={level} key={level} />);
    return (
      <View style={styles.container}>
        <TitleBlock title="Уровни" toBack={false}/>
        <View style={styles.buttons}>
          {levels}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
  },
});

export default connect(({theme}) => ({theme}))(Levels);
