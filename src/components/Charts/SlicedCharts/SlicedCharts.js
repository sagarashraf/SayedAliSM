import React from "react";
import { Chart } from "react-google-charts";

/**
 * @author
 * @function SlicedCharts
 **/

export const SlicedCharts = (props) => {
	const data = [
		["No of claims", "by Count"],
		["Medicare", 123],
		["Com/HMO(R&B)", 36],
		["R & B only", 26],
	];

	const options = {
		legend: true,
		pieSliceText: "value",
		legend: { position: "bottom" },
		slices: {
			1: { offset: 0.1 },
			2: { offset: 0.2 },
			3: { offset: 0.7 },
			15: { offset: 0.5 },
		},
	};
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
