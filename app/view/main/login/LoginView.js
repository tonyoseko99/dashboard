Ext.define("Dashboard.view.main.login.LoginView", {
  extend: "Ext.window.Window",
  xtype: "loginview",
  controller: "logincontroller",
  title: "Login",
  layout: "center",
  width: 600,
  height: 400,
  autoShow: true,
//   align: "center",

  items: {
    xtype: "form",
    reference: "form",
    layout: {
        type: 'vbox',
        align: 'center'
    },
    items: [

      {
        xtype: "textfield",
        name: "username",
        fieldLabel: "Username",
        allowBlank: false,
      },
      {
        xtype: "textfield",
        name: "password",
        inputType: "password",
        fieldLabel: "Password",
        allowBlank: false,
      },
    ],
    buttons: [
      {
        text: "Login",
        formBind: true,
        listeners: {
          click: "onLoginClick",
        },
      },
    ],
  },
});
