import React from 'react';
import {
  useColorScheme,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import MyTabs from './src/components/Tabbar.js';
import DetailScreen from './src/screeens/detail_screen/DetailScreen';

import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configureStore.js';

import {ToastProvider} from 'react-native-toast-notifications';

import {PersistGate} from 'redux-persist/integration/react';

const {store, persister } = configureStore();

const App = () => {
  return (
    <ToastProvider>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persister}
        >
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ToastProvider>
  );
};

export default App;
