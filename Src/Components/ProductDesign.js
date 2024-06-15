import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../Constants/Responsive';
import VectorIcon from '../Constants/VectorIcon';

const Size = hp(2.3);
export default function ProductDesign() {
  return (
    <View>
      <View style={styles.prouctDesingContainer}>
        <Text style={styles.prouctDesiginTxt}>{Strings.prouctDesing}</Text>
        <View style={styles.ratingsContainer}>
          <Text style={styles.ratingsTxt}>5.0</Text>
          {[1, 2, 3, 4, 5].map(index => (
            <VectorIcon
              key={index}
              type="FontAwesome"
              name="star"
              size={17}
              color={Colors.PurpleDark}
            />
          ))}
        </View>
      </View>

      <View style={styles.coursesCotainer}>
        <View style={styles.course}>
          <VectorIcon
            type="AntDesign"
            name="book"
            size={Size}
            color={Colors.Grey}
          />
          <Text style={styles.courseTxt}>{Strings.lessens}</Text>
        </View>
        <View style={styles.course}>
          <VectorIcon
            type="MaterialIcons"
            name="access-time"
            size={Size}
            color={Colors.Grey}
          />
          <Text style={styles.courseTxt}>{Strings.hours}</Text>
        </View>
        <View style={styles.course}>
          <VectorIcon
            type="Feather"
            name="users"
            size={Size}
            color={Colors.Grey}
          />
          <Text style={styles.courseTxt}>{Strings.reviews}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  prouctDesingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(8),
    marginTop: hp(1.5),
  },
  prouctDesiginTxt: {
    fontSize: hp(2.3),
    fontWeight: '600',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingsTxt: {
    fontSize: hp(2),
    fontWeight: '500',
    marginRight: wp(1),
  },
  courseDuractioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(8),
  },
  courseInnerContaier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'centers',
  },
  coursesCotainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(8),
    marginVertical: hp(2),
  },
  course: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseTxt: {
    fontSize: hp(2),
    marginLeft: wp(0.5),
    color: Colors.Grey,
  },
});
