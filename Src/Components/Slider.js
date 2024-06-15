// library
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

// Utails
import {hp, wp} from '../Constants/Responsive';
import Colors from '../Constants/Colors';
import VectorIcon from '../Constants/VectorIcon';

export default function Slider({Images, teacherName, price}) {
  const [heart, setHeart] = useState();
  return (
    <View style={styles.container}>
      <ImageBackground source={Images} style={styles.backgroundImg}>
        <View style={styles.blacklayerImg}>
          <TouchableOpacity
            onPress={() => {
              setHeart(!heart);
            }}
            style={styles.heartIcon}
            activeOpacity={0.8}>
            <VectorIcon
              type="EvilIcons"
              name="heart"
              size={30}
              color={heart ? Colors.Red : Colors.PurpleDark}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.foxCotainner}>
        <View style={styles.foxLeftContainer}>
          <Image source={Images} style={styles.user} />
          <Text style={styles.userTxt}>
            {teacherName} {'  '}
          </Text>
        </View>
        <View style={[styles.foxLeftContainer, styles.foxrightContainer]}>
          <Text style={styles.price}> {price} </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(2),
  },
  backgroundImg: {
    height: hp(22),
    width: wp(96),
  },
  blacklayerImg: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  heartIcon: {
    position: 'absolute',
    right: wp(2),
    top: hp(1),
    width: wp(7),
    height: wp(7),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: wp(1),
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  foxCotainner: {
    marginTop: hp(-2.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(6),
  },
  foxLeftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    // backgroundColor: Colors.White,
    paddingHorizontal: wp(0.5),
    paddingVertical: hp(0.2),
    ...Platform.select({
      ios: {
        shadowColor: Colors.Black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  user: {
    width: wp(8),
    height: hp(4),
    borderRadius: wp(1.5),
  },
  userTxt: {
    marginHorizontal: wp(2.5),
    fontSize: hp(1.8),
    color: Colors.Black,
    fontWeight: '600',
  },
  foxrightContainer: {
    paddingHorizontal: wp(0),
  },
  price: {
    marginHorizontal: wp(1),
    fontSize: hp(2),
    color: Colors.PurpleDark,
    fontWeight: '500',
  },
});
