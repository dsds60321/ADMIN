const navigation = [
  {
    title: '폼',
    icon: 'file-invoice',
    item: [{ title: '샘플', url: '/form' }],
  },
  {
    title: '리스트',
    icon: 'file-invoice',
    item: [{ title: '샘플', url: '/list' }],
  },
  {
    title: '3-depth',
    icon: 'file-invoice',
    item: [
      { title: 'depth-test', url: '/depth' },
      {
        title: '샘플',
        icon: 'file-invoice',
        list: [
          { title: 'depth3', url: '/dept3', icon: '' },
          { title: 'depth3', url: '/dept4', icon: '' },
          { title: 'depth3', url: '/dept5', icon: '' },
        ],
      },
    ],
  },
];

export { navigation };
