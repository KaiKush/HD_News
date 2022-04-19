import React, { useEffect, useState } from 'react';
import { VirtualizedList, FlatList, View, Text, TouchableOpacity, TouchableHighlight, Image, StyleSheet } from 'react-native';
import GetSTDSize from '../../../components/GetSTDSize';
// import { data } from '../../data';
import { useNavigation } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';

import IconClose from '../../../../assets/images/icon_close.svg';
import IconTrash from '../../../../assets/images/icon_trash.svg';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const SavedArticlesList = ({ dataList, removeArticle }) => {
  const forceUpdate = useForceUpdate();

  // useEffect(() => {
  //   return () => {
  //     forceUpdate();
  //   }
  // }, [dataList])

  const navigation = useNavigation();
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    // closeRow(rowMap, rowKey);
    removeArticle(rowKey)
  };

  // const Item = ({item}) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => {navigation.navigate('Detail', {item})}}
  //     >
  //       <View
  //         style={{
  //           marginBottom: GetSTDSize(30),
  //           flexDirection: 'row',
  //           width: '100%',
  //           height: GetSTDSize(95),
  //         }}>
  //         <View
  //           style={{
  //             height: '100%',
  //             width: GetSTDSize(116),
  //           }}>
  //           <Image
  //             source={{uri: item.image}}
  //             style={{
  //               height: '100%',
  //               width: GetSTDSize(116),
  //             }}
  //           />
  //         </View>
  //         <View
  //           style={{
  //             flexDirection: 'column',
  //             justifyContent: 'space-between',
  //             marginLeft: GetSTDSize(17),
  //             height: '100%',
  //             flex: 1,
  //           }}>
  //           <View
  //             style={{
  //               height: GetSTDSize(65),
  //             }}>
  //             <Text
  //               style={{
  //                 fontFamily: 'Roboto-medium',
  //                 fontSize: 22,
  //                 color: 'black',
  //                 flex: 1,
  //               }}
  //               ellipsizeMode="tail"
  //               numberOfLines={2}>
  //               {item.title}
  //             </Text>
  //           </View>
  //           <View style={{}}>
  //             <Text
  //               style={{
  //                 fontFamily: 'Roboto-medium',
  //                 color: 'black',
  //                 fontSize: 18,
  //               }}>
  //               Read news
  //             </Text>
  //             <View style={{backgroundColor: 'black', height: 1, width: 51}} />
  //           </View>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  const renderItem = data => (
    <TouchableHighlight
        onPress={() => {
          navigation.navigate('Detail', {"item": data.item})
          }}
        underlayColor={'#e5e5e5'}
      >
        <View
          style={{
            marginBottom: GetSTDSize(30),
            flexDirection: 'row',
            width: '100%',
            height: GetSTDSize(95),
            backgroundColor: '#e5e5e5'
          }}>
          <View
            style={{
              height: '100%',
              width: GetSTDSize(116),
            }}>
            <Image
              source={{uri: data.item.image}}
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
                {data.item.title}
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
      </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => {
    return (<View
      style={{
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
        // height: GetSTDSize(95),
        // width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // marginBottom: GetSTDSize(30),
      }}
    >
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          top: 0,
          bottom: GetSTDSize(30),
          width: GetSTDSize(50),
          backgroundColor: '#e5e5e5',
          position: 'absolute',
          right: GetSTDSize(50),
        }}
        onPress={() => closeRow(rowMap, data.index)}
      >
        <IconClose
          height={GetSTDSize(40)}
          width={GetSTDSize(40)}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          // height: GetSTDSize(95),
          top: 0,
          bottom: GetSTDSize(30),
          width: GetSTDSize(50),
          backgroundColor: '#e5e5e5',
          position: 'absolute',
        }}
        onPress={() => {
          closeRow(rowMap, data.index)
          deleteRow(rowMap, data.index)
        }}
      >
        <IconTrash
          height={GetSTDSize(40)}
          width={GetSTDSize(40)}
        />
      </TouchableOpacity>
      <View 
        style={{
          height: '100%',
          width: GetSTDSize(3),
          right: GetSTDSize(120),
          backgroundColor: 'black',
          position: 'absolute',
          bottom: GetSTDSize(30),
        }}
      />
    </View>
  )};

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e5e5e5',
      }}
    >
      <Text
        style={{
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: 24,
          alignSelf: 'center',
          marginTop: GetSTDSize(20),
          marginBottom: GetSTDSize(30),
          color: '#121212'
        }}
      >
        Saved Articles
      </Text>
      <SwipeListView 
        data={dataList}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={GetSTDSize(-130)}
        keyExtractor={(item, index) => index.toString()}
        // previewRowKey={'0'}
        // previewOpenValue={-40}
        // previewOpenDelay={3000}
        disableHiddenLayoutCalculation = {true}
      />
    </View>
  );
};

export default SavedArticlesList;