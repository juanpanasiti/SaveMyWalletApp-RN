import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CreditCardsStackNavigator from './CreditCardsStackNavigator';
import ExpensesStackNavigator from './ExpensesStackNavigator';

const Drawer = createDrawerNavigator();

const MainDraweNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen
        name="CreditCardsStackNavigator"
        component={CreditCardsStackNavigator}
      />
      <Drawer.Screen
        name="ExpensesStackNavigator"
        component={ExpensesStackNavigator}
      />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default MainDraweNavigator;
