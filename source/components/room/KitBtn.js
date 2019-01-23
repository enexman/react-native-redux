import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { healHero, useMedical, } from '../../actions'

class KitBtn extends React.Component {
  state ={
    touchColor: false,
  };

  onPressToggle() {
    const { medicals, hero, } = this.props;
    if(hero.fullPoint === hero.hitPoint || !medicals.kit) return;
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPress() {
    const { medicals, healHero, hero, useMedical, } = this.props;
    if(hero.fullPoint === hero.hitPoint || !medicals.kit) return;
    healHero();
    useMedical();
  }

  render() {
    const { theme, medicals, hero, } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressToggle.bind(this)}
        onPressOut={this.onPressToggle.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.button]}>
          <View style={[
              styles.mask,
              theme.backgroundColor,
              this.state.touchColor && styles.touchColorBG,
              (hero.fullPoint === hero.hitPoint || !medicals.kit) && styles.touchColorBG
            ]}></View>
          <Image
            style={[styles.image]}
            source={require('../../image/kit-mask.png')}
          />
          <Text style={{position: 'absolute', fontWeight: 'bold', fontSize: 11}}>{medicals.kit}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginRight: 15,
  },
  touchColorBG: {
    opacity: 0.5,
  },
  image: {
    width: 40,
    height: 40,
  },
  mask: {
    position: 'absolute',
    width: 40,
    height: 40,
    opacity: 1,
  }
});

export default connect(({theme, medicals, hero}) => ({theme, medicals, hero}), {healHero, useMedical,})(KitBtn);
