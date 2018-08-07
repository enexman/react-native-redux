import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import TextView from'./TextView'

class HeroParameters extends React.Component {
  render() {
    const { name, level, strength, agility, luck, weapons } = this.props.hero;
    const getSum = (param) => {
      let sum = this.props.hero[param];
      for (let key in weapons) {
        if (weapons[key].update === param) {
          sum += weapons[key].sum;
        }
      }
      return (sum <= 1) ? 1 : sum;
    };
    return (
      <View>
        <TextView name="Name:" value={name}/>
        <TextView name="Level:" value={getSum('level')}/>
        <TextView name="Strength:" value={getSum('strength')}/>
        <TextView name="Agility:" value={getSum('agility')}/>
        <TextView name="Luck:" value={getSum('luck')}/>
      </View>
    );
  }
}

export default connect(({hero}) => ({hero}))(HeroParameters);

