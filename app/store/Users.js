Ext.define("Dashboard.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  model: "Dashboard.model.User",
  requires: ["Dashboard.model.User"],
  data: {
    items: [
      { id: 1, email: "admin@test.com", username: "admin", password: "admin" },
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
