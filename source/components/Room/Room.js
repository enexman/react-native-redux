import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, } from 'react-native';
import RoomNavList from './RoomNavList';
import OpenMapBtn from './OpenMapBtn';
import OpenNotesBtn from './OpenNotesBtn';
import RoomStatus from './RoomStatus';
import RoomActionButtons from './room-action-btns/RoomActionButtons';
import OpenHeroBtn from './OpenHeroBtn';
import KitBtn from './KitBtn';
import OpenInventoryBtn from './OpenInventoryBtn';
import EndLevelBtn from './EndLevelBtn';
import TitleBlock from '../elements/TitleBlock';
import MiniMap from'./../mini-map/MiniMap';
// import { setVisibleRoom } from '../../actions';
class Room extends React.Component {

  render() {
    const { room, theme, hero, } = this.props;

    const activeRoom = room.filter((it) => it.name === hero.room)[0];
    const endLevelBtn = (activeRoom.name === 'end') ? <EndLevelBtn /> : null;

    const miniMap = (false) ? <View style={[styles.miniMap, theme.borderColor]}><MiniMap /></View> : null;
    const mapBtn = (true) ? <OpenMapBtn /> : null;

    return (
      <View style={styles.container}>
        <TitleBlock title={activeRoom.name} toBack={false}/>
        <View style={styles.wrapper}>
          <View style={styles.actionBtn}>
            <RoomActionButtons />
          </View>
          <View style={styles.description}>
            <View style={styles.messageRoom}>
              <RoomStatus />
            </View>
            {endLevelBtn}
          </View>
          <RoomNavList direction={activeRoom.direction} />
        </View>
        <View style={styles.innerWrapper}>
          <View style={styles.buttons}>
            {mapBtn}
            <OpenHeroBtn />
            <OpenInventoryBtn />
            <OpenNotesBtn />
            <KitBtn />
          </View>
        </View>
        {miniMap}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  heroAttr: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionBtn: {
    margin: 10,
  },
  messageStatus: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageRoom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniMap: {
    position: 'absolute',
    right: 15,
    bottom: 10,
    height: 100,
    width: 100,
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 10,
  }
});

export default connect(
  ({room, theme, hero}) => ({room, theme, hero}),
  // {setVisibleRoom}
)(Room);
