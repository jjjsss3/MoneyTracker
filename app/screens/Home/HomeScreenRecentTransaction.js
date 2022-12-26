import * as React from 'react';
import { View } from 'react-native';
import styles from '~/styles/AppStyles';
import { useSelector } from 'react-redux';
import HomeScreenTitle from './HomeScreenTitle';
import HomeScreenDetailBox from './HomeScreenDetailBox';
export default function HomeScreenRecentTransaction() {
   const account = useSelector((state) => state.account);
   return (
      <View>
         {/* recent transactions */}
         <HomeScreenTitle padding title="Giao dịch gần đây" extraTitle="Xem tất cả" showExtraTitle />
         <View style={[styles.blockStyle]}>
            <HomeScreenDetailBox
               icon={require('~/assets/icons/food.png')}
               nameLeft="Ăn uống"
               showDate
               date="Chủ Nhật, 25 tháng 12, 2022"
               number={-30000}
               suffix={account.currency.sign}
               showNameRight
               nameRight="Tiền mặt"
            />
         </View>
      </View>
   );
}
