sap.ui.define([
    "oft/project3/controller/BaseController" // <-- Import YOUR custom BaseController
], function (BaseController) {
    "use strict";

    return BaseController.extend("oft.project3.controller.View1", {

        onInit: function () {
            // App specific logic
            // You can call BaseController methods using this.baseMethod() if needed
        },

        onNext: function(){
            var oApp = this.getAppObject();
            oApp.to("idView2");
        },
        onSearch: function(oEvent){
            var queryString = oEvent.getParameter("query");
            var oFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, queryString);
            var aFilter = [oFilter];
            var oList = this.getView().byId("fruits");
            oList.Filter(aFilter);
        }
    });
});