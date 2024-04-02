Ext.define("Dashboard.controller.RequestViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.requestviewcontroller",
  requires: ["Dashboard.model.RequestModel", "Dashboard.store.RequestStore"],

  onRequestItemClick: function (grid, record) {
    // get the requestlistview
    var requestListView = this.getView().up("requestlistview");

    // get the form
    var form = requestListView.down("form");

    // load the record into the form
    form.loadRecord(record);
  },
});
