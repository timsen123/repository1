sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                this._oModel = new ODataModel("/sap/opu/odata/sap/ZZHU_CDS_STOCK_CDS", true);
                this.getView().setModel(this._oModel);

			    this._oSmartFilterBar  = this.byId("smartFilterBar");

            }
        });
    });
