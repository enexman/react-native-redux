import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import BackBtn from './BackBtn';
import HeroSmallLine from './HeroSmallLine';
import { titleText } from './../../css';
import { screenNavigation } from '../../data/screen-navigation';

class TitleBlock extends React.Component {
  render() {
    const { title, toBack, theme, screens } = this.props;

    const backBtn = (toBack)
      ? <BackBtn path={toBack}/>
      : null;
    // const heroSmallLine = (screens.activeScreen === screenNavigation.room)
    const heroSmallLine = (false)
      ? <HeroSmallLine />
      : null;

    return (
      <View style={styles.container}>
        <Text style={[styles.title, theme.color]}>{title.toUpperCase()}</Text>
        {backBtn}
        <View style={styles.heroLine}>
          {heroSmallLine}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  title: {
    ...titleText,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heroLine: {
    position: 'absolute',
    right: 30,
    top: 6,
  },
});

export default connect(({theme, screens, hero}) => ({theme, screens, hero}))(TitleBlock);
