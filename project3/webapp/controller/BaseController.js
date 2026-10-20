sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("oft.project3.controller.BaseController", {
        onInit() {
        },
        getAppObject: function(){
          return  sap.ui.getCore().byId("idAppView--myApp");
        }
    });
});