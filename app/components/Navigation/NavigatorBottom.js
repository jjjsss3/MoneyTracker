import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '~/styles';
import HomeScreen from '~/screens/Home';
import styles from '~/styles/AppStyles';
import { TITLE, ICON } from '~/constants/navigator';
import { updateAddTransActionShow } from '~/redux/generalSlice';

const Tab = createBottomTabNavigator();
export default function NavigatorBottom() {
   const general = useSelector((state) => state.general);
   const dispatch = useDispatch();
   const GetNull = () => {
      return null;
   };
   const openAddTransaction = () => {
      dispatch(updateAddTransActionShow({ show: !general.addTransaction.actionShow ? true : false }));
   };
   return (
      <NavigationContainer independent={true}>
         <Tab.Navigator
            screenOptions={({ route }) => ({
               tabBarActiveTintColor: colors.primary,
               tabBarInactiveTintColor: colors.darkGrey,
               headerShown: false,
            })}
         >
            <Tab.Screen
               name={TITLE[general.language].home}
               component={HomeScreen}
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
                     openAddTransaction();
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
      </NavigationContainer>
   );
}
