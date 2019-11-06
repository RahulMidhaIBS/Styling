/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"CSS_Assignment/CSS_Assignment/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});