import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Gradient from './Gradient';
import {hp, wp} from '../Constants/Responsive';
import Colors from '../Constants/Colors';

export default function SelecteButton({title, colors, onPress, btnTxtStyle}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onPress();
      }}>
      <Gradient colors={colors} linearGradientStyle={styles.linearGradient}>
        <Text style={{...styles.btnTxt, ...btnTxtStyle}}>{title}</Text>
      </Gradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: wp(2),
    borderWidth: wp(0.1),
    borderColor: Colors.PurpleLight,
  },
  linearGradient: {
    paddingHorizontal: wp(0),
    paddingTop: hp(0),
    paddingBottom: hp(0),
    borderBottomLeftRadius: wp(2),
    borderBottomRightRadius: wp(2),
    borderRadius: wp(2),
  },
  btnTxt: {
    textAlign: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    fontSize: hp(1.7),
    fontWeight: '600',
    color: Colors.White,
  },
});
