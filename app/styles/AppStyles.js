import { StyleSheet } from 'react-native';
import colors from './colors';
import { indent, doubleIndent, headerHeight, halfIndent, headerMaxHeight } from './dimensions';

const styles = StyleSheet.create({
   blockStyle: {
      backgroundColor: colors.white,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 5,
   },
   boxStyle: {
      paddingVertical: 15,
   },
   caretStyle: {
      color: colors.white,
   },
   containerStyle: {
      paddingLeft: indent,
      paddingRight: indent,
   },
   formInputStyle: {
      color: colors.primaryText,
   },
   headerIconStyle: {
      fontSize: 30,
      color: colors.greyDarker,
   },
   logoContainer: {
      marginHorizontal: halfIndent,
   },
   headerStyle: {
      height: headerHeight,
      elevation: 0,
   },
   inlineStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   inlineNotSpaceStyle: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   headerTextStyle: {
      fontSize: 16,
   },
   highlightTextStyle: {
      color: colors.greenLight,
   },
   bigTextStyle: {
      fontSize: 26,
      fontFamily: 'Roboto-Bold',
      color: colors.primary,
      paddingVertical: 5,
   },
   mediumTextStyle: {
      fontSize: 20,
      fontFamily: 'Roboto-Bold',
      color: colors.primary,
   },
   regularTextStyle: {
      fontSize: 20,
      fontFamily: 'Roboto-Regular',
      color: colors.primary,
   },
   smallBoldTextStyle: {
      fontSize: 18,
      fontFamily: 'Roboto-Medium',
      color: colors.primary,
   },
   smallTextStyle: {
      fontSize: 18,
      fontFamily: 'Roboto-Regular',
      color: colors.secondaryText,
   },
   iconStyle: {
      fontSize: 24,
      color: colors.primary,
   },
   iconImageStyle: {
      width: 38,
      height: 38,
      color: colors.primary,
   },
   rootStyle: {
      flex: 1,
      backgroundColor: colors.grey,
   },
   rowStyle: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   withMarginBottom: {
      marginBottom: indent,
   },
   withMarginTop: {
      marginTop: indent,
   },
   withMarginLeft: {
      marginLeft: halfIndent,
   },
   withoutMargins: {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
   },
   withVerticalMargin: {
      marginTop: indent,
      marginBottom: indent,
   },
   withVerticalPadding: {
      paddingTop: indent,
      paddingBottom: indent,
   },
   withBorderBottom: {
      borderBottomWidth: 1,
      borderBottomColor: colors.greyOpacity,
   },
   withColorSecondary: {
      color: colors.secondaryText,
   },
});

export default styles;
