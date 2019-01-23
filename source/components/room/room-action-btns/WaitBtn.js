// import React from 'react';
// import { connect } from 'react-redux';
// import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
// import { moveMonsters } from '../../../actions';
// import { Color, buttonRoomAction } from '../../../css';
//
// class WaitBtn extends React.Component {
//   state ={
//     touchColor: false,
//   };
//   onPressInTouchable() {
//     this.setState({
//       touchColor: !this.state.touchColor
//     })
//   }
//   onPressTouchable() {
//     this.setState({
//       touchColor: !this.state.touchColor
//     });
//     const { room, moveMonsters } = this.props;
//     moveMonsters(room);
//   }
//   render() {
//     const { theme } = this.props;
//     return (
//       <TouchableWithoutFeedback
//         onPressIn={this.onPressInTouchable.bind(this)}
//         onPress={this.onPressTouchable.bind(this)}
//       >
//         <View style={[styles.button, this.state.touchColor && theme.backgroundColor]}>
//           <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>Ждать</Text>
//         </View>
//       </TouchableWithoutFeedback>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   button: {
//     ...buttonRoomAction,
//   },
//   text: {
//     fontWeight: 'bold',
//   },
//   touchColorText: {
//     color: Color.black,
//   }
// });
//
// export default connect(({theme, room}) => ({theme, room}), {moveMonsters})(WaitBtn);
