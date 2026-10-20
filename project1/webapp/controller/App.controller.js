sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("gaurav.project1.controller.App", {
    pressButton: function() {
      var oUser = this.getView().byId("idUser");
      var oPwd = this.getView().byId("idPwd");
      
      // 1. Extract the text, make it lowercase, and remove extra spaces
      var sUserInput = oUser.getValue().toLowerCase().trim(); 
      var sPwdInput = oPwd.getValue();
      
      // 2. FIX: Compare the string directly, no .getValue() needed!
      if (sUserInput === "gaurav" && sPwdInput === "Gaurav@123") {
        alert("Login Successful! (this is due to xml button)");
      } else {
        alert("Login failed!!!");
      }  

      alert("this is XML views");
    }
  });
});