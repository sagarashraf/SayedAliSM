import React from "react";
import { Chart } from "react-google-charts";

const data = [
	["Amount", "Payer"],
	["Medicare", 557158.43],
	["HMO (R&B Inc.)", 140147.29],
	["HMO (R&B Exc.)", 91943.13],
];

const options = {
	chart: {
		title: "Collection Report",
		subtitle: "Summary of the payers Finance",
	},
	is3D: true,
	pieSliceText: "value",
	legend: { position: "bottom" },
	slices: {
		1: { offset: 0.0 },
		2: { offset: 0.1 },
		3: { offset: 0.1 },
		15: { offset: 0.1 },
	},
};

export const ThreeDPieChart = () => {
	return (
		<Chart
			chartType='PieChart'
			data={data}
			options={options}
			width={"100%"}
			height={"100%"}
		/>
	);
};
