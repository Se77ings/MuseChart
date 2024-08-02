import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { CartesianChart, Bar } from "victory-native";
import inter from "../assets/fonts/Inter-Medium.ttf";
import { useFont } from "@shopify/react-native-skia";
import styles from "../assets/styles";

export default function VictoryNative() {
	const [data, setData] = useState([]);
	const font = useFont(inter, 12);
    const [maxCobrado, setMax] = useState(14);

	const MaxDataCobrado = 19;
	useEffect(() => {
		setData([
			{ "date": "09/23", "Cobrado": 7 },
			{ "date": "10/23", "Cobrado": 5 },
			{ "date": "11/23", "Cobrado": 9 },
			{ "date": "12/23", "Cobrado": 6 },
			{ "date": "01/24", "Cobrado": 8 },
			{ "date": "02/24", "Cobrado": 12 },
			{ "date": "03/24", "Cobrado": 10 },
			{ "date": "04/24", "Cobrado": 14 },
			{ "date": "05/24", "Cobrado": 11 },
			{ "date": "06/24", "Cobrado": 10 },
			{ "date": "07/24", "Cobrado": 9 },
		]);
	}, []);

	return data != [] > 0 ? (
		<View style={[styles.container, {paddingTop: 120}]}>
			<TouchableOpacity
				style={chartStyle.button}
				onPress={() => {
					setData([
						{ "date": "09/23", "Cobrado": Math.random() * 18 },
						{ "date": "10/23", "Cobrado": Math.random() * 18 },
						{ "date": "11/23", "Cobrado": Math.random() * 18 },
						{ "date": "12/23", "Cobrado": Math.random() * 18 },
						{ "date": "01/24", "Cobrado": Math.random() * 18 },
						{ "date": "02/24", "Cobrado": Math.random() * 18 },
						{ "date": "03/24", "Cobrado": Math.random() * 18 },
						{ "date": "04/24", "Cobrado": Math.random() * 18 },
						{ "date": "05/24", "Cobrado": Math.random() * 18 },
						{ "date": "06/24", "Cobrado": Math.random() * 18 },
						{ "date": "07/24", "Cobrado": Math.random() * 18 },
					]);
                    const maxCobrado = Math.max(...data.map(item => item.Cobrado));
                    console.log(maxCobrado)
                    setMax(maxCobrado);
				}}>
				<Text>Gerar Novos dados</Text>
			</TouchableOpacity>
			<Text>Gráfico Victory:</Text>
				<ScrollView
					horizontal
					contentContainerStyle={{ height: 300 }}>
					<View style={{ height: 300, width: 600 }}>
						<CartesianChart
							data={data}
							domainPadding={{ left: 50, right: 50, top: 30, bottom: maxCobrado-1 }}
							xKey="date"
							padding={{ top: 10, left: 10, right: 10, bottom: 10 }}
							yKeys={["Cobrado"]}
							axisOptions={{ font }}>
							{({ points, chartBounds }) => (
								//👇 pass a PointsArray to the Bar component, as well as options.
								<Bar
									barCount={data.length}
									barWidth={30}
									points={points.Cobrado}
									chartBounds={chartBounds}
									color="blue"
									roundedCorners={{ topLeft: 5, topRight: 5 }}
								/>
							)}
						</CartesianChart>
					</View>
				</ScrollView>
			</View>
	
	) : (
		""
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
});
