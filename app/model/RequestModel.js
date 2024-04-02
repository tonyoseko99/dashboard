Ext.define("Dashboard.model.RequestModel", {
  extend: "Ext.data.Model",
  fields: [
    { name: "id", type: "int" },
    { name: "date", type: "date" },
    { name: "ipAddress", type: "string" },
    { name: "resourceUrl", type: "string" },
  ],
});
