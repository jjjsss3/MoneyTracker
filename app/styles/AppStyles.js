import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';
import { indent, doubleIndent, headerHeight, halfIndent, headerMaxHeight } from './dimensions';

const styles = StyleSheet.create({
   blockStyle: {
      backgroundColor: colors.white,
      borderRadius: 10,
      paddingHorizontal: 20,
      // paddingVertical: 5,
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
      fontSize: 26,
      fontFamily: 'Roboto-Medium',
      color: colors.primary,
   },
   regularBoldTextStyle: {
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
   tinyTextStyle: {
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      color: colors.secondaryText,
   },
   iconStyle: {
      fontSize: 24,
      color: colors.primary,
   },
   smallIconStyle: {
      fontSize: 16,
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
   barChartStyle: {
      // color: colors.white,
      // alignSelf: 'center',
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
   withMarginTopHalf: {
      marginTop: halfIndent / 2,
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
      marginVertical: indent,
   },
   withHorizontalMargin: {
      marginHorizontal: indent,
   },
   withHorizontalMarginHalf: {
      marginHorizontal: halfIndent,
   },
   withVerticalMarginHalfOfHalf: {
      marginTop: halfIndent / 2,
      marginBottom: halfIndent / 2,
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
   typeFilterStyle: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 8,
   },
   typeFilterSelectedStyle: {
      backgroundColor: colors.white,
      borderRadius: 5,
   },
   typeFilterNoSelectedStyle: {
      backgroundColor: colors.greyLighter,
   },
   withShadow: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
      elevation: 5,
   },
   withColorWhite: {
      color: colors.white,
   },
   withColorBlack: {
      color: colors.black,
   },
   withColorSuccess: {
      color: colors.green,
   },
   withColorWarning: {
      color: colors.yellow,
   },
   withColorError: {
      color: colors.red,
   },
   withBackGroundColorSuccess: {
      backgroundColor: colors.green,
   },
   withBackGroundColorPrimary: {
      backgroundColor: colors.primary,
   },
   withBackGroundColorGray: {
      backgroundColor: colors.grey,
   },
   withBorderRadius: {
      borderRadius: 5,
   },
   withAbsolutePosition: {
      position: 'absolute',
   },
   buttonTextStyle: {
      borderRadius: 10,
      flex: 1,
      alignItems: 'center',
   },
});

export default styles;
