/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("Dashboard.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "Dashboard.view.main.MainController",
    "Dashboard.view.main.MainModel",
    "Dashboard.view.main.List",
    "Dashboard.view.main.login.LoginView",
  ],

  controller: "main",
  viewModel: "main",

  ui: "navigation",
  tabPosition: "bottom",

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: "stretchmax",
    },
    title: {
      bind: {
        text: "{name}",
      },
      flex: 0,
    },
    iconCls: "fa-th-list",
  },

  tabBar: {
    flex: 1,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  responsiveConfig: {
    tall: {
      headerPosition: "top",
    },
    wide: {
      headerPosition: "left",
    },
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      responsiveConfig: {
        wide: {
          iconAlign: "left",
          textAlign: "left",
        },
        tall: {
          iconAlign: "top",
          textAlign: "center",
          width: 120,
        },
      },
    },
  },

  items: [
    {
      title: "Dashboard",
      iconCls: "fa-home",
      // The following grid shares a store with the classic version's grid as well!
      items: [
        {
          xtype: "loginview",
        },
      ],
    },
    {
      title: "Logs",
      iconCls: "fa-user",
      items: [
        {
          xtype: "requestlistview",
        },
      ],
    },
    {
      title: "Resolved Issues",
      iconCls: "fa-users",
      bind: {
        html: "{loremIpsum}",
      },
    },
    {
      title: "Logout",
      iconCls: "fa-sign-out",
      listeners: {
        click: "onLogoutClick",
      },
    },
  ],

});
