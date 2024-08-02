
I was trying some library to build charts, but none of those solved my problem. SO i build my own component. named as MuseChart

## Usage:
import the ./assets/components/MuseChart.js to your component folders.
And here's an example of how to use it in the react-native

```
import MuseChartComponent from "../assets/components/MuseChart";

{ ... }

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
```

## Data Format:
In my use. i use the Data just like that:
```
data = [
  { "yValues": "07/2024", "xValue": Math.random() * 18 },
  { "yValues": "06/2024", "xValue": Math.random() * 18 },
  { "yValues": "05/2024", "xValue": Math.random() * 18 },
  { "yValues": "04/2024", "xValue": Math.random() * 18 },
  { "yValues": "03/2024", "xValue": Math.random() * 18 },
  { "yValues": "05/2024", "xValue": Math.random() * 18 },
  { "yValues": "06/2024", "xValue": Math.random() * 18 },
  { "yValues": "10/2029", "xValue": Math.random() * 18 },
];

```

## Npm
In the future, i pretend to transform this component into a npm package.
