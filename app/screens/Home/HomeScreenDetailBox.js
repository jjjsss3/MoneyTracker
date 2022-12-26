import * as React from 'react';
import { useSelector } from 'react-redux';
import { Text, View, Image } from 'react-native';

import styles from '~/styles/AppStyles';
import { formatCurrency } from '~/utils/format';

export default function HomeScreenDetailBox({
   icon,
   nameLeft,
   showDate,
   date,
   number,
   suffix,
   showNameRight,
   nameRight,
}) {
   const account = useSelector((state) => state.account);
   return (
      <View style={[styles.inlineStyle, styles.withVerticalPadding]}>
         <View style={styles.inlineNotSpaceStyle}>
            <Image style={styles.iconImageStyle} source={icon} />
            <View>
               <Text style={[styles.smallBoldTextStyle, styles.withMarginLeft, styles.withVerticalMarginHalfOfHalf]}>
                  {nameLeft}
               </Text>
               {showDate && (
                  <Text style={[styles.tinyTextStyle, styles.withMarginLeft, styles.withVerticalMarginHalfOfHalf]}>
                     {date}
                  </Text>
               )}
            </View>
         </View>
         <View>
            <Text
               style={[
                  styles.regularTextStyle,
                  showNameRight ? (number > 0 ? styles.withColorSuccess : styles.withColorError) : null,
               ]}
            >
               {formatCurrency(number, suffix)}
            </Text>
            {showNameRight && (
               <Text style={[styles.smallBoldTextStyle, styles.withMarginLeft, styles.withVerticalMarginHalfOfHalf]}>
                  {nameRight}
               </Text>
            )}
         </View>
      </View>
   );
}
{
   /* <View style={[styles.inlineStyle, styles.boxStyle]}>
               <View style={styles.inlineNotSpaceStyle}>
                  <Image style={styles.iconImageStyle} source={require('~/assets/icons/food.png')} />
                  <Text style={[styles.smallBoldTextStyle, styles.withMarginLeft]}>Ăn uống</Text>
               </View>
               <Text style={[styles.regularTextStyle]}>{formatCurrency(account.total / 8, account.currency.sign)}</Text>
            </View> */
}
