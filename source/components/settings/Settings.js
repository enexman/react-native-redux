import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text } from 'react-native';
import TitleBlock from '../elements/TitleBlock';
import ColorChangerBtn from './ColorChangerBtn';
import { titleText, Color } from '../../css';
import { screenNavigation } from '../../data/screen-navigation';

class Settings extends React.Component {
  render() {
    const { theme } = this.props;
    return (
      <View style={styles.container}>
        <TitleBlock title="Настройки" toBack={screenNavigation.room}/>
        <View style={styles.wrapper}>
          <Text style={[styles.text, theme.color]}>Сменить тему: </Text>
          <View style={styles.colors}>
            <ColorChangerBtn color={Color.green}/>
            <ColorChangerBtn color={Color.blue}/>
            <ColorChangerBtn color={Color.white}/>
            <ColorChangerBtn color={Color.yellow}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colors: {
    marginLeft: 50,
    width: 140,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    ...titleText,
    // fontWeight: 'bold',
  }
});

export default connect(({theme}) => ({theme}))(Settings);
