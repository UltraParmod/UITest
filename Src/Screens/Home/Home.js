import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import Colors from '../../Constants/Colors';
import {hp, wp} from '../../Constants/Responsive';
import Strings from '../../Constants/Strings';
import ImagePath from '../../Constants/ImagePath';
import Slider from '../../Components/Slider';
import ProductDesign from '../../Components/ProductDesign';
import SeeAllButton from '../../Components/SeeAllButton';
import SelecteButton from '../../Components/SelecteButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Popular from '../../Components/Popular';
import Newest from '../../Components/Newest';
import AllCourse from '../../Components/AllCourse';

// Api Data
const SliderData = [
  {id: 1, image: ImagePath.Slider01, teacherName: 'Parmod', price: '$24.99'},
  {id: 2, image: ImagePath.Slider02, teacherName: 'Sumit', price: '$68.09'},
  {id: 3, image: ImagePath.Slider03, teacherName: 'Vikash', price: '$14.69'},
  {id: 4, image: ImagePath.Slider04, teacherName: 'Sandeep', price: '$48.39'},
  {id: 5, image: ImagePath.Slider05, teacherName: 'Parveen', price: '$32.00'},
];
const SlectedApi = [
  {
    id: 1,
    name: 'All Course',
  },
  {
    id: 2,
    name: 'Popular ',
  },
  {
    id: 3,
    name: 'Newest',
  },
];
const AllCourses = [
  {
    id: 1,
    image: ImagePath.Slider05,
  },
  {
    id: 2,
    image: ImagePath.Slider03,
  },
  {
    id: 3,
    image: ImagePath.Slider04,
  },
  {
    id: 4,
    image: ImagePath.Slider01,
  },
];
const Populars = [
  {
    id: 1,
    image: ImagePath.Slider04,
  },
  {
    id: 2,
    image: ImagePath.Slider01,
  },
  {
    id: 3,
    image: ImagePath.Slider05,
  },
  {
    id: 4,
    image: ImagePath.Slider02,
  },
];
const Newests = [
  {
    id: 1,
    image: ImagePath.Slider05,
  },
  {
    id: 2,
    image: ImagePath.Slider03,
  },
  {
    id: 3,
    image: ImagePath.Slider01,
  },
  {
    id: 4,
    image: ImagePath.Slider04,
  },
];

// varables

export default function Home() {
  const [isselected, setIsSelected] = useState(SlectedApi[0]);

  return (
    <View style={styles.container}>
      <Header
        userImg={true}
        userTitle={true}
        notifactioIcon={true}
        placeholderView={true}
      />
      <KeyboardAwareScrollView
        extraHeight={hp(50)}
        showsVerticalScrollIndicator={false}>
        <SeeAllButton title={Strings.featuredCoureses} />
        <View>
          <FlatList
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index?.toString()}
            data={SliderData}
            renderItem={({item, value}) => (
              <Slider
                Images={item.image}
                teacherName={item.teacherName}
                price={item.price}
              />
            )}
          />
        </View>
        <ProductDesign />
        <SeeAllButton title={Strings.ourCoureses} />

        <View style={styles.selcetedCotainer}>
          {SlectedApi.map(item => (
            <SelecteButton
              btnTxtStyle={{
                color: item.id == isselected?.id ? Colors.White : Colors.Black,
              }}
              key={item.id}
              title={item.name}
              colors={
                item.id == isselected?.id
                  ? null
                  : ['transparent', 'transparent', 'transparent']
              }
              onPress={() => {
                setIsSelected(item);
              }}
            />
          ))}
        </View>
        <View style={styles.setlectdCourse}>
          {isselected.id == 1 ? (
            <View style={styles.coureses}>
              {AllCourses.map((item, index) => (
                <View style={styles.innerCoureses} key={index}>
                  <AllCourse image={item.image} />
                </View>
              ))}
            </View>
          ) : null}
          {isselected.id == 2 ? (
            <View style={styles.coureses}>
              {Populars.map((item, index) => (
                <View style={styles.innerCoureses} key={index}>
                  <AllCourse image={item.image} />
                </View>
              ))}
            </View>
          ) : null}
          {isselected.id == 3 ? (
            <View style={styles.coureses}>
              {Newests.map((item, index) => (
                <View style={styles.innerCoureses} key={index}>
                  <AllCourse image={item.image} />
                </View>
              ))}
            </View>
          ) : null}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  selcetedCotainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: wp(8),
  },
  setlectdCourse: {
    marginHorizontal: wp(6),
    marginVertical: hp(2),
  },
  innerCoureses: {
    width: '50%',
  },
  coureses: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
