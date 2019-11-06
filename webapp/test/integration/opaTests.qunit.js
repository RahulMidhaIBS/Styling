/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"CSS_Assignment/CSS_Assignment/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});