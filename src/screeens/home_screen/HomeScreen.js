import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import GetSTDSize from '../../components/GetSTDSize';
import Header from './components/Header';
import NewsSlider from './components/NewsSlider';
import SearchBar from './components/SearchBar';
import NewsFeed from './components/NewsFeed';
import Category from './components/Category';
import LoadingNews from './components/LoadingNews';
import { connect } from 'react-redux';
import { getArticlesSelector } from '../../redux/reducers/articles';
import { fetchData, fetchTopTenData } from '../../redux/actions/fetchData';

const COUNTRIES = [
  'us',
  'au',
  'ca',
  'ch',
  'cn',
  'de',
  'eg',
  'es',
  'fr',
  'gb',
  'gr',
  'hk',
  'ie',
  'il',
  'in',
  'it',
  'jp',
  'nl',
  'no',
  'ru',
  'se',
  'sg',
  'tw',
  'ua',
];

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const HomeScreen = (props) => {
  const {
    isLoading,
    topHeadlines,
    articles,
    fetchData,
    fetchTopTenData,
  } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [txtStory, setTxtStory] = useState('Featured');
  const page = useRef(0);
  const isLoadMore = useRef(false);
  const scrollRef = useRef(null);

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: GetSTDSize(100) + Dimensions.get('window').height * 0.25,
      animated: true,
    });
  }
  
  const changeSearchTerm = searchTermValue => {
    page.current = 0;
    setSearchTerm(searchTermValue);
    setTimeout(() => {
        fetchData(searchTermValue);
    }, 300);
  };

  const changeFilter = nameFilter => {
    onPressTouch();
    page.current = 0;
    setSearchTerm(nameFilter);
    fetchData(nameFilter);
  }

  const loadMoreNews = () => {
    if (page.current >= COUNTRIES.length || isLoading)
    {
      return;
    }
    page.current = page.current + 1;
    fetchData(searchTerm, isLoadMore.current, page.current)
    isLoadMore.current = false;
  }
  useEffect(() => {
    fetchData('');
    fetchTopTenData();
  }, []);


  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 0,
        backgroundColor: '#e5e5e5',
      }}>
      <ScrollView
        ref={scrollRef}
        stickyHeaderIndices={[3]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: '#e5e5e5',
          marginHorizontal: GetSTDSize(30),
        }}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            isLoadMore.current = true;
            loadMoreNews();
          }
        }}
      >
        <Header onFilterChange={changeSearchTerm} />
        <View style={{height: GetSTDSize(20)}} />
        <NewsSlider data={topHeadlines} />
        <View style={{marginVertical: 10}}>
          <SearchBar
            changeText={changeSearchTerm}
            txtSearch={searchTerm}
          />
          <View
            style={{height: 10, width: '100%', backgroundColor: '#e5e5e5'}}
          />
          <Category onFilterChange={changeFilter}/>
        </View>
        <NewsFeed data={articles} />
        <LoadingNews page={page.current} totalPage={COUNTRIES.length} />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  const { articles, isLoading, topHeadlines} = getArticlesSelector(state);

  return { articles, isLoading, topHeadlines};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (txtSearch, isLoadMore = false, page = 0) => {
      dispatch(fetchData(txtSearch, isLoadMore, page))
    },
    fetchTopTenData: () => {
      dispatch(fetchTopTenData())
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)