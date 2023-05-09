import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart } from "react-native-chart-kit";
import moment from "moment";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export const HistoryChart = ({ coin }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=brl&days=7`
    );
    setData(
      response.data.prices.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
      }))
    );
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  const labels = data?.map((price) => moment(price.x).format("D MMM"));
  const values = data?.map((price) => price.y);

  return (
    <LineChart
      data={{
        labels,
        datasets: [
          {
            data: values,
          },
        ],
      }}
      width={400}
      height={220}
      chartConfig={{
        backgroundColor: "#FFFFFF",
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientTo: "#FFFFFF",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      bezier
      style={styles.chart}
    />
  );
};
