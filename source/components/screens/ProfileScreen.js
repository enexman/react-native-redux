import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Jane',
    headerStyle: {
      backgroundColor: '#f4511e',
      display: 'none'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const { navigate, push, goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          title="Go to Welcome"
          onPress={() =>
            push('Home', { name: 'Welcome' })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ProfileScreen;
