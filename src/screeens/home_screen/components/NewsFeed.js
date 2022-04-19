import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import GetSTDSize from '../../../components/GetSTDSize';
import {useNavigation} from '@react-navigation/native';

const NewsFeed = ({data}) => {
  const navigation = useNavigation();
  const Item = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail', {item})
          }}
      >
        <View
          style={{
            marginBottom: GetSTDSize(30),
            flexDirection: 'row',
            width: '100%',
            height: GetSTDSize(95),
          }}>
          <View
            style={{
              height: '100%',
              width: GetSTDSize(116),
            }}>
            <Image
              source={{uri: item.image}}
              style={{
                height: '100%',
                width: GetSTDSize(116),
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginLeft: GetSTDSize(17),
              height: '100%',
              flex: 1,
            }}>
            <View
              style={{
                height: GetSTDSize(65),
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-medium',
                  fontSize: 22,
                  color: 'black',
                  flex: 1,
                }}
                ellipsizeMode="tail"
                numberOfLines={2}>
                {item.title}
              </Text>
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontFamily: 'Roboto-medium',
                  color: 'black',
                  fontSize: 18,
                }}>
                Read news
              </Text>
              <View style={{backgroundColor: 'black', height: 1, width: 51}} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem = ({item, index}) => {
    return <Item item={item} />;
  };
  return (
    <View style={{flexDirection: 'column'}}>
      <Text
        style={{
          fontSize: 22,
          fontFamily: 'Roboto-medium',
          color: 'black',
          marginBottom: GetSTDSize(15),
        }}>
        Featured Stories
      </Text>
      <FlatList
        // onAccessibilityAction={searchApi()}
        // listKey = '2'
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={6}
        style={{
          backgroundColor: '#e5e5e5',
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  }
})

export default NewsFeed;
