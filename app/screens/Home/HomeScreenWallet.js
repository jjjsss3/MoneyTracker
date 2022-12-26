import * as React from 'react';
import { View } from 'react-native';
import styles from '~/styles/AppStyles';
import { useSelector } from 'react-redux';
import HomeScreenTitle from './HomeScreenTitle';
import HomeScreenDetailBox from './HomeScreenDetailBox';
export default function HomeScreenWallet() {
   const account = useSelector((state) => state.account);
   return (
      <View>
         {/* my wallet */}
         <View style={[styles.blockStyle]}>
            <HomeScreenTitle padding borderBottom title="Ví của tôi" extraTitle="Xem tất cả" showExtraTitle />
            <HomeScreenDetailBox
               icon={require('~/assets/icons/cash.png')}
               nameLeft="Tiền mặt"
               number={12334456787}
               suffix={account.currency.sign}
            />
            {/* <HomeScreenDetailBox name="Du lịch" balance={592348000} icon={require('~/assets/icons/flight.png')} /> */}
         </View>
         {/* my wallet */}
      </View>
   );
}
