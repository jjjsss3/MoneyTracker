import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '~/styles/AppStyles';
export default function HomeScreenTitle({ title, extraTitle, showExtraTitle, padding, borderBottom }) {
   return (
      <View
         style={[styles.inlineStyle, padding && styles.withVerticalPadding, borderBottom && styles.withBorderBottom]}
      >
         <Text style={styles.regularBoldTextStyle}>{title}</Text>
         {showExtraTitle && <Text style={[styles.smallBoldTextStyle, styles.withColorSuccess]}>{extraTitle}</Text>}
      </View>
   );
}
