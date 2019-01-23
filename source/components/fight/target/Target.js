import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import HeadBtn from './HeadBtn';
import BodyBtn from './BodyBtn';
import HandsBtn from './HandsBtn';
import FeetBtn from './FeetBtn';

class Target extends React.Component {
  render() {
    const { heroAttack } = this.props;
    return (
      <View style={styles.container}>
        {heroAttack.longShoot ? <HeadBtn /> : null}
        {heroAttack.longShoot ? <BodyBtn /> : null}
        {heroAttack.longShoot ? <HandsBtn /> : null}
        {heroAttack.longShoot ? <FeetBtn /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
  },
});

export default connect(({heroAttack}) => ({heroAttack}), {})(Target);
