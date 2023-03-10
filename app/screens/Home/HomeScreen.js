import * as React from 'react';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, ScrollView, Image } from 'react-native';

import HomeScreenHeader from './HomeScreenHeader';
import HomeScreenTitle from './HomeScreenTitle';
import HomeScreenChart from './HomeScreenChart';
import HomeScreenRecentTransaction from './HomeScreenRecentTransaction';

import HomeScreenWallet from './HomeScreenWallet';
import styles from '~/styles/AppStyles';
import { colors } from '~/styles';

export default function HomeScreen() {
   const account = useSelector((state) => state.account);
   return (
      <ScrollView style={styles.containerStyle}>
         {/* header */}
         <HomeScreenHeader />
         {/* header */}

         {/* my wallet */}
         <HomeScreenWallet />
         {/* my wallet */}

         {/* report */}
         <HomeScreenChart />
         {/* report */}

         {/* recent transactions */}
         <HomeScreenRecentTransaction />
         {/* recent transactions */}

         <View>
            {/* recent transactions */}
            <HomeScreenTitle padding title="Kế hoạch tài chính" />
            <View style={[styles.blockStyle, styles.withVerticalPadding]}>
               <View style={[styles.inlineNotSpaceStyle]}>
                  <Ionicons name={'hammer'} style={styles.iconStyle} />
                  <View style={[styles.withMarginLeft]}>
                     <Text style={[styles.smallBoldTextStyle, styles.withVerticalMarginHalfOfHalf]}>
                        Công cụ hỗ trợ tài chính cho bạn
                     </Text>
                     <Text style={[styles.smallTextStyle]}>Đang phát triển</Text>
                  </View>
               </View>
               <View
                  style={[
                     styles.inlineStyle,
                     styles.withMarginTop,
                     styles.withBorderRadius,
                     { backgroundColor: colors.grey, height: 10 },
                  ]}
               >
                  <View
                     style={[styles.withBorderRadius, { flex: 3, backgroundColor: colors.green, height: 10 }]}
                  ></View>
                  <View style={[{ flex: 1 }]}></View>
               </View>
            </View>
         </View>
      </ScrollView>
   );
}
