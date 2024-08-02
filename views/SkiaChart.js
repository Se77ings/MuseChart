import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Canvas, RoundedRect } from "@shopify/react-native-skia";
import styles from "../assets/styles";

export default function SkiaChart() {
	const [data, setData] = useState([]);

	const MaxDataCobrado = 19;
	useEffect(() => {
		setData([
			{ "Mes": "07", "Ano": 2024, "Cobrado": 9 },
			{ "Mes": "06", "Ano": 2024, "Cobrado": 10 },
			{ "Mes": "05", "Ano": 2024, "Cobrado": 11 },
			{ "Mes": "04", "Ano": 2024, "Cobrado": 14 },
			{ "Mes": "03", "Ano": 2024, "Cobrado": 10 },
			{ "Mes": "02", "Ano": 2024, "Cobrado": 12 },
			{ "Mes": "01", "Ano": 2024, "Cobrado": 8 },
			{ "Mes": "12", "Ano": 2023, "Cobrado": 6 },
			{ "Mes": "11", "Ano": 2023, "Cobrado": 9 },
			{ "Mes": "10", "Ano": 2023, "Cobrado": 5 },
			{ "Mes": "09", "Ano": 2023, "Cobrado": 7 },
		]);
	}, []);

	const barWidth = 30;
	const spacing = 15;
	const chartHeight = 200;
	const yLabels = 5;

	function rrct(x, y, width, height, r) {
		return {
			rect: { x, y, width, height },
			topLeft: { x: r, y: r },
			topRight: { x: r, y: r },
			bottomRight: { x: 0, y: 0 },
			bottomLeft: { x: 0, y: 0 },
		};
	}

	const YAxis = () => {
		const step = MaxDataCobrado / (yLabels - 1);
		const yAxisValues = Array.from({ length: yLabels }, (_, index) => index * step);

		return (
			<View style={chartStyle.yAxis}>
				{yAxisValues.map((value, index) => (
					<Text
						key={index}
						style={chartStyle.yAxisLabel}>
						{value.toFixed(0)} Lts
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
						{ "Mes": "07", "Ano": 2024, "Cobrado": Math.random() * 18 },
						{ "Mes": "06", "Ano": 2024, "Cobrado": Math.random() * 18 },
						{ "Mes": "05", "Ano": 2024, "Cobrado": Math.random() * 18 },
						{ "Mes": "04", "Ano": 2024, "Cobrado": Math.random() * 18 },
						{ "Mes": "03", "Ano": 2024, "Cobrado": Math.random() * 18 },
						{ "Mes": "02", "Ano": 2024, "Cobrado": Math.random() * 18 },
						{ "Mes": "01", "Ano": 2024, "Cobrado": Math.random() * 18 },
						{ "Mes": "12", "Ano": 2023, "Cobrado": Math.random() * 18 },
						{ "Mes": "11", "Ano": 2023, "Cobrado": Math.random() * 18 },
						{ "Mes": "10", "Ano": 2023, "Cobrado": Math.random() * 18 },
						{ "Mes": "09", "Ano": 2023, "Cobrado": Math.random() * 18 },
					]);
				}}>
				<Text>Gerar Novos dados</Text>
			</TouchableOpacity>
			<Text>Skia Chart</Text>
			<View style={chartStyle.entireChart}>
				<View style={chartStyle.red}>
					<YAxis />
				</View>
				<ScrollView horizontal={true}>
					<View style>
						<View style={[chartStyle.blue, { paddingLeft: spacing }]}>
							<Canvas style={{ width: data.length * (barWidth + spacing), height: chartHeight }}>
								{data.map((item, index) => {
									const barHeight = (item.Cobrado / MaxDataCobrado) * chartHeight; // Assumindo que o valor máximo de "Cobrado" é 20
									return (
										<RoundedRect
											key={index}
											color={"blue"}
											rect={rrct(index * (barWidth + spacing), chartHeight - barHeight, barWidth, barHeight, 3)}
											onPress={() => console.log("Pressed")}
										/>
									);
								})}
							</Canvas>
						</View>
						<View style={[chartStyle.green, { marginLeft: 15, width: data.length * (barWidth + spacing) - 15, height: 70, paddingBottom: 10 }]}>
							{data.map((item, index) => {
								return (
									<View
										key={index}
										style={{ justifyContent: "space-between", width: barWidth, alignItems: "center", justifyContent: "center" }}>
										<Text style={{ width: 70, transform: [{ rotate: "270deg" }] }}>{item.Mes + "/" + item.Ano}</Text>
									</View>
								);
							})}
						</View>
					</View>
				</ScrollView>
			</View>
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
		// borderWidth: 1,
		// borderColor: "green",
		// backgroundColor: "lightgreen",
		height: 70,
		flexDirection: "row",
		justifyContent: "space-between",
		height: 80,
	},
	blue: {
		borderBottomWidth: 1,
		// borderColor: "blue",
	},
});
