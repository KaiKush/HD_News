import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from '../../../styles';
import GetSTDSize from '../../../components/GetSTDSize';
import ProfileScreen from '../../profile_screen/ProfileScreen';
import {useNavigation} from '@react-navigation/native';
import TwoLines from '../../../../assets/images/twoLinesOfDetail.svg';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
    style={{
      height: GetSTDSize(75),
      width: '100%',
      backgroundColor: '#e5e5e5',
      justifyContent: 'flex-end',
    }}
    >
    <View
      style={{
        height: GetSTDSize(55),
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#e5e5e5',
      }}>
      <View
        style={{
          height: GetSTDSize(55),
          width: '50%',
          justifyContent: 'center',
          // backgroundColor: 'red',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
        >
          <TwoLines height={GetSTDSize(80)} width={GetSTDSize(40)} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: GetSTDSize(55),
          width: '50%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <View
            style={{
              elevation: 5,
              shadowOffset: {x: -5, y: -5},
              shadowColor: 'black',
              height: GetSTDSize(55),
              width: GetSTDSize(55),
              borderRadius: GetSTDSize(55) / 2,
              borderWidth: 1,
            }}>
            <Image
              style={{
                height: GetSTDSize(55),
                width: GetSTDSize(55),
                borderRadius: GetSTDSize(55) / 2,
                borderWidth: 1,
              }}
              source={{
                uri: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2jFwl?ver=00db&q=90&m=6&h=450&w=800&b=%23FFFFFFFF&l=f&o=t&aim=true',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};
 
export default Header;
