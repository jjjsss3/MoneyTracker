import language from '~/constants/language';
export const TITLE = {
   [language.VIETNAMESE.short]: {
      home: 'Tổng quan',
      wallet: 'Ví của bạn',
      transaction: 'Giao dịch',
      plan: 'Kế hoạch',
      account: 'Tài khoản',
   },
   [language.ENGLISH.short]: {
      home: 'Home',
      wallet: 'Wallet',
      transaction: 'Transaction',
      plan: 'Plan',
      account: 'Account',
   },
};
export const ICON = {
   home: {
      slug: 'home',
      icon: 'home',
      iconOutline: 'home',
   },
   wallet: {
      slug: 'wallet',
      icon: 'wallet',
      iconOutline: 'wallet',
   },
   transaction: {
      slug: 'transaction',
      icon: 'add-circle',
      iconOutline: 'add-circle',
   },
   plan: {
      slug: 'plan',
      icon: 'create',
      iconOutline: 'create',
   },
   account: {
      slug: 'account',
      icon: 'person',
      iconOutline: 'person',
   },
};
