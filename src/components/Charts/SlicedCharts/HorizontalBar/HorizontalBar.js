import React from "react";
import { Chart } from "react-google-charts";

/**
 * @author
 * @function HorizontalBar
 **/

export const HorizontalBar = (props) => {
	const labels = ["Medicare", "R & B Inc.", "HMO"];

	const data = [
		["City", "Claim Amount", "Adj/ Withhold"],
		["Medicare", 568414.1, 111255.67],
		["R & B Inc.", 140635.3, 220813.21],
		["HMO", 191738.14, 90120.21],
	];

	const options = {
		legend: { position: "bottom" },
		chartArea: { width: "70%" },
		colors: ["#b0120a", "#ffab91"],
		hAxis: {
			title: "Amount",
			minValue: 0,
		},
		vAxis: {
			title: "Payer",
		},
	};
	return (
		<Chart
			chartType='BarChart'
			width='100%'
			height='100%'
			data={data}
			options={options}
		/>
	);
};
