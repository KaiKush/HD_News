import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GetSTDSize from '../../../components/GetSTDSize';
import {useNavigation} from '@react-navigation/native';

const widthPhone = Dimensions.get('window').width;
const heightPhone = Dimensions.get('window').height;

const NewsSlider = ({data}) => {
  const navigation = useNavigation();

  const [itemActive, setItemActive] = useState(false);

  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != itemActive) {
        setItemActive(slide);
      }
    }
  };

  return (
    <View
      style={{
        height: heightPhone * 0.25,
        width: '100%',
      }}>
      <ScrollView
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        style={{}}>
        {data?.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              height: heightPhone * 0.25,
              width: widthPhone - GetSTDSize(30) * 2,
            }}
            onPress={() => {navigation.navigate('Detail', {item})}}
            >
            <Image
              style={{
                height: heightPhone * 0.25,
                width: widthPhone - GetSTDSize(30) * 2,
              }}
              resizeMode="cover"
              source={{uri: item.image}}
            />
            <View
              style={{
                height: heightPhone * 0.25,
                width: widthPhone - GetSTDSize(30) * 2,
                position: 'absolute',
              }}>
              <LinearGradient
                colors={['#000000C3', '#00000050', '#00000000']}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                style={{height: '100%', width: '100%'}}></LinearGradient>
              <Text
                key={index}
                style={{
                  position: 'absolute',
                  color: 'white',
                  bottom: heightPhone * 0.25 * 0.1,
                  fontFamily: 'Roboto-medium',
                  fontSize: 16,
                  left: GetSTDSize(20),
                  right: GetSTDSize(20),
                }}
                ellipsizeMode="tail"
                numberOfLines={2}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        {data?.map((item, index) => (
          <Text
            key={index}
            style={
              itemActive == index
                ? {color: '#4f4f4f', margin: 3}
                : {color: 'white', margin: 3}
            }>
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};

export default NewsSlider;
