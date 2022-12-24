import * as React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from '~/styles/AppStyles';
import { useSelector, useDispatch } from 'react-redux';
import { formatCurrency } from '~/utils/format';
import { hideBalance } from '~/redux/accountSlice';
import Tooltip from 'rn-tooltip';
import { colors } from '~/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeContainer() {
   const account = useSelector((state) => state.account);
   const dispatch = useDispatch();

   const handleHideBalance = () => {
      // alert('aaa');
      dispatch(hideBalance({ hiddenBalance: account.hiddenBalance ? false : true }));
   };
   return (
      <ScrollView style={styles.containerStyle}>
         <View style={[styles.headerStyle, styles.inlineStyle]}>
            <View>
               <View style={styles.inlineStyle}>
                  {!account.hiddenBalance ? (
                     <Text style={styles.bigTextStyle}>{formatCurrency(account.total, account.currency.sign)}</Text>
                  ) : (
                     <View style={styles.inlineStyle}>
                        <FontAwesomeIcon icon={faAsterisk} size={12} />
                        <FontAwesomeIcon icon={faAsterisk} size={12} />
                        <FontAwesomeIcon icon={faAsterisk} size={12} />
                        <FontAwesomeIcon icon={faAsterisk} size={12} />
                        <FontAwesomeIcon icon={faAsterisk} size={12} />
                        <FontAwesomeIcon icon={faAsterisk} size={12} />
                        <FontAwesomeIcon icon={faAsterisk} size={12} />
                        <FontAwesomeIcon icon={faAsterisk} size={12} />
                        <Text style={styles.bigTextStyle}> </Text>
                     </View>
                  )}

                  <TouchableOpacity onPress={handleHideBalance}>
                     <Ionicons name={account.hiddenBalance ? 'eye' : 'eye-off'} size={20} style={styles.iconStyle} />
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
         <View style={[styles.blockStyle]}>
            <View style={[styles.inlineStyle, styles.boxStyle, styles.withBorderBottom]}>
               <Text style={styles.mediumTextStyle}>Ví của tôi</Text>
               <Text style={[styles.smallBoldTextStyle, styles.highlightTextStyle]}>Xem tất cả</Text>
            </View>
            <View style={[styles.inlineStyle, styles.boxStyle]}>
               <View style={styles.inlineNotSpaceStyle}>
                  <Image style={styles.iconImageStyle} source={require('~/assets/icons/cash.png')} />
                  <Text style={[styles.smallBoldTextStyle, styles.withMarginLeft]}>Tiền mặt</Text>
               </View>
               <Text style={[styles.regularTextStyle]}>{formatCurrency(account.total, account.currency.sign)}</Text>
            </View>
            <View style={[styles.inlineStyle, styles.boxStyle]}>
               <View style={styles.inlineNotSpaceStyle}>
                  <Image style={styles.iconImageStyle} source={require('~/assets/icons/food.png')} />
                  <Text style={[styles.smallBoldTextStyle, styles.withMarginLeft]}>Ăn uống</Text>
               </View>
               <Text style={[styles.regularTextStyle]}>{formatCurrency(account.total / 8, account.currency.sign)}</Text>
            </View>
         </View>
         <View style={[styles.inlineStyle, styles.withMarginTop]}>
            <Text style={styles.mediumTextStyle}>Báo cáo chi tiêu</Text>
            <Text style={[styles.smallBoldTextStyle, styles.highlightTextStyle]}>Xem báo cáo</Text>
         </View>
         <View style={[styles.blockStyle, styles.withMarginTop]}></View>
         <Text style={styles.regularTextStyle}>Tổng đã chi trong tháng </Text>
         <Text style={styles.smallTextStyle}>Enter put</Text>
      </ScrollView>
   );
}
