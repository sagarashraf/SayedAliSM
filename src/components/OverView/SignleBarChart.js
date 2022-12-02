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
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ChartDataLabels
);

/**
 * @author
 * @function SignleBarChart
 **/

export const SignleBarChart = (props) => {
	ChartJS.defaults.backgroundColor = "#D3D3D3";
	ChartJS.defaults.borderColor = "#D3D3D3";
	ChartJS.defaults.color = "#000000";

	const options = {
		responsive: true,
		scales: {
			x: {
				stacked: true,
				grid: {
					display: false,
				},
			},
			y: {
				stacked: true,
			},
		},

		plugins: {
			legend: {
				display: false,
				position: "top",
			},
			title: {
				display: false,
				text: "Chart.js Bar Chart",
			},
			plugins: [ChartDataLabels],
		},
	};

	const labels = ["Medicare", "Com/HMO(R&B) ", "R & B only"];

	const data = {
		labels,
		datasets: [
			{
				//borderColor: "rgba(23, 345, 0)",
				label: "no of claims",
				//borderWidth: 2,
				data: [123, 36, 26],
				backgroundColor: "rgba(116,228,162, 0.5)",
				barThickness: 50,
				borderRadius: 2,
				hoverBackgroundColor: "rgba(105, 109, 102, 0.2)",
				hoverBorderColor: "black",
				hoverBorderWidth: 1,
			},
		],
	};

	return (
		<div>
			<Bar options={options} data={data} />
		</div>
	);
};
