sap.ui.define(["fiori/manage/purchase/documents/purchasedocumentslrp/model/formatter"],
	function (formatter) {
		"use strict";

		QUnit.module("Calculate Criticality");

		QUnit.test("If the overall price is less than or equal to 1000 the criticality is formatted to Good", function (assert) {
			assert.strictEqual(formatter.calculateCriticality(1000), "Good");
		});

		QUnit.test("If the overall price (1001) is greather than 1000 and less than 5000 the criticality is formatted to Critical", function (
			assert) {
			assert.strictEqual(formatter.calculateCriticality(1001), "Critical");
		});

		QUnit.test("If the overall price (4999) is greather than 1000 and less than 5000 the criticality is formatted to Critical", function (
			assert) {
			assert.strictEqual(formatter.calculateCriticality(4999), "Critical");
		});

		QUnit.test("If the overall price is greather than or euqal to 5000 the criticality is formatted to Error", function (assert) {
			assert.strictEqual(formatter.calculateCriticality(5000), "Error");
		});

		QUnit.module("Calculate Percentage");

		QUnit.test("With an overall price of 10000 and a total budget of 10000 the budget utilization should be 100%", function (
			assert) {
			assert.strictEqual(formatter.calculatePercentage(10000), 100);
		});

		QUnit.test("With an overall price of 0 and a total budget of 10000 the budget utilization should be 100%", function (
			assert) {
			assert.strictEqual(formatter.calculatePercentage(0), 0);
		});

		QUnit.test("With an overall price of 5050 and a total budget of 10000 the budget utilization should be 51%", function (
			assert) {
			assert.strictEqual(formatter.calculatePercentage(5050), 51);
		});

		QUnit.test("With an overall price of 5049 and a total budget of 10000 the budget utilization should be 50%", function (
			assert) {
			assert.strictEqual(formatter.calculatePercentage(5049), 50);
		});

	});