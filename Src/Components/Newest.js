import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../Constants/Responsive';
import Colors from '../Constants/Colors';
import VectorIcon from '../Constants/VectorIcon';

export default function Newest({image}) {
  const [heart, setHeart] = useState();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.courses}>
        <View style={styles.transprantLayer}>
          <TouchableOpacity
            onPress={() => {
              setHeart(!heart);
            }}
            style={styles.heartIcon}
            activeOpacity={0.8}>
            <VectorIcon
              type="EvilIcons"
              name="heart"
              size={25}
              color={heart ? Colors.Red : Colors.PurpleDark}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: wp(2),
    padding: wp(1),
    backgroundColor: Colors.White,
    backgroundColor: 'green',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  courses: {
    width: '100%',
    height: hp(15),
  },
  heartIcon: {
    position: 'absolute',
    right: wp(0.5),
    top: hp(0.5),
    width: wp(6),
    height: wp(6),
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: wp(1),
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  transprantLayer: {
    backgroundColor: 'rgba(0,0,0,.4)',
    width: '100%',
    height: hp(15),
  },
});
