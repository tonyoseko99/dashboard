/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: "Dashboard.Application",

  name: "Dashboard",

  requires: [
    // This will automatically load all classes in the Dashboard namespace
    // so that application classes do not need to require each other.
    "Dashboard.controller.LoginController",
    "Dashboard.store.Users",
    "Dashboard.store.RequestStore",
    "Dashboard.view.main.requests.RequestListView",
  ],

//   launch: function () {
//     Ext.create("Dashboard.store.Users");
//     Ext.create({
//       xtype: "loginview",
//     });
//   },

  // The name of the initial view to create.
  mainView: "Dashboard.view.main.Main",
});
