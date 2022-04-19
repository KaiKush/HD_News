import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import GetSTDSize from '../../../components/GetSTDSize';
import IconSearch from '../../../../assets/images/icon_search.svg';

const widthPhone = Dimensions.get('window').width;

const SearchBar = ({txtSearch, changeText}) => {

    return (
        <View style={{
            backgroundColor: '#E5E5E5',
            flexDirection: 'row', 
            width: '100%', 
            height: GetSTDSize(42),   
        }}>
            <TextInput
                style={{
                    fontFamily: 'Roboto-medium',
                    width: widthPhone - GetSTDSize(60),
                    borderColor: '#000000',
                    borderBottomWidth: 1,
                    color: 'black',
                    fontSize: 18,
                    paddingRight: GetSTDSize(30),
                    paddingLeft: GetSTDSize(0),
                }}
                placeholder='Search for News'
                keyboardType='default'
                onChangeText={(txt) => changeText(txt)}
                autoCapitalize='none'
                autoCorrect={false}
                value={txtSearch}
                />
            <TouchableOpacity style={{
                position: 'absolute',
                alignSelf: 'center',
                right: 0,
            }}>
                <IconSearch
                    height={24}
                    width={24}
                    color={'black'}
                />    
            </TouchableOpacity>
        </View>
    );
};
export default SearchBar;