import React, { useCallback, useMemo, useRef, useState, forwardRef, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetScrollView } from '@gorhom/bottom-sheet';

import styles from '~/styles/AppStyles';
import { useSelector, useDispatch } from 'react-redux';
import { formatCurrency } from '~/utils/format';
import { hideBalance } from '~/redux/accountSlice';
import ChartBar from '~/components/ChartBar';
import SelectTypeFilter from '~/components/SelectTypeFilter';
import HomeScreenHeader from '~/screens/Home/HomeScreenHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '~/styles';
import { updateShowAddTransactions } from '~/redux/generalSlice';

function BottomSheetAddTransaction() {
   return (
      <BottomSheetScrollView contentContainerStyle={styles.containerStyle}>
         <View>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
            <Text style={styles.bigTextStyle}>Awesome 🎉</Text>
         </View>
      </BottomSheetScrollView>
   );
}
export default BottomSheetAddTransaction;
