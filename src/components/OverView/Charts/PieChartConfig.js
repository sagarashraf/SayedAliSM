import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * @author
 * @function PieChartConfig
 **/

export const PieChartConfig = (props) => {
	const data = {
		labels: ["Medicare", "HMO (R&B Inc.)", "HMO (R&B Exc.)"],
		datasets: [
			{
				label: "Net Amount",
				data: [557158.43, 140147.29, 91943.13],
				backgroundColor: [
					"rgba(235, 99, 132, 9)",
					"rgba(54, 162, 235, 9)",
					"rgba(255, 206, 86, 9)",
					"rgba(75, 192, 192, 9)",
					"rgba(153, 102, 255, 9)",
					"rgba(155, 150, 64, 9)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	};
	const options = {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				display: true,
				position: "bottom",
			},
		},
	};
	return (
		<div>
			<Doughnut options={options} style={{ height: "200px" }} data={data} />;
		</div>
	);
};
