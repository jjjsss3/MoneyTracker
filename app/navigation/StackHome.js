import * as React from 'react';
import { Platform, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '~/styles/colors';
const Stack = createStackNavigator();

import HomeScreen from '~/screens/Home';
import BottomSheetAddTransaction from '~/components/BottomSheet/AddTransaction';

export default function StackHome() {
   return (
      <Stack.Navigator
         initialRoutName="HomeScreen"
         screenOptions={({ route }) => ({
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.darkGrey,
            headerShown: false,
         })}
      >
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
   );
}
