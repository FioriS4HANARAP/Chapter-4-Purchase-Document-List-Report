sap.ui.define([], function () {
	"use strict";
	var TOTAL_BUDGET = 10000;
	return {
		calculatePercentage: function (nOverallPrice) {
			var percentage = Math.round((nOverallPrice / TOTAL_BUDGET) * 100);
			return percentage > 100 ? 100 : percentage; 
			
		},
		calculateCriticality: function (nOverallPrice) {
			if (nOverallPrice <= 1000) {
				return "Good";
			} else if (nOverallPrice > 1000 && nOverallPrice < 5000) {
				return "Critical";
			} else {
				return "Error";
			}
		}
	};
});