import language from '~/constants/language';
export default {
   newAccountDateFormat: 'dddd, MM.DD.YYYY',
   MONTH: 'MONTH',
   WEEK: 'WEEK',
   DAY: 'DAY',
   [language.VIETNAMESE.short]: {
      DayOfWeek: ['Chủ Nhật', 'Thứ Hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
      DayOfWeekShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
   },
   [language.ENGLISH.short]: {
      DayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      DayOfWeekShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
   },
};
