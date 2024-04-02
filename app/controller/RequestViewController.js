Ext.define("Dashboard.controller.RequestViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.requestviewcontroller",
  requires: ["Dashboard.model.RequestModel"],

  onRequestItemClick: function (grid, record) {
    var form = this.getView().down("form");
    form.loadRecord(record);
  },
});
