import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
const Stack = createStackNavigator();

import ConfirmAction from '../BottomSheet/ConfirmAction';
import ConfirmAction1 from '../BottomSheet/ConfirmAction/ConfirmAction1';
import ConfirmAction2 from '../BottomSheet/ConfirmAction/ConfirmAction2';
import AddTransactionContainer from '../BottomSheet/AddTransaction/AddTransactionContainer';

export default function NavigatorAddTransaction() {
   const screenOptions =
      useMemo <
      StackNavigationOptions >
      (() => ({
         ...TransitionPresets.SlideFromRightIOS,

         headerShown: false,
         safeAreaInsets: { top: 0 },
         cardStyle: {
            backgroundColor: 'white',
            overflow: 'visible',
         },
      }),
      []);

   const screenAOptions = useMemo(() => ({ headerLeft: () => null }), []);
   return (
      <NavigationContainer independent={true}>
         <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="ConfirmAction" component={AddTransactionContainer} />
            <Stack.Screen name="ConfirmAction1" component={ConfirmAction1} />
            <Stack.Screen name="ConfirmAction2" component={ConfirmAction2} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
