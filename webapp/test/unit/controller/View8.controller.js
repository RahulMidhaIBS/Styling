/*global QUnit*/

sap.ui.define([
	"CSS_Assignment/CSS_Assignment/controller/View8.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View8 Controller");

	QUnit.test("I should test the View8 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});