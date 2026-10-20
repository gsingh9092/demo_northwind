sap.ui.define([
    "oft/project3/controller/BaseController", // <-- Import YOUR custom BaseController
    "oft/project3/models/model"
], function (BaseController, model) {
    "use strict";

    return BaseController.extend("oft.project3.controller.App", {
        onInit: function () {
            var oModel = model.createFruitModel();
            this.getView().setModel(oModel);
            // 1 get the object of the app control
            var oApp = this.getView().byId("app");
            // create the object for both the views
            var oView1 = new sap.ui.view({
              id:"page1",
              viewName:"oft.project3.view.View1",
              type: sap.ui.core.mvc.ViewType.XML
            });

            var oView2 = new sap.ui.view({
              id:"page2",
              viewName:"oft.project3.view.View2",
              type: sap.ui.core.mvc.ViewType.XML
            });
            // add these view as a part of app control
            oApp.addPage(oView1);
            oApp.addPage(oView2);

        }
    });
});