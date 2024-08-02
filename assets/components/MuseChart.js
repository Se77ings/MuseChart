import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";

export default function MuseChartComponent({ data, barWidth, spacing, chartHeight, yLabelsAmount, yPrefix, yRotate, borderTopRadius }) {
	barWidth == null ? (barWidth = 35) : (barWidth = barWidth);
	spacing == null ? (spacing = 15) : (spacing = spacing);
	chartHeight == null ? (chartHeight = 200) : (chartHeight = chartHeight);
	yLabelsAmount == null ? (yLabelsAmount = 5) : (yLabelsAmount = yLabelsAmount);
	yPrefix == null ? (yPrefix = "") : (yPrefix = yPrefix);
	borderTopRadius == null ? (borderTopRadius = 5) : (borderTopRadius = borderTopRadius);
	yRotate == null ? (yRotate = 0) : (yRotate = yRotate);
	var MaxXValue = 0;

	for (let i = 0; i < data.length; i++) {
		if (data[i].xValue > MaxXValue) {
			MaxXValue = data[i].xValue;
		}
	}

	MaxXValue = MaxXValue + 5;

	const widthTela = data.length * (barWidth + spacing);
	const [showLabel, setShowLabel] = useState([]);

	const YAxis = () => {
		const step = MaxXValue / (yLabelsAmount - 1);
		const yAxisValues = Array.from({ length: yLabelsAmount }, (_, index) => index * step);

		return (
			<View style={[chartStyle.yAxis, { height: chartHeight }]}>
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

	function toggleLabels(item) {
		if (showLabel.includes(item)) {
			setShowLabel(showLabel.filter((label) => label !== item));
		} else {
			setShowLabel([...showLabel, item]);
		}
	}
	return (
		<View style={styles.container}>
			<View style={chartStyle.entireChart}>
				<View style={chartStyle.red}>
					<YAxis />
				</View>

				<ScrollView horizontal={true}>
					<View style={{ width: widthTela }}>
						<View style={[chartStyle.blue, { height: chartHeight }]}>
							{data.map((item, index) => {
								return (
									//barra
									<Pressable
										key={index}
										onPress={() => {
											toggleLabels(item);
										}}>
										<View style={{ justifyContent: "space-between", marginHorizontal: spacing / 2, width: barWidth, height: chartHeight * (item.xValue / MaxXValue) - 3, alignItems: "center", borderColor: "blue", backgroundColor: "blue", borderTopLeftRadius: borderTopRadius, borderTopRightRadius: borderTopRadius }}>
											{showLabel.includes(item) && <Text style={{ color: "white" }}>{item.xValue.toFixed(0)}</Text>}
										</View>
									</Pressable>
								);
							})}
						</View>
						<View style={[chartStyle.green, { width: data.length * (barWidth + spacing) }]}>
							{data.map((item, index) => {
								var strLN = item.yValues;
								return (
									<View
										key={index}
										style={{ justifyContent: "center", marginHorizontal: spacing / 2, width: barWidth, alignItems: "center", height: strLN.length * 9 }}>
										<Text style={{ width: strLN.length * 8, transform: [{ rotate: yRotate + "deg" }] }}>{strLN}</Text>
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
	yAxis: {
		justifyContent: "space-between",
		flexDirection: "column-reverse",
	},
	yAxisLabel: {
		fontSize: 13,
		textAlign: "right",
		paddingRight: 2,
	},

	entireChart: {
		flexDirection: "row",
	},

	red: {
		borderRightWidth: 1,
		width: 50,
	},

	green: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: 10,
	},

	blue: {
		flexDirection: "row",
		alignItems: "flex-end",
		borderBottomWidth: 1,
		marginBottom: 1,
	},
});
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
