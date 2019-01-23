import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text, Image, Alert } from 'react-native';
import RoomMedicalBtn from './MedicalBtn';
import WeaponTakeBtn from './WeaponTakeBtn';
import FindBtn from './FindBtn';
import EmptyBtn from './EmptyBtn';


class FindBlock extends React.Component {

  render() {
    const { find, hero, weapons, medicals } = this.props;

    const weapon = weapons.filter((it) => it.room === hero.room)[0];
    const medical = medicals.medicals.filter((it) => it.room === hero.room)[0];

    const weaponBtn = (weapon && find.activated)
      ? <WeaponTakeBtn weapon={weapon} />
      : null;

    const medicalBtn = (medical && find.activated)
      ? <RoomMedicalBtn medical={medical} />
      : null;

    const noEmpty = (weaponBtn || medicalBtn);
    const findBtn = (!find.activated) ? <FindBtn /> : null;
    const emptyBtn = (!noEmpty && find.activated) ? <EmptyBtn /> : null;

    return (
      <View style={styles.container}>
        {findBtn}
        {emptyBtn}
        {medicalBtn}
        {weaponBtn}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(
  ({room, find, hero, weapons, medicals}) => ({room, find, hero, weapons, medicals}),
  {}
)(FindBlock);
