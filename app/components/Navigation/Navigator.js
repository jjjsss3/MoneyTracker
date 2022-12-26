import { View } from 'react-native';

import { AddTransaction } from '~/components/BottomSheet';
import NavigatorBottom from '~/components/Navigation/NavigatorBottom';
import styles from '~/styles/AppStyles';

function Navigator() {
   return (
      <View style={styles.rootStyle}>
         <NavigatorBottom />
         <AddTransaction />
      </View>
   );
}
export default Navigator;
