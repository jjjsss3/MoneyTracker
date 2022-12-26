import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '~/styles/AppStyles';
import { useSelector, useDispatch } from 'react-redux';
import { colors } from '~/styles';
import { updateTypeFilter, updateDataFilter } from '~/redux/generalSlice';
import date from '~/constants/dateFormat';
function SelectTypeFilter() {
   const dispatch = useDispatch();
   const general = useSelector((state) => state.general);
   const handleOnPressMonth = () => {
      dispatch(updateTypeFilter({ typeFilter: date.MONTH }));
      const data = {
         labels: ['Tháng trước', 'Tháng này'],
         datasets: [
            {
               data: [401, 841.5],
               // colors: [
               //    (opacity = 1) => `#BE95FF`,
               //    (opacity = 1) => `#78A9FF`,
               // ],
            },
         ],
      };
      dispatch(updateDataFilter({ data: data }));
   };
   const handleOnPressWeek = () => {
      dispatch(updateTypeFilter({ typeFilter: date.WEEK }));
      const data = {
         labels: ['Tuần trước', 'Tuần này'],
         datasets: [
            {
               data: [40, 84.5],
               // colors: [
               //    (opacity = 1) => `#BE95FF`,
               //    (opacity = 1) => `#78A9FF`,
               // ],
            },
         ],
      };
      dispatch(updateDataFilter({ data: data }));
   };
   const handleOnPressDay = () => {
      dispatch(updateTypeFilter({ typeFilter: date.DAY }));
      const data = {
         labels: date[general.language].DayOfWeekShort,
         datasets: [
            {
               data: [40, 40, 40, 40, 40, 40, 40],
               // colors: [
               //    (opacity = 1) => `#BE95FF`,
               //    (opacity = 1) => `#78A9FF`,
               // ],
            },
         ],
      };

      dispatch(updateDataFilter({ data: data }));
   };
   return (
      <View
         style={[
            styles.inlineNotSpaceStyle,
            styles.withMarginTop,
            { padding: 2, backgroundColor: colors.greyLighter, borderRadius: 5 },
         ]}
      >
         <TouchableOpacity
            style={[
               styles.typeFilterStyle,
               general.typeFilter === 'MONTH'
                  ? [styles.typeFilterSelectedStyle, styles.withShadow]
                  : styles.typeFilterNoSelectedStyle,
            ]}
            onPress={handleOnPressMonth}
            activeOpacity={0.8}
         >
            <Text>Tháng</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={[
               styles.typeFilterStyle,
               general.typeFilter === 'WEEK'
                  ? [styles.typeFilterSelectedStyle, styles.withShadow]
                  : styles.typeFilterNoSelectedStyle,
            ]}
            onPress={handleOnPressWeek}
            activeOpacity={0.8}
         >
            <Text>Tuần</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={[
               styles.typeFilterStyle,
               general.typeFilter === 'DAY'
                  ? [styles.typeFilterSelectedStyle, styles.withShadow]
                  : styles.typeFilterNoSelectedStyle,
            ]}
            onPress={handleOnPressDay}
            activeOpacity={0.8}
         >
            <Text>Ngày</Text>
         </TouchableOpacity>
      </View>
   );
}
export default SelectTypeFilter;
