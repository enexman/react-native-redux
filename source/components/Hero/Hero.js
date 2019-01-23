import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import HeroBigLine from'./HeroBigLine';
import HeroAttribute from'./HeroAttribute';
import TitleBlock from'../elements/TitleBlock';
import TextView from'./TextView';
import SettingsBtn from'./../elements/SettingsBtn';
import { screenNavigation } from '../../data/screen-navigation';

class Hero extends React.Component {
  render() {
    const { theme } = this.props;
    const { name, accuracy, strength, rating, status, agility } = this.props.hero;
    const { body, first, second} = this.props.hero.weapons;
    return (
      <View style={styles.container}>
        <TitleBlock title={status} toBack={screenNavigation.room}/>
        <View style={styles.main}>
          <View style={styles.imageWrapper}>
            <View style={[styles.mask, theme.backgroundColor,]}></View>
            <Image
              style={[styles.image]}
              source={require('../../image/user-mask.png')}
            />
          </View>
          <View style={styles.dataBlock}>
            <View style={styles.dataBlockName}>
              <TextView name="Имя:" value={name} width={true} />
              <TextView name="Рейтинг:" value={rating} width={true} />
            </View>
            <View style={styles.dataBlockAttr}>
              <HeroAttribute dataName="Точность" dataSum={accuracy} />
              <HeroAttribute dataName="Сила" dataSum={strength} />
              <HeroAttribute dataName="Ловкость" dataSum={agility} />
            </View>
            <View style={styles.dataBlockWeapon}>
              <TextView name="1-е оружие:" value={first.name} width={true} />
              <TextView name="2-е оружие:" value={second.name} width={true} />
              <TextView name="Броня:" value={body.name} width={true} />
            </View>
            <View style={styles.dataBlockTexts}>
              <TextView name="Защита: " value={body.sum} width={true} />
              <TextView name="Атака 1: " value={first.sum} width={true} />
              <TextView name="Атака 2: " value={second.sum} width={true} />
            </View>
          </View>
        </View>
        <View  style={styles.footer}>
          <HeroBigLine />
          <SettingsBtn />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'grey',
    marginTop: 5,
    width: '90%',
    maxWidth: 600,
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  mask: {
    position: 'absolute',
    width: 200,
    height: 200,
    opacity: 1,
  },
  imageWrapper: {},
  dataBlock: {
    height: 200,
    justifyContent: 'space-around',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // backgroundColor: 'yellow',
  },
  dataBlockName: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  dataBlockAttr: {},
  dataBlockWeapon: {},
  dataBlockTexts: {
    flexDirection: 'row',
  },
  footer: {
    alignItems: 'center',
    // backgroundColor: 'yellow',
  }
});

export default  connect(({theme, hero}) => ({theme, hero}))(Hero);
