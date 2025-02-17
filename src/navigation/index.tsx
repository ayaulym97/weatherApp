import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../modules/main/screens/Main';
import WeatherScreen from '@/modules/weather/screens';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main.index"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="weather.index"
          component={WeatherScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
