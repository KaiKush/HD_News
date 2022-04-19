import React from 'react';
import {SafeAreaView, View, Text, ScrollView, } from 'react-native';
import GetSTDSize from '../../components/GetSTDSize';
import SavedArticlesList from './components/SavedArticlesList';

import { connect } from 'react-redux';
import { getSavedArticlesSelector } from '../../redux/reducers/saved';
import { removeData } from '../../redux/actions/savedData';

const SavedScreen = ({ removeData, savedArticles }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#e5e5e5',
        flex: 1,
        paddingHorizontal: GetSTDSize(30),
      }}>
        <SavedArticlesList dataList={savedArticles} removeArticle={removeData} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  const { savedArticles } = getSavedArticlesSelector(state);

  return { savedArticles };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeData: (index) => {
      dispatch(removeData(index))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedScreen)