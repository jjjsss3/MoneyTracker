import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '~/screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '~/styles';
import styles from '~/styles/AppStyles';
import BottomSheet, { BottomSheetView, BottomSheetFooter } from '@gorhom/bottom-sheet';

import StackHome from './StackHome';
import BottomSheetAddTransaction from '~/components/BottomSheet/AddTransaction';
import { updateShowAddTransactions } from '~/redux/generalSlice';
import ConfirmAction from '~/components/BottomSheet/ConfirmAction';
import { TITLE, ICON } from '~/constants/navigator';

const Tab = createBottomTabNavigator();
export default function Navigator() {
   const general = useSelector((state) => state.general);
   const sheetRef = useRef();
   const dispatch = useDispatch();
   const GetNull = () => {
      return null;
   };
   const snapPoints = useMemo(() => ['70%', '90%'], []);

   const handleSnapPress = useCallback((index) => {
      sheetRef.current?.snapToIndex(index);
      dispatch(updateShowAddTransactions({ show: true }));
   }, []);
   const renderFooter = useCallback(
      (props) => (
         <BottomSheetFooter {...props} bottomInset={0}>
            <ConfirmAction />
         </BottomSheetFooter>
      ),
      [],
   );
   return (
      <NavigationContainer>
         <Tab.Navigator
            screenOptions={({ route }) => ({
               tabBarActiveTintColor: colors.primary,
               tabBarInactiveTintColor: colors.darkGrey,
               headerShown: false,
            })}
         >
            <Tab.Screen
               name={TITLE[general.language].home}
               component={StackHome}
               options={{
                  tabBarLabel: TITLE[general.language].home,
                  tabBarIcon: ({ focused, color, size }) => {
                     let iconName;
                     iconName = focused ? (iconName = ICON.home.icon) : (iconName = ICON.home.iconOutline);
                     return <Ionicons name={iconName} size={size} color={color} />;
                  },
               }}
            />
            <Tab.Screen
               name={TITLE[general.language].wallet}
               component={HomeScreen}
               options={{
                  tabBarLabel: TITLE[general.language].wallet,
                  tabBarIcon: ({ focused, color, size }) => {
                     let iconName;
                     iconName = focused ? (iconName = ICON.wallet.icon) : (iconName = ICON.wallet.iconOutline);
                     return <Ionicons name={iconName} size={size} color={color} />;
                  },
               }}
            />

            <Tab.Screen
               name={TITLE[general.language].transaction}
               component={GetNull}
               listeners={() => ({
                  tabPress: (e) => {
                     e.preventDefault(); // Prevents navigation
                     // Your code here for when you press the tab
                     handleSnapPress(0);
                  },
               })}
               options={({ navigation, route }) => ({
                  tabBarLabel: TITLE[general.language].transaction,
                  tabBarIcon: ({ focused, color, size }) => (
                     <Ionicons
                        style={[
                           styles.withShadow,
                           {
                              position: 'absolute',
                              bottom: 0, // space from bottombar
                           },
                           styles.withColorSuccess,
                        ]}
                        name={ICON.transaction.icon}
                        size={66}
                        color={color}
                     />
                  ),
               })}
            />
            <Tab.Screen
               name={TITLE[general.language].plan}
               component={HomeScreen}
               options={{
                  tabBarLabel: TITLE[general.language].plan,
                  tabBarIcon: ({ focused, color, size }) => {
                     let iconName;
                     iconName = focused ? (iconName = ICON.plan.icon) : (iconName = ICON.plan.iconOutline);
                     return <Ionicons name={iconName} size={size} color={color} />;
                  },
               }}
            />
            <Tab.Screen
               name={TITLE[general.language].account}
               component={HomeScreen}
               options={{
                  tabBarLabel: TITLE[general.language].account,
                  tabBarIcon: ({ focused, color, size }) => {
                     let iconName;
                     iconName = focused ? (iconName = ICON.account.icon) : (iconName = ICON.account.iconOutline);
                     return <Ionicons name={iconName} size={size} color={color} />;
                  },
               }}
            />
         </Tab.Navigator>
         <BottomSheet
            ref={sheetRef}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose
            onClose={() => {
               dispatch(updateShowAddTransactions({ show: false }));
            }}
            initialSnap={1}
            footerComponent={renderFooter}
            // handleComponent={renderFooter}
         >
            <BottomSheetAddTransaction />
         </BottomSheet>
      </NavigationContainer>
   );
}
