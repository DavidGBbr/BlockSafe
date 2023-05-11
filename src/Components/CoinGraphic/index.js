import moment from "moment/moment";
import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import * as C from "./styles";

export const CoinGraphic = ({ data, sparkline }) => {
  const times = sparkline.map((item) => item.x);
  const prices = sparkline.map((item) => item.y);

  const dataLabels = times.reduce((acc, timestamp) => {
    const date = moment.unix(timestamp);
    const formattedDate = `Dia ${date.format("D")}`;
    if (!acc.includes(formattedDate)) {
      acc.push(formattedDate);
    }
    return acc;
  }, []);

  const reducedPrices = prices.reduce((acc, price, index) => {
    const timestamp = times[index];
    const date = moment.unix(timestamp);
    const formattedDate = `Dia ${date.format("D")}`;
    if (!acc[formattedDate]) {
      acc[formattedDate] = {
        value: 0,
        count: 0,
      };
    }
    acc[formattedDate].value += price;
    acc[formattedDate].count++;
    return acc;
  }, {});

  const chartData = {
    labels: dataLabels.slice(-7),
    datasets: [
      {
        data: dataLabels
          .slice(-7)
          .map((label) =>
            reducedPrices[label]
              ? reducedPrices[label].value / reducedPrices[label].count
              : 0
          ),
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#1c1c1c",
    backgroundGradientTo: "#1c1c1c",
    color: (opacity = 1) => `rgba(228, 193, 49, ${opacity})`,
    strokeWidth: 3,
    useShadowColorFromDataset: true,
    propsForDots: {
      r: "3",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
    propsForLabels: {
      fontSize: 14,
      fontWeight: "bold",
      fill: "#fff",
    },
    propsForVerticalLabels: {
      fontSize: 14,
      fontWeight: "bold",
      fill: "#fff",
    },
  };

  return (
    <C.Container>
      <Text style={{ fontSize: 26, color: "#fff" }}>
        Gráfico em USD {data.symbol}
      </Text>

      <View>
        <LineChart
          data={chartData}
          width={Dimensions.get("window").width - 40}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </C.Container>
  );
};
