import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text } from 'react-native';
import TitleBlock from '../elements/TitleBlock';
import { screenNavigation } from '../../data/screen-navigation';

class Manual extends React.Component {
  render() {
    const { theme } = this.props;

    return (
      <View style={styles.container}>
        <TitleBlock title="Инструкция" toBack={screenNavigation.start} />
        <Text style={[styles.text, theme.color]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque cupiditate distinctio exercitationem fugit illum in incidunt inventore ipsam maiores nesciunt nostrum odit omnis perferendis quos sed sequi sit tempore tenetur, totam unde vitae voluptatum. Aliquam aliquid architecto aspernatur assumenda commodi dolor et id illum impedit inventore iusto laudantium magni modi molestias neque nisi omnis optio placeat possimus quas quo, quos ratione reprehenderit, sapiente sequi tempore tenetur totam ullam unde voluptatibus? Animi aspernatur consequatur consequuntur dolore doloribus ea est impedit itaque iure maiores mollitia non nulla odit, qui, quidem quos soluta unde vel. Ab amet modi, similique sunt suscipit totam?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 20,
  }
});


export default connect(({theme}) => ({theme}), {})(Manual);

