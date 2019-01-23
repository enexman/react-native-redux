import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, } from 'react-native';

class Room extends React.Component {

  somebodyNearly = (activeRoom, monsters) => {
    return activeRoom.direction.some((direction) => {
      return monsters.some((monster) => {
        return monster.room === direction.name && !monster.dead;
      })
    });
  };

  render() {
    const { theme, hero, room, monsters, visible, speakers, medicals, weapons, notes, } = this.props;

    // активная комната
    const activeRoom = room.filter((it) => it.name === hero.room)[0];

    // вооружение
    const weapon = weapons.filter((it) => it.room === hero.room)[0];
    const weaponMessage = (weapon) ? <Text style={[styles.text, theme.color]}>В комнате есть оружие</Text> : null;

    // аптечка
    const medical = medicals.medicals.filter((it) => it.room === hero.room)[0];
    const medicalMessage = (medical) ? <Text style={[styles.text, theme.color]}>В комнате есть аптечка</Text> : null;



    // видимость
    const visibleMessage =  hero.invisible ? <Text style={[styles.text, theme.color]}>Вас не видно</Text> : null;
    const visibleFailMessage =  visible.activated && !hero.invisible ? <Text style={[styles.text, theme.color]}>Спрятаться не удалось</Text> : null;

    // монстры
    const boolFightMessage = monsters.some((monster) => monster.room === hero.room && !monster.dead);
    const boolDeadMessage = monsters.some((monster) => monster.room === hero.room && monster.dead);
    const boolMonsterMessage = this.somebodyNearly(activeRoom, monsters);

    const monsterMessage =  boolMonsterMessage ? <Text style={[styles.text, theme.color]}>В соседней комнате монстр</Text> : null;
    const fightMessage =  boolFightMessage ? <Text style={[styles.text, theme.color]}>В комнате монстр{hero.invisible ? ', вы можете уйти от боя' : ', вы должны с ним сразиться'}</Text> : null;
    const monsterDeadMessage =  boolDeadMessage ? <Text style={[styles.text, theme.color]}>В комнате  труп монстра</Text> : null;

    // speaker
    const speaker = speakers.filter((it) => it.room === hero.room)[0];
    const note = (speaker) ? notes.filter((it) => it.speaker === speaker.name)[0] : null;
    const noteMessage = (note && !note.saved) ? 'с ним можно поговорить' : 'вы уже с ним говорили';
    const speakerMessage = (speaker) ? <Text style={[styles.text, theme.color]}>В комнате есть человек {speaker.name} {!boolFightMessage ? noteMessage : ''}</Text> : null;

    // сообщение отдыха
    const relaxMessage = (!boolFightMessage && !boolMonsterMessage && hero.hitPoint < hero.fullPoint)
      ? <Text style={[styles.text, theme.color]}>Рядом нет опасности, можно отдохнуть и восстановить здоровье</Text>
      : null;

    const emptyMessage = (!fightMessage && !monsterMessage && !relaxMessage && !monsterDeadMessage && !speakerMessage && !weaponMessage && !medicalMessage)
      ? <Text style={[styles.text, theme.color]}>Что стоим? Кого ждем? / здесь нет ничего</Text>
      : null;

    let woundMessage = (hero.hitPoint < hero.fullPoint && hero.hitPoint > hero.fullPoint/2)
      ? <Text style={[styles.text, theme.color]}>Вы ранены</Text>
      : (hero.hitPoint <= hero.fullPoint/2 && hero.hitPoint > hero.fullPoint/4)
      ? <Text style={[styles.text, theme.color]}>Вы сильно ранены</Text>
      : (hero.hitPoint <= hero.fullPoint/4)
      ? <Text style={[styles.text, theme.color]}>Вы присмерти</Text>
      : null;


    return (
      <View style={styles.container}>
        {visibleMessage}
        {visibleFailMessage}
        {fightMessage}
        {monsterMessage}
        {monsterDeadMessage}
        {speakerMessage}
        {weaponMessage}
        {medicalMessage}
        {relaxMessage}
        {woundMessage}
        {emptyMessage}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  },
});

export default connect(
  ({
    theme,
    hero,
    room,
    monsters,
    visible,
    speakers,
    medicals,
    weapons,
    notes,
  }) => (
  {
    theme,
    hero,
    room,
    monsters,
    visible,
    speakers,
    medicals,
    weapons,
    notes,
  }),
  {}
)(Room);
