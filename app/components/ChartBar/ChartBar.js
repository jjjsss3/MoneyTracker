import * as React from 'react';
import { useSelector } from 'react-redux';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '~/styles';
import styles from '~/styles/AppStyles';
import { formatCurrency } from '~/utils/format';
import { doubleIndent } from '~/styles/dimensions';

function ChartBar() {
   const general = useSelector((state) => state.general);
   // const d = new Date();
   // let day = d.getDay();
   return (
      <View>
         <Text style={[styles.mediumTextStyle, styles.withMarginTop]}>
            {formatCurrency(123345657, general.currency.sign)}
         </Text>
         <View style={[styles.inlineNotSpaceStyle, styles.withMarginTopHalf]}>
            <Text style={styles.smallTextStyle}>Tổng đã chi tháng này </Text>
            <Ionicons name={'remove-circle'} size={16} style={[styles.withColorWarning]} />
            <Ionicons name={'add-circle'} size={16} style={[styles.withColorSuccess]} />
         </View>
         <BarChart
            style={[styles.barChartStyle, styles.withMarginTop]}
            data={general.dataFilter}
            width={Dimensions.get('window').width - doubleIndent - 20}
            height={220}
            chartConfig={{
               backgroundColor: 'transparent',
               backgroundGradientTo: 'white',
               backgroundGradientFromOpacity: 1,
               backgroundGradientFrom: 'white',
               backgroundGradientToOpacity: 1,
               color: (opacity = 1) => colors.primaryText,
               barRadius: 5,
               barPercentage: general.typeFilter === 'DAY' ? 0.5 : 2,
               decimalPlaces: 0,
            }}
            decimalPlaces={0}
            yAxisSuffix={general.currency.unitReport}
            withHorizontalLabels={true}
            fromZero={true}
            // withCustomBarColorFromData={true}
            flatColor={true}
            withInnerLines={false}
            showBarTops={false}
            showValuesOnTopOfBars={true}
            label
         />
      </View>
   );
}
export default ChartBar;
