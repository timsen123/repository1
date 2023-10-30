/*global QUnit*/

sap.ui.define([
	"stock_status/stock_status/controller/Master1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Master1 Controller");

	QUnit.test("I should test the Master1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
