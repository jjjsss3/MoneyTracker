import * as React from 'react';
import Tooltip from 'rn-tooltip';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, TouchableOpacity } from 'react-native';

import { colors } from '~/styles';
import styles from '~/styles/AppStyles';
import { formatCurrency } from '~/utils/format';
import { hideBalance } from '~/redux/generalSlice';

export default function HomeScreenHeader() {
   const account = useSelector((state) => state.account);
   const general = useSelector((state) => state.general);

   const dispatch = useDispatch();

   const handleHideBalance = () => {
      // alert('aaa');
      dispatch(hideBalance({ hiddenBalance: general.hiddenBalance ? false : true }));
   };
   return (
      <View style={[styles.headerStyle, styles.inlineStyle]}>
         <View>
            <View style={styles.inlineStyle}>
               {!general.hiddenBalance ? (
                  <Text style={styles.bigTextStyle}>{formatCurrency(account.total, general.currency.sign)}</Text>
               ) : (
                  <View style={styles.inlineStyle}>
                     <Ionicons name={'medical'} size={12} />
                     <Ionicons name={'medical'} size={12} />
                     <Ionicons name={'medical'} size={12} />
                     <Ionicons name={'medical'} size={12} />
                     <Ionicons name={'medical'} size={12} />
                     <Ionicons name={'medical'} size={12} />
                     <Ionicons name={'medical'} size={12} />
                     <Ionicons name={'medical'} size={12} />
                     <Ionicons name={'medical'} size={12} />
                     <Text style={styles.bigTextStyle}> </Text>
                  </View>
               )}

               <TouchableOpacity onPress={handleHideBalance}>
                  <Ionicons name={!general.hiddenBalance ? 'eye' : 'eye-off'} style={styles.iconStyle} />
               </TouchableOpacity>
            </View>
            <View style={styles.inlineNotSpaceStyle}>
               <Text style={styles.smallTextStyle}>Tổng số dư </Text>
               <Tooltip
                  height={50}
                  width={160}
                  overlayColor="rgba(250, 250, 250, 0)"
                  backgroundColor={colors.primary}
                  popover={<Text style={styles.caretStyle}>Tính bằng tổng số dư tất cả các ví của bạn</Text>}
               >
                  <Ionicons name={'help-circle'} style={[styles.iconStyle, styles.withColorSecondary]} />
               </Tooltip>
            </View>
         </View>
         <View>
            <Ionicons name={'notifications'} size={22} style={styles.iconStyle} />
         </View>
      </View>
   );
}
