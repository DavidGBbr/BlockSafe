import axios from "axios";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { TableCoin } from "./src/Components/TableCoin";
import * as C from "./styles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [data, setData] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");

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
    <C.SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <C.SearchArea>
        <C.TextInput
          placeholder="Pesquise sua Cripto"
          placeholderTextColor="#888"
          value={searchCoin}
          onChangeText={(t) => setSearchCoin(t)}
        />
        <C.OrderButton>
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={32}
            color="#888"
          />
        </C.OrderButton>
      </C.SearchArea>
      <TableCoin coins={data} />
      <ExpoStatusBar style="light" />
    </C.SafeAreaView>
  );
}
