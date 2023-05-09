import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { TouchableOpacity, View, Text } from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { HistoryChart } from "../HistoryChart";

export const ModalInfo = ({ setModalActive, coinName }) => {
  const [coinData, setCoinData] = useState([]);

  async function getCoin(id) {
    if (id) {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      setCoinData(response.data);
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
        <C.Paragraph>{coinData.name}</C.Paragraph>
        <C.Paragraph>
          Data de lançamento:
          {coinData.genesis_date?.split("-").reverse().join("/")}
        </C.Paragraph>
        <C.Paragraph>
          Preço:{" "}
          {coinData.market_data?.current_price.brl.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </C.Paragraph>
        <C.Paragraph>Variação percentual:(high_24h e low_24h)</C.Paragraph>
        <C.Paragraph>Volume nas últimas 24hrs:</C.Paragraph>
        {/* <HistoryChart /> */}
      </C.InfoCoin>
    </C.Container>
  );
};
