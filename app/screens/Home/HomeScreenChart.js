import * as React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '~/styles/AppStyles';
import { useSelector } from 'react-redux';

import ChartBar from '~/components/ChartBar';
import SelectTypeFilter from '~/components/SelectTypeFilter';

import HomeScreenTitle from './HomeScreenTitle';
import HomeScreenDetailBox from './HomeScreenDetailBox';

export default function HomeScreenChart() {
   const account = useSelector((state) => state.account);

   return (
      <View>
         {/* report */}
         <HomeScreenTitle padding title="Báo cáo chi tiêu" extraTitle="Xem báo cáo" showExtraTitle />
         <View style={[styles.blockStyle]}>
            <SelectTypeFilter />
            <ChartBar />
            <HomeScreenTitle title="Tỉ lệ chi tiêu" />
            <HomeScreenDetailBox icon={require('~/assets/icons/car.png')} nameLeft="Ăn uống" number={60} suffix="%" />
         </View>
         {/* report */}
      </View>
   );
}
