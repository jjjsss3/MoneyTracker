import { useState } from 'react';
import { Text, View, TextInput, Image } from 'react-native';

import styles from '~/styles/AppStyles';
import { formatCurrencyInput } from '~/utils/format';
import { ADD_TRANSACTION } from '~/constants/general';
import { useSelector, useDispatch } from 'react-redux';
export default function AddTransactionContainer() {
   const general = useSelector((state) => state.general);
   const dispatch = useDispatch();
   const [number, setNumber] = useState();
   const onChangeNumber = (event) => {
      let t = Number(event.nativeEvent.text.replace(/[^0-9]/g, ''));
      t !== 0 ? setNumber(formatCurrencyInput(t)) : setNumber(null);
      // setNumber(t);
   };
   return (
      <View>
         <Text style={styles.bigTextStyle}>{ADD_TRANSACTION[general.language].title}</Text>
         <View style={styles.inlineStyle}>
            <TextInput
               style={[
                  styles.textInputStyle,
                  styles.withVerticalPadding,
                  styles.regularTextStyle,
                  styles.withBorderBottom,
               ]}
               onChange={onChangeNumber}
               value={number}
               placeholder={ADD_TRANSACTION[general.language].money}
               keyboardType="numeric"
            />
            <Text style={[styles.smallTextStyle]}>{general.currency.sign}</Text>
            <Image style={styles.iconImageStyle} source={general.currency.icon} />
         </View>
      </View>
   );
}
