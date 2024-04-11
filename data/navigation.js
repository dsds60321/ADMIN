const navigation = [
  {
    title: "폼",
    icon: "faFileInvoice",
    item: [{ title: "샘플", url: "/form" }],
  },
  {
    title: "리스트",
    icon: "faFileInvoice",
    item: [{ title: "샘플", url: "/list" }],
  },
  {
    title: "3-depth",
    icon: "faFileInvoice",
    item: [
      { title: "depth-test", url: "/" },
      { title: "depth-test2", url: "/" },
      {
        title: "샘플",
        list: [
          { title: "depth3", url: "/", icon: "" },
          { title: "depth4", url: "/", icon: "" },
        ],
      },
    ],
  },
];

export { navigation };
