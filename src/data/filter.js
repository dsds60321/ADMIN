const TRX_CARD = {
  action: {
    page: { type: 'page', default: '20', limits: ['20', '50', '100'] },
    actions: ['excel'],
    period: 7,
  },

  days: [
    {
      title: '거래일자',
      key: 'trxDay',
      name: 'defaultDay',
      oper: 'between',
      default: false,
    },
    {
      title: '매입일자',
      key: 'acqDay',
      name: 'defaultDay',
      oper: 'between',
      default: true,
    },
  ],

  placeholder: ['승인번호', '금액', '구매자명', 'BIN', 'LAST 4'],

  searchOptions: [
    {
      title: '구매자',
      key: 'customer',
      name: 'customer',
      oper: 'eq',
      type: 'input',
      placeholder: '구매자',
    },
    {
      title: '브랜드',
      key: 'brand',
      name: 'brand',
      oper: 'eq',
      type: 'option',
      list: ['국민', '하나'],
    },
    {
      title: '앱 아이디',
      key: 'appId',
      name: 'appId',
      oper: 'eq',
      type: 'option',
      list: ['app1', 'app2'],
    },
    {
      title: '거래금액',
      key: 'amount',
      name: 'amount',
      oper: 'eq',
      type: 'input',
      placeholder: '거래금액',
    },
  ],

  url: 'list.json',
};

export { TRX_CARD };
