import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../Constants/Responsive';

export default function SeeAllButton({title}) {
  return (
    <View style={styles.featuredCotainer}>
      <Text style={styles.featuredTitle}>{title}</Text>
      <TouchableOpacity
        style={styles.seeallBtn}
        onPress={() => {
          Alert.alert('Alert');
        }}>
        <Text style={styles.seeall}>{Strings.seeall}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  featuredCotainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(2.5),
    width: '82%',
    alignItems: 'center',
    marginVertical: hp(2.5),
    alignSelf: 'center',
  },
  featuredTitle: {
    fontSize: hp(2.3),
    fontWeight: '600',
    color: Colors.Black,
  },
  seeallBtn: {
    paddingHorizontal: wp(0.5),
    paddingVertical: hp(0.5),
  },
  seeall: {
    color: Colors.PurpleDark,
    fontWeight: '500',
  },
});
