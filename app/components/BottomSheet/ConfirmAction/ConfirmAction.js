import { useSelector, useDispatch } from 'react-redux';
import { Text, View, TouchableOpacity, Button } from 'react-native';

import styles from '~/styles/AppStyles';
import { CONFIRM } from '~/constants/general';
import { updateAddTransActionShow, updateAddTransShow } from '~/redux/generalSlice';
function ConfirmAction({ navigation }) {
   const dispatch = useDispatch();
   const general = useSelector((state) => state.general);
   const handleOnPressCancel = () => {
      dispatch(updateAddTransActionShow({ show: false }));
   };
   return (
      <View style={[styles.containerStyle, styles.blockStyle]}>
         <Button title="Go to 1" onPress={() => navigation.navigate('ConfirmAction1')} />
         <View style={[styles.inlineStyle, styles.withVerticalPadding]}>
            <TouchableOpacity
               style={[
                  styles.buttonTextStyle,
                  styles.withVerticalPadding,
                  styles.withHorizontalMarginHalf,
                  styles.withBackGroundColorGray,
               ]}
               activeOpacity={0.7}
               onPress={handleOnPressCancel}
            >
               <Text style={[styles.withColorBlack]}>{CONFIRM[general.language].cancel}</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={[
                  styles.buttonTextStyle,
                  styles.withVerticalPadding,
                  styles.withHorizontalMarginHalf,
                  styles.withBackGroundColorSuccess,
                  styles.withShadow,
               ]}
               activeOpacity={0.7}
               // onPress={handleOnPressCancel}
            >
               <Text style={[styles.withColorWhite]}>{CONFIRM[general.language].confirm}</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}

export default ConfirmAction;
