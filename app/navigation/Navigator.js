import * as React from 'react';
import { Platform, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeContainer from '~/screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '~/styles';

const Tab = createBottomTabNavigator();
export default function Navigator() {
   return (
      <NavigationContainer>
         <Tab.Navigator
            screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                     Platform.OS === 'ios'
                        ? (iconName = focused ? 'ios-home' : 'ios-home-outline')
                        : Platform.OS === 'android'
                        ? (iconName = focused ? 'home' : 'home-outline')
                        : null;
                  } else if (route.name === 'Settings') {
                     iconName = focused ? 'ios-person' : 'person-outline';
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
               },
               tabBarActiveTintColor: colors.primary,
               tabBarInactiveTintColor: colors.darkGrey,
               headerShown: false,
            })}
         >
            <Tab.Screen name="Home" component={HomeContainer} />
            <Tab.Screen name="Settings" component={HomeContainer} />
         </Tab.Navigator>
      </NavigationContainer>
   );
}
