Ext.define("Dashboard.model.User", {
  extend: 'Dashboard.model.Base',
  fields: [
    { name: "id", type: "int" },
    { name: "email", type: "string" },
    { name: "username", type: "string" },
    { name: "password", type: "string" },
  ],
});
