import React, { useCallback, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { lifecycle } from 'recompose';

import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';

import store from '~/redux/store';
import colors from '~/styles/colors';
import styles from '~/styles/AppStyles';
import Navigator from '~/components/Navigation';

SplashScreen.preventAutoHideAsync();

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
const App = () => {
   const [appIsReady, setAppIsReady] = useState(false);

   const [hidden, setHidden] = useState(false);
   const [statusBarStyle, setStatusBarStyle] = useState(STYLES[1]);
   const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);
   const [fontsLoaded] = useFonts({
      'Roboto-Bold': require('~/assets/fonts/Roboto/Roboto-Bold.ttf'),
      'Roboto-Medium': require('~/assets/fonts/Roboto/Roboto-Medium.ttf'),
      'Roboto-Regular': require('~/assets/fonts/Roboto/Roboto-Regular.ttf'),
      'Roboto-Light': require('~/assets/fonts/Roboto/Roboto-Light.ttf'),
      'Roboto-Italic': require('~/assets/fonts/Roboto/Roboto-Italic.ttf'),
   });
   useEffect(() => {
      async function prepare() {
         try {
            // Pre-load fonts, make any API calls you need to do here
            await Font.loadAsync(Entypo.font);
            // Artificially delay for two seconds to simulate a slow loading
            // experience. Please remove this if you copy and paste the code!
            await new Promise((resolve) => setTimeout(resolve, 2000));
         } catch (e) {
            console.warn(e);
         } finally {
            // Tell the application to render
            setAppIsReady(true);
         }
      }

      prepare();
   }, []);
   const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
         // This tells the splash screen to hide immediately! If we call this after
         // `setAppIsReady`, then we may see a blank screen while the app is
         // loading its initial state and rendering its first pixels. So instead,
         // we hide the splash screen once we know the root view has already
         // performed layout.
         await SplashScreen.hideAsync();
      }
   }, [appIsReady]);

   if (!appIsReady) {
      return null;
   }
   if (!fontsLoaded) {
      return <AppLoading />;
   } else {
      return (
         <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={[styles.rootStyle]} onLayout={onLayoutRootView}>
               <StatusBar
                  status="auto"
                  animated={true}
                  barStyle={statusBarStyle}
                  showHideTransition={statusBarTransition}
                  backgroundColor={colors.grey}
                  hidden={hidden}
               />
               <Provider store={store}>
                  <Navigator />
               </Provider>
            </SafeAreaView>
         </GestureHandlerRootView>
      );
   }
};
export default App;
