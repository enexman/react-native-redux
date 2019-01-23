import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import TitleBlock from '../elements/TitleBlock';
import NoteAddBtn from './NoteAddBtn'

class Speaker extends React.Component {
  render() {

    const { theme, hero, speakers, notes } = this.props;
    const speaker = speakers.filter((it) => it.room === hero.room)[0];
    const note = notes.filter((it) => it.speaker === speaker.name)[0];

    return (
      <View style={styles.container}>
        <TitleBlock title={speaker.name} toBack={false}/>
        <Text style={[styles.text, theme.color]}>{note.description}</Text>
        <NoteAddBtn note={note}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
  }
});

export default connect(
  ({room, theme, hero, speakers, notes }) => ({room, theme, hero, speakers, notes}),
  {}
)(Speaker);
