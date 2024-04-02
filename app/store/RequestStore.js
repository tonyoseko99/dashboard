Ext.define("Dashboard.store.RequestStore", {
  extend: "Ext.data.Store",
  alias: "store.requeststore",
  model: "Dashboard.model.RequestModel",
  requires: ["Dashboard.model.RequestModel"],
  autoLoad: true,
  pageSize: 10,

  //   static data for testing
  data: {
    items: [
      {
        id: 1,
        date: "2021-08-01",
        IPAddress: "192.168.0.1",
        resourceUrl: "https://www.google.com",
      },
    ],
  },

  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
