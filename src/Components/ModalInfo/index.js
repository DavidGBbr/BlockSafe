import React from "react";
import * as C from "./styles";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HistoryChart } from "../HistoryChart";
import { useFetch } from "../../Hooks/useFetch";
import { Loader } from "../../Utils/Loader";

export const ModalInfo = ({ setModalActive, coinName }) => {
  const { response, loading } = useFetch(
    `https://api.coingecko.com/api/v3/coins/${coinName}`
  );

  return (
    <C.Container>
      <C.Header>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          {response?.symbol?.toUpperCase()}
        </Text>
        <TouchableOpacity onPress={() => setModalActive(false)}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </C.Header>
      {loading ? (
        <C.InfoCoin style={{ justifyContent: "center", alignItems: "center" }}>
          <Loader />
        </C.InfoCoin>
      ) : (
        <C.InfoCoin>
          <C.CoinName>{response?.name}</C.CoinName>
          <C.RowInfo>
            <C.Paragraph>Preço atual:</C.Paragraph>
            <C.Paragraph style={{ color: "#8cc63f" }}>
              {response?.market_data?.current_price.brl.toLocaleString(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                }
              )}
            </C.Paragraph>
          </C.RowInfo>
          <C.RowInfo>
            <C.Paragraph>Variação percentual(24h):</C.Paragraph>
            <C.Paragraph
              style={{
                color:
                  response?.market_data?.price_change_percentage_24h > 0
                    ? "#8cc63f"
                    : "#e43c30",
              }}
            >
              {response?.market_data?.price_change_percentage_24h?.toFixed(2)}%
            </C.Paragraph>
          </C.RowInfo>
          {/* <HistoryChart /> */}
        </C.InfoCoin>
      )}
    </C.Container>
  );
};
