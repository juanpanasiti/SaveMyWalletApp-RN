import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainDraweNavigator from './src/navigators/MainDraweNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainDraweNavigator />
    </NavigationContainer>
  );
};

export default App;
