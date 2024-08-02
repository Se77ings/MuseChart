import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Text, View, Touchable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SkiaChart from "./views/SkiaChart";
import VictoryNative from "./views/VictoryNative";
import MuseChart from "./views/MuseChart";
import styles from "./assets/styles";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Opções para testar os gráficos:</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation.navigate("SkiaChart");
				}}>
				<Text>Skia Chart!</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => {
					navigation.navigate("VictoryNative");
				}}>
				<Text>Victory Native</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => {
					navigation.navigate("MuseChart");
				}}>
				<Text>Muse Chart</Text>
			</TouchableOpacity>
			<StatusBar style="inverted" />
		</View>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
				/>
				<Stack.Screen
					name="SkiaChart"
					component={SkiaChart}
				/>
				<Stack.Screen 
				name="VictoryNative"
				component={VictoryNative}/>
				<Stack.Screen 
				name="MuseChart"
				component={MuseChart}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
