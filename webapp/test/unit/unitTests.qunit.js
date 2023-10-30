/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"stock_status/stock_status/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
