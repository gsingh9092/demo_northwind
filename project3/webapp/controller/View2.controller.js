sap.ui.define([
    "oft/project3/controller/BaseController" // <-- Import YOUR custom BaseController
], function (BaseController) {
    "use strict";

    return BaseController.extend("oft.project3.controller.View2", {
        onInit: function () {
            // App specific logic
            // You can call BaseController methods using this.baseMethod() if needed
        },
        onBack: function(){
            // step1 get the app object from base class method
           
            // navigate to view1 - idView1
            this.getAppObject().to("idView1");
        }
    });
});