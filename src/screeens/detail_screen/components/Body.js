import React, {useState} from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import GetSTDSize from '../../../components/GetSTDSize';

const Body = ({item}) => {
  const [colorText, setColorText] = useState('#121212');
  const [sizeText, setSizeText] = useState(22);

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'red',
        paddingBottom: GetSTDSize(35),
      }}>
      <Text
        style={{
          fontFamily: 'Roboto-medium',
          fontSize: 36,
          color: '#121212',
        }}>
        {item.title}.
      </Text>
      <Text
        style={{
          fontFamily: 'Roboto',
          fontSize: 22,
          marginTop: GetSTDSize(35),
        }}>
        {item.description}.
      </Text>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(item.url);
        }}>
        <Text
          style={{
            fontFamily: 'Roboto-medium',
            fontSize: sizeText,
            marginTop: GetSTDSize(35),
            color: colorText,
            // textDecorationLine: 'underline',
          }}>
          Read original news
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: GetSTDSize(7),
          height: 0,
          width: GetSTDSize(100),
          color: 'black',
          borderWidth: GetSTDSize(1.5),
        }}
      />
      <Image
        source={{uri: item.image}}
        style={{
          height: GetSTDSize(221),
          width: '100%',
          marginTop: GetSTDSize(37),
        }}
      />
      <Text
        style={{
          fontSize: 22,
          fontFamily: 'Roboto',
          marginTop: GetSTDSize(35),
        }}>
        {item.content.substr(0, item.content.lastIndexOf('['))}
      </Text>
    </View>
  );
};

export default Body;
