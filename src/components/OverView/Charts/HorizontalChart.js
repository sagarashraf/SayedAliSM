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
	indexAxis: "y",
	elements: {
		bar: {
			borderWidth: 2,
		},
	},
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
	},
};

const labels = ["Medicare", "R & B Inc.", "HMO"];

export const data = {
	labels,
	datasets: [
		{
			label: "Claim",
			data: [568414.1, 140635.3, 191738.14],
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Adj",
			data: [111255.67, 220813.21, 90120.21],
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(153, 106, 235, 0.5)",
		},
	],
};

export const HorizontalChart = () => {
	return <Bar options={options} data={data} />;
};
