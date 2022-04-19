import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Animated,
  Text,
} from 'react-native';
import GetSTDSize from '../../../components/GetSTDSize';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const LoadingNews = ({ page, totalPage }) => {
  if (page == totalPage) {
    return (
      <View></View>
    );
  };

  const imageRef = React.createRef();
  const firstLineRef = React.createRef();
  const secondLineRef = React.createRef();
  const thirdLineRef = React.createRef();

  React.useEffect(() => {
    const newsAnimated = Animated.stagger(400, [
      imageRef.current.getAnimated(),
      Animated.parallel([
        firstLineRef.current.getAnimated(),
        secondLineRef.current.getAnimated(),
        thirdLineRef.current.getAnimated(),
      ]),
    ]);
    Animated.loop(newsAnimated).start();
  }, []);

  return (
    <View
      style={{
        marginBottom: GetSTDSize(30),
        flexDirection: 'row',
        width: '100%',
        height: GetSTDSize(95),
      }}>
      <View
        style={{
          height: GetSTDSize(95),
          width: GetSTDSize(116),
        }}>
        <ShimmerPlaceholder 
          style={{
            height: GetSTDSize(95),
            width: GetSTDSize(116),
            borderRadius: 10,
          }} 
          ref={imageRef} stopAutoRun />
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-around',
          marginLeft: GetSTDSize(17),
          height: '100%',
          flex: 1,
        }}>
        <ShimmerPlaceholder style={{ borderRadius:5 }} ref={firstLineRef} stopAutoRun />
        <ShimmerPlaceholder style={{ borderRadius:5, width: '60%' }} ref={secondLineRef} stopAutoRun />
        <ShimmerPlaceholder style={{ borderRadius:5, width: '80%' }} ref={thirdLineRef} stopAutoRun />
      </View>
    </View>
  );
};

export default LoadingNews;