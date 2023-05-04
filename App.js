import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TableCoin } from "./src/Components/TableCoin";

export default function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    );
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>Block Safe</Text>
      <TableCoin coins={data} />
    </View>
  );
}
