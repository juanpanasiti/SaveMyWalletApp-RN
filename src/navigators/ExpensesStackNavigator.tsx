import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExpenseList from '../components/expenses/ExpenseList';
import ExpenseShow from '../components/expenses/ExpenseShow';
import ExpenseForm from '../components/expenses/ExpenseForm';

const Stack = createStackNavigator();

const ExpensesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ExpenseList" component={ExpenseList} />
      <Stack.Screen name="ExpenseShow" component={ExpenseShow} />
      <Stack.Screen name="ExpenseForm" component={ExpenseForm} />
    </Stack.Navigator>
  );
};

export default ExpensesStackNavigator;
