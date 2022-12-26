import { Text, View, TouchableOpacity } from 'react-native';
import styles from '~/styles/AppStyles';
import { useSelector } from 'react-redux';
import { CONFIRM } from '~/constants/general';
function ConfirmAction() {
   const general = useSelector((state) => state.general);
   const handleOnPressCancel = () => {
      alert('Cancel');
   };
   return (
      <View style={[styles.containerStyle, styles.blockStyle]}>
         <View style={[styles.inlineStyle, styles.withVerticalPadding]}>
            <TouchableOpacity
               style={[
                  styles.buttonTextStyle,
                  styles.withVerticalPadding,
                  styles.withHorizontalMarginHalf,
                  styles.withBackGroundColorGray,
               ]}
               activeOpacity={0.7}
               // onPress={handleOnPressCancel}
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
               onPress={handleOnPressCancel}
            >
               <Text style={[styles.withColorWhite]}>{CONFIRM[general.language].confirm}</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}

export default ConfirmAction;
