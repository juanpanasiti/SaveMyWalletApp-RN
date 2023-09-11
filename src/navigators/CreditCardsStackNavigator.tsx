import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreditCardList from '../components/credit_cards/CreditCardList';
import CreditCardShow from '../components/credit_cards/CreditCardShow';
import CreditCardForm from '../components/credit_cards/CreditCardForm';

const Stack = createStackNavigator();

const CreditCardsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreditCardList" component={CreditCardList} />
      <Stack.Screen name="CreditCardShow" component={CreditCardShow} />
      <Stack.Screen name="CreditCardForm" component={CreditCardForm} />
    </Stack.Navigator>
  );
};

export default CreditCardsStackNavigator;
