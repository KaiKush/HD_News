import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import GetSTDSize from '../../../components/GetSTDSize';
import FormatDate from '../../../components/FormatDate';

const PublishInfo = ({postingDate, editorial, linkEditorial}) => {
  return (
    <View
      style={{
        height: GetSTDSize(52),
        width: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(linkEditorial);
        }}>
        <View
          style={{
            height: GetSTDSize(52),
            width: GetSTDSize(52),
            borderRadius: GetSTDSize(52 / 2),
            backgroundColor: '#616161',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-medium',
              color: 'white',
              fontSize: 30,
            }}>
            {editorial[0]}
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: '100%',
          flex: 1,
          // backgroundColor: 'blue',
          borderLeftWidth: 3,
          borderLeftColor: 'black',
          justifyContent: 'space-around',
          paddingLeft: GetSTDSize(7),
          marginLeft: GetSTDSize(21),
        }}>
        <Text
          style={{
            fontFamily: 'Roboto-medium',
            fontSize: 18,
            color: '#616161',
          }}>
          {FormatDate(postingDate)}
        </Text>
        <TouchableOpacity
          onPress={() => {
              Linking.openURL(linkEditorial);
            }}
        >
          <Text
            style={{
              fontFamily: 'Roboto-medium',
              fontSize: 24,
              color: '#121212',
            }}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {editorial}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PublishInfo;
