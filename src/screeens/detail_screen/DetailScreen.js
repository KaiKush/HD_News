import React, { useEffect, useRef } from 'react';
import {SafeAreaView, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import GetSTDSize from '../../components/GetSTDSize.js';
import Header from './components/Header.js';
import PublishInfo from './components/PublishInfo.js';
import Body from './components/Body.js';
import ButtonSaved from './components/ButtonSaved.js';

import {useNavigation, useNavigationParam} from '@react-navigation/native';

import { connect } from 'react-redux';
import { getSavedArticlesSelector } from '../../redux/reducers/saved';
import { saveData } from '../../redux/actions/savedData';

import { useToast } from 'react-native-toast-notifications';

// saveData, savedArticles
const DetailScreen = ({route, navigation, saveData, savedArticles}) => {

  const isExist = (art, store) => {
    for (let i = 0; i < store.length; i++) {
      if (art.url == store[i].url) {
        return true;
      }
    }
    return false;
  }

  const toast = useToast();

  const item = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#e5e5e5',
      }}>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: '#e5e5e5',
          // marginHorizontal: GetSTDSize(30),
          paddingLeft: GetSTDSize(30),
          paddingRight: GetSTDSize(30),
        }}>
        <Header />
        <View
          style={{
            height: GetSTDSize(46),
          }}
        />
        <PublishInfo
          postingDate={item.item.publishedAt}
          editorial={item.item.source.name}
          linkEditorial={item.item.source.url}
        />
        <View
          style={{
            height: GetSTDSize(36),
          }}
        />
        <Body item={item.item}/>
        <TouchableOpacity
          onPress={() => {
            if (isExist(item.item, savedArticles)) {
              toast.show('The article was saved.', {type: 'warning', duration: 1000, placement: 'top', animationType: 'zoom-in'});
            } else {
              saveData(item.item)
              toast.show('The article is saved successfully.', {type: 'success', duration: 1000, placement: 'top', animationType: 'zoom-in'});
            }
          }}
        >
          <ButtonSaved />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  const { savedArticles } = getSavedArticlesSelector(state);

  return { savedArticles };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveData: (article) => {
      dispatch(saveData(article))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailScreen)