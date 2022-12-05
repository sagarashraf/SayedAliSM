import React from "react";
import { Chart } from "react-google-charts";

const data = [
	["Category", "Medicare", "HMO (R&B Inc.)", "HMO (R&B Exc.)"],
	["Medicare", 568414.1, 11255.67, 557158.43],
	["Adj/Withhold", 140635.3, 20813.21, 140147.29],
	["Net Amount", 91738.14, 20120.21, 91943.13],
];

const options = {
	chart: {
		title: "Collection Report",
		subtitle: "Summary of the payers Finance",
	},
	axes: {
		y: {
			all: {
				format: {
					pattern: "decimal",
				},
			},
			distance: { label: "parsecs" }, // Left y-axis.
			brightness: { side: "right", label: "apparent magnitude" }, // Right y-axis.
		},
	},

	annotations: {
		alwaysOutside: true,
	},
};

export const MultiBarChart = () => {
	return (
		<Chart
			legendToggle
			chartType='Bar'
			width='100%'
			height='300px'
			data={data}
			options={options}
		/>
	);
};
