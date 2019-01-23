import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Note from './Note';
import TitleBlock from'../elements/TitleBlock';
import { screenNavigation } from '../../data/screen-navigation';

class Notes extends React.Component {
  render() {
    const { notes } = this.props;
    const noteList = notes.filter((it) => it.saved);

    return (
      <View style={styles.container}>
        <TitleBlock title="Заметки" toBack={screenNavigation.room}/>
        <FlatList
          data={noteList}
          renderItem={({item}) => <Note key={item.key} item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(({notes}) => ({notes}), {})(Notes);
