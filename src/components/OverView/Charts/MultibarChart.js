import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: false,
			text: "Chart.js Bar Chart",
		},
	},
};

const labels = ["Medicare", "HMO (R&B Inc.)", "HMO (R&B Exc.)"];

const data = {
	labels,
	datasets: [
		// {
		// 	label: "No# of Claims",
		// 	data: [123, 36, 26],
		// 	backgroundColor: "rgba(255, 199, 132, 0.5)",
		// },
		{
			label: "Claim Amount",
			data: [568414.1, 140635.3, 91738.14],
			backgroundColor: "rgba(153, 162, 235, 0.5)",
		},
		{
			label: "Adj/Withhold",
			data: [11255.67, 20813.21, 20120.21],
			backgroundColor: "rgba(255, 199, 132, 0.5)",
		},
		{
			label: "Net Amount",
			data: [557158.43, 140147.29, 91943.13],
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

export const MultibarChart = () => {
	return <Bar options={options} data={data} />;
};
