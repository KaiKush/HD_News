import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import GetSTDSize from '../../../components/GetSTDSize';
import IconSave from '../../../../assets/images/icon_save_news.svg';

const ButtonSaved = () => {
  return (
    <View
      style={{
        height: GetSTDSize(40), 
        width: '100%',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#000'
      }}
    >
      <Text
        style={{
          fontFamily: 'Roboto-medium',
          fontSize: 20,
          color: 'white',
        }}
      >
        Save Article
      </Text>
      <IconSave
        height={GetSTDSize(35)}
        width={GetSTDSize(35)}
      />
    </View>
  )
};

export default ButtonSaved