Ext.define("Dashboard.view.main.requests.RequestListView", {
  extend: "Ext.grid.Panel",
  xtype: "requestlistview",
  title: "Request Listing",

  store: {
    type: "requeststore",
  },

  columns: [
    {
      text: "Date",
      dataIndex: "date",
      flex: 1,
    },
    {
      text: "IP Address",
      dataIndex: "ipAddress",
      flex: 1,
    },
    {
      text: "Resource URL",
      dataIndex: "resourceUrl",
      flex: 2,
    },
  ],

  listeners: {
    itemclick: "onRequestItemClick", // Handle item click (if needed)
  },
});
