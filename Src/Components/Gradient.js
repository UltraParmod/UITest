import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {hp, wp} from '../Constants/Responsive';
import Colors from '../Constants/Colors';

export default function Gradient({children, linearGradientStyle, colors}) {
  return (
    <LinearGradient
      start={{x: 0, y: 0.4}}
      end={{x: 1, y: 0}}
      colors={
        colors || [Colors.PurpleLight, Colors.PurpleLight, Colors.PurpleDark]
      }
      style={{...styles.linearGradient, ...linearGradientStyle}}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: wp(7.5),
    paddingTop: hp(6),
    paddingBottom: hp(1.5),
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
});
