import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import styles from "../assets/styles";
import MuseChartComponent from "../assets/components/MuseChart";

export default function MuseChart() {
	const [data, setData] = useState([]);

	const MaxDataCobrado = 19;
	useEffect(() => {
		setData([
			{ "yValues": "07/2024", "xValue": 9 },
			{ "yValues": "06/2024", "xValue": 10 },
			{ "yValues": "05/2024", "xValue": 11 },
			{ "yValues": "04/2024", "xValue": 14 },
			{ "yValues": "03/2024", "xValue": 10 },
			{ "yValues": "02/2024", "xValue": 12 },
			{ "yValues": "01/2024", "xValue": 8 },
			{ "yValues": "12/2023", "xValue": 6 },
			{ "yValues": "11/2023", "xValue": 9 },
			{ "yValues": "10/2023", "xValue": 5 },
			{ "yValues": "09/2023", "xValue": 7 },
		]);
	}, []);

	const borderTopRadius = 5;
	const barWidth = 35;
	const spacing = 20;
	const chartHeight = 200;
	const yLabels = 5;
	const yPrefix = "Lts";
	const widthTela = data.length * (barWidth + spacing);

	const YAxis = () => {
		const step = MaxDataCobrado / (yLabels - 1);
		const yAxisValues = Array.from({ length: yLabels }, (_, index) => index * step);

		return (
			<View style={chartStyle.yAxis}>
				{yAxisValues.map((value, index) => (
					<Text
						key={index}
						style={chartStyle.yAxisLabel}>
						{value.toFixed(0) + " " + yPrefix}
					</Text>
				))}
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={chartStyle.button}
				onPress={() => {
					setData([
						{ "yValues": "07/2024", "xValue": Math.random() * 18 },
						{ "yValues": "06/2024", "xValue": Math.random() * 18 },
						{ "yValues": "05/2024", "xValue": Math.random() * 18 },
						{ "yValues": "04/2024", "xValue": Math.random() * 18 },
						{ "yValues": "03/2024", "xValue": Math.random() * 18 },
						{ "yValues": "05/2024", "xValue": Math.random() * 18 },
						{ "yValues": "06/2024", "xValue": Math.random() * 18 },
						{ "yValues": "10/2029", "xValue": Math.random() * 18 },
					]);
				}}>
				<Text>Gerar Novos dados</Text>
			</TouchableOpacity>
			<Text>Muse Chart</Text>

			<MuseChartComponent
				data={data}
				barWidth={40}
				spacing={20}
				chartHeight={250}
				yLabelsAmount={5}
				yPrefix={"Lts"}
				yRotate={"270"}
				borderTopRadius={5}
			/>

		</View>
	);
}

const chartStyle = StyleSheet.create({
	button: {
		backgroundColor: "lightblue",
		padding: 15,
		borderRadius: 10,
		width: 200,
		alignItems: "center",
		margin: 10,
	},

	yAxis: {
		height: 200,
		justifyContent: "space-between",
		flexDirection: "column-reverse",
	},
	yAxisLabel: {
		fontSize: 12,
		textAlign: "right",
		padding: 2,
	},

	entireChart: {
		borderWidth: 1,
		// borderColor: "purple",
		flexDirection: "row",
	},

	red: {
		// borderWidth: 1,
		borderRightWidth: 1,
		// borderColor: "red",
		backgroundColor: "#ffcccb",

		width: 50,
	},

	green: {
		borderWidth: 1,
		borderColor: "green",
		backgroundColor: "lightgreen",
		flexDirection: "row",
		justifyContent: "space-between",
	},

	blue: {
		flexDirection: "row",
		alignItems: "flex-end",

		borderBottomWidth: 1,
		// borderColor: "blue",
	},
});
