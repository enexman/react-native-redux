import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import TextView from'./TextView'

class HeroWeapons extends React.Component {
  render() {
    const { head, body, handRight, handLeft, feet} = this.props.weapons;
    return (
      <View>
        <TextView name="Head:" value={head.name}/>
        <TextView name="Body:" value={body.name}/>
        <TextView name="Hand right:" value={handRight.name}/>
        <TextView name="Hand left:" value={handLeft.name}/>
        <TextView name="Feet:" value={feet.name}/>
      </View>
    );
  }
}

export default connect(({weapons}) => ({weapons}), {})(HeroWeapons);
