sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"  // Import JSONModel properly
], (BaseController,  JSONModel) => {
  "use strict";

  return BaseController.extend("action.project2.controller.App", {
      onInit() {
        var oModel = new JSONModel();
        oModel.loadData("project2/webapp/models/mockData/myData.json");
          this.getView().setModel(oModel); 
         

      },

      onMagic: function(){
          var oSal = this.getView().byId("idSalary");
          oSal.bindValue("/empStr/salary");

          var oCurr = this.getView().byId("idCurr");
          oCurr.bindProperty("value", "/empStr/currency")
      }
  });
});