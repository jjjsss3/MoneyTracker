import { useCallback, useMemo, useRef, useEffect } from 'react';
import BottomSheet, { BottomSheetFooter } from '@gorhom/bottom-sheet';

import styles from '~/styles/AppStyles';
import { useSelector, useDispatch } from 'react-redux';
import { updateAddTransShow } from '~/redux/generalSlice';
import ConfirmAction from '~/components/BottomSheet/ConfirmAction';
import NavigatorAddTransaction from '~/components/Navigation/NavigatorAddTransaction';
export default function AddTransaction() {
   const general = useSelector((state) => state.general);
   const sheetRef = useRef();
   const dispatch = useDispatch();
   const snapPoints = useMemo(() => ['70%', '90%'], []);

   const handleSnapPress = useCallback((index) => {
      dispatch(updateAddTransShow({ show: true }));
      sheetRef?.current?.snapToIndex(index);
   }, []);

   useEffect(() => {
      handleSnapPress(0);
   }, [general.addTransaction.actionShow === true]);

   useEffect(() => {
      sheetRef?.current?.close();
   }, [general.addTransaction.actionShow === false]);

   const renderFooter = useCallback(
      (props) => (
         <BottomSheetFooter {...props} bottomInset={0}>
            <ConfirmAction />
         </BottomSheetFooter>
      ),
      [],
   );
   return (
      <BottomSheet
         ref={sheetRef}
         index={-1}
         snapPoints={snapPoints}
         enablePanDownToClose
         animateOnMount={true}
         onClose={() => {
            dispatch(updateAddTransShow({ show: false }));
         }}
         initialSnap={1}
         footerComponent={renderFooter}
         // handleComponent={renderFooter}
         style={styles.withShadowThick}
      >
         <NavigatorAddTransaction />
      </BottomSheet>
   );
}
