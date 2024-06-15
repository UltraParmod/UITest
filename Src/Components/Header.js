import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../Constants/Colors';
import VectorIcon from '../Constants/VectorIcon';
import ImagePath from '../Constants/ImagePath';
import {hp, wp} from '../Constants/Responsive';
import Strings from '../Constants/Strings';
import Gradient from './Gradient';
import {useState} from 'react';

const Size3 = hp(3.2);
const Size2 = hp(2.3);

export default function Header({
  userImg,
  userTitle,
  notifactioIcon,
  placeholderView,
}) {
  const [name, setName] = useState('Parmod');
  return (
    <Gradient>
      <View style={styles.innerCotainer}>
        <View style={styles.iconContainer}>
          <View style={styles.userContainer}>
            {!userImg ? (
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(Strings.wantToGoBack);
                }}>
                <VectorIcon
                  type="MaterialIcons"
                  name="keyboard-arrow-left"
                  size={Size3}
                  color={Colors.PurpleDark}
                />
              </TouchableOpacity>
            ) : (
              <Image source={ImagePath.User} style={styles.user} />
            )}
          </View>

          <View style={styles.titleContainer}>
            {!userTitle ? (
              <View />
            ) : (
              <View>
                <Text style={styles.userName}>
                  {Strings.hello} {name}
                </Text>
                <Text style={styles.userWelcome}> {Strings.welcomeTxt}</Text>
              </View>
            )}
          </View>
        </View>
        {!notifactioIcon ? (
          <View />
        ) : (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setName('Sumit');
            }}>
            <View style={styles.notifactionContainer}>
              <VectorIcon
                type="FontAwesome"
                name="bell"
                size={Size2}
                color={Colors.PurpleDark}
              />
              <View style={styles.notifactionCount}></View>
            </View>
          </TouchableOpacity>
        )}
      </View>

      {!placeholderView ? null : (
        <View style={styles.menuPlaceholderContainer}>
          <View style={styles.placeholderContainer}>
            <TextInput
              placeholder={Strings.search}
              placeholderTextColor={Colors.Grey}
              style={styles.placeholder}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(Strings.menuAlert);
            }}>
            <View style={styles.menuContainer}>
              <Image source={ImagePath.Menu} style={styles.menu} />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Gradient>
  );
}

const styles = StyleSheet.create({
  innerCotainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userContainer: {
    width: wp(9.5),
    height: hp(4.5),
    borderRadius: wp(1.5),
    borderWidth: hp(0.1),
    borderColor: Colors.Grey,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    width: wp(9.5),
    height: hp(4.5),
    borderRadius: wp(1.5),
  },
  titleContainer: {
    marginLeft: wp(1.5),
  },
  userName: {
    fontSize: hp(1.6),
    fontWeight: '500',
    color: Colors.txtColor,
  },
  userWelcome: {
    fontSize: hp(1.4),
    color: Colors.txtColor,
  },
  notifactionContainer: {
    width: wp(9),
    height: hp(4),
    borderRadius: wp(1.5),
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifactionCount: {
    color: 'red',
    position: 'absolute',
    top: hp(1),
    right: wp(2),
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.Red,
  },
  menuPlaceholderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(5),
    alignItems: 'center',
  },
  placeholderContainer: {
    width: '80%',
    paddingVertical: hp(1.5),
    borderRadius: wp(2),
    height: hp(5),
    paddingHorizontal: wp(2),
    backgroundColor: Colors.White,
  },
  placeholder: {
    fontSize: hp(1.7),
  },
  menuContainer: {
    width: wp(10),
    height: hp(5),
    borderRadius: wp(1.5),
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: wp(5.5),
    height: wp(5.5),
  },
});
