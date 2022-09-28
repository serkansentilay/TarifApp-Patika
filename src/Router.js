import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Categories from './pages/Categories';
import Products from './pages/Products';
import Detail from './pages/Detail';


const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} options={{
          title: 'Categories',
          headerStyle: { backgroundColor: '#64b5f6' },
          headerTitleStyle: { color: 'white' },
        }} />
        <Stack.Screen name="ProductsPage" component={Products} options={{
          title: 'Miles',
          headerStyle: { backgroundColor: '#64b5f6' },
          headerTitleStyle: { color: 'white' },
        }} />
        <Stack.Screen name="DetailPage" component={Detail} options={{
          title: 'Detail',
          headerStyle: { backgroundColor: '#64b5f6' },
          headerTitleStyle: { color: 'white' },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router