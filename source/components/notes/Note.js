import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

class Note extends React.Component {

  render() {
    const { name, description } = this.props.item;
    const { theme } = this.props;

    return (
      <View  style={[styles.container, theme.borderColor]}>
        <Text style={[styles.textName, theme.color]}>{name}</Text>
        <Text style={[styles.text, theme.color]}>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    borderWidth: 1,
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
  },
  textName: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
  },
});

export default connect(({theme}) => ({theme}), {})(Note);
