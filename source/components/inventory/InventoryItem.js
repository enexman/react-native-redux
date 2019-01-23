import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import ToggleBtn from './ToggleBtn';
import TextView from '../hero/TextView';

class InventoryItem extends React.Component {
  state = {
    isOpen: false,
  };
  onPressTouchable() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { name, description, requirement } = this.props.item;
    const { theme, hero } = this.props;
    const toggleBtn = (
          requirement.rating <= hero.rating &&
          requirement.accuracy <= hero.accuracy &&
          requirement.strength <= hero.strength &&
          requirement.agility <= hero.agility
        ) ? <ToggleBtn item={this.props.item}/> : null;
    return (
      <View  style={[styles.container, theme.borderColor]}>
        <View>
          <Text style={[styles.textName, theme.color]}>{name}</Text>
          <Text style={[styles.text, theme.color]}>{description}</Text>
          <View>
            <TouchableWithoutFeedback
              onPress={this.onPressTouchable.bind(this)}
            >
              <View>
                <Text style={[styles.text, theme.color]}>Требования:</Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={[styles.requirement, this.state.isOpen && styles.visible]}>
              <TextView name="Рейтинг: " value={requirement.rating} position={{}}/>
              <TextView name="Точность: " value={requirement.accuracy} position={{}}/>
              <TextView name="Сила: " value={requirement.strength} position={{}}/>
              <TextView name="Уклонение: " value={requirement.agility} position={{}}/>
            </View>
          </View>
        </View>
        {toggleBtn}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  requirement: {
    display: 'none',
    marginLeft: 15,
  },
  visible: {
    display: 'flex',
  }
});

export default connect(({theme, hero}) => ({theme, hero}), {})(InventoryItem);
