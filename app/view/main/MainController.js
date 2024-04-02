/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("Dashboard.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  onItemSelected: function (sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },

  onRequestItemClick: function (grid, record) {
    // load the record into the form
    this.getView().down("form").loadRecord(record);
  },

  onLogoutClick: function () {
    var me = this;
    Ext.Msg.confirm(
      "Logout",
      "Are you sure you want to logout?",
      function (choice) {
        if (choice === "yes") {
          me.getView().destroy();
          Ext.create({
            xtype: "loginview",
          });
        }
      }
    );
  },
});
