import React from 'react';
import {
  View,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import GetSTDSize from '../../../components/GetSTDSize';

const widthPhone = Dimensions.get('window').width;
const heightPhone = Dimensions.get('window').height;

const DATA_TOPIC = [
  {
    id: '1',
    name: 'Business',
    image: require('../../../../assets/images/topic_bussiness.png'),
  },
  {
    id: '2',
    name: 'Tech',
    image: require('../../../../assets/images/topic_tech.png'),
  },
  {
    id: '3',
    name: 'Laptop',
    image: require('../../../../assets/images/topic_computer.png'),
  },
  {
    id: '4',
    name: 'Entertainment',
    image: require('../../../../assets/images/topic_entertainment.png'),
  },
  {
    id: '5',
    name: 'Health',
    image: require('../../../../assets/images/topic_health.png'),
  },
  {
    id: '6',
    name: 'Lifestyle',
    image: require('../../../../assets/images/topic_lifestyle.png'),
  },
  {
    id: '7',
    name: 'Sport',
    image: require('../../../../assets/images/topic_sport.png'),
  },
  {
    id: '8',
    name: 'Crypto',
    image: require('../../../../assets/images/topic_crypto.png'),
  },
];

function GetNumColumn(Data) {
  if (Data.length <= 8) {
    return 4;
  } else {
    return Math.ceil(Data.length / 2);
  }
}

const Category = ({onFilterChange}) => {
  const ItemTopic = ({name, image}) => {
    return (
      <View
        style={{
          height: '50%',
          width: (widthPhone - GetSTDSize(60)) / 4,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            onFilterChange(name);
          }}>
          <View
            style={{
              height: GetSTDSize(68),
              width: GetSTDSize(68),
              borderRadius: GetSTDSize(68) / 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#616161',
            }}>
            <Image
              source={image}
              style={{
                height: GetSTDSize(40),
                width: GetSTDSize(40),
                tintColor: '#e5e5e5',
              }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 32,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-medium',
              fontSize: 12,
              color: '#616161',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
        </View>
      </View>
    );
  };

  const renderItemTopic = ({item}) => (
    <ItemTopic name={item.name} image={item.image} />
  );

  return (
    <FlatList
      // listKey = '1'
      data={DATA_TOPIC}
      renderItem={renderItemTopic}
      keyExtractor={item => item.id}
      style={{
        height: GetSTDSize(200),
        backgroundColor: '#e5e5e5',
      }}
      numColumns={GetNumColumn(DATA_TOPIC)}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Category;
