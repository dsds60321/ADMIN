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
      { title: 'depth-test', url: '/' },
      { title: 'depth-test2', url: '/' },
      {
        title: '샘플',
        icon: 'file-invoice',
        list: [
          { title: 'depth3', url: '/', icon: '' },
          { title: 'depth3', url: '/', icon: '' },
          { title: 'depth3', url: '/', icon: '' },
          { title: 'depth4', url: '/', icon: '' },
        ],
      },
    ],
  },
];

export { navigation };
