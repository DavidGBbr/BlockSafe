import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { TouchableOpacity, Text } from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

export const ModalInfo = ({ setModalActive, coinName }) => {
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getCoin(id) {
    if (id) {
      setLoading(true);
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      setCoinData(response.data);
      console.log(coinData);
      setLoading(false);
    }
  }
  useEffect(() => {
    getCoin(coinName);
  }, [coinName]);
  return (
    <C.Container>
      <C.Header>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          {coinData.symbol?.toUpperCase()}
        </Text>
        <TouchableOpacity onPress={() => setModalActive(false)}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </C.Header>
      <C.InfoCoin>
        <Text style={{ color: "#fff", fontSize: 26 }}>
          (Nome da criptomoeda)
        </Text>
        <Text style={{ color: "#fff", fontSize: 26 }}>Data de lançamento:</Text>
        <Text style={{ color: "#fff", fontSize: 26 }}>Preço:</Text>
        <Text style={{ color: "#fff", fontSize: 26 }}>
          Variação percentual:(high_24h e low_24h)
        </Text>
        <Text style={{ color: "#fff", fontSize: 26 }}>
          Volume nas últimas 24hrs:
        </Text>
      </C.InfoCoin>
    </C.Container>
  );
};
