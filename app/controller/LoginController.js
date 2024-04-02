Ext.define("Dashboard.controller.LoginController", {
  extend: "Ext.app.ViewController",
  alias: "controller.logincontroller",
  requires: ["Dashboard.store.Users"],

  onLoginClick: function () {
    var me = this,
      form = me.getView().down("form"),
      values = form.getValues();

    var store = Ext.getStore("users");
    var user = store.findRecord("username", values.username);
    if (user && user.get("password") === values.password) {
      me.getView().destroy();
      Ext.create({
        xtype: "app-main",
      });
    } else {
      Ext.Msg.alert("Error", "Username or password incorrect.");
    }
  },
});
