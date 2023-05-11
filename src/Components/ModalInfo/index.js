import React from "react";
import * as C from "./styles";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CoinGraphic } from "../CoinGraphic";

export const ModalInfo = ({ setModalActive, data }) => {
  return (
    <C.Container>
      <C.Header>
        <C.Paragraph style={{ fontSize: 16 }}>
          {data.symbol.toUpperCase()}
        </C.Paragraph>
        <TouchableOpacity onPress={() => setModalActive(false)}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </C.Header>
      <C.InfoCoin>
        <C.CoinName>{data?.name}</C.CoinName>
        <C.RowInfo>
          <C.Paragraph>Preço atual:</C.Paragraph>
          <C.Paragraph style={{ color: "#8cc63f" }}>
            {data.current_price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </C.Paragraph>
        </C.RowInfo>
        <C.RowInfo>
          <C.Paragraph>Variação percentual(24h):</C.Paragraph>
          <C.Paragraph
            style={{
              color:
                data.price_change_percentage_24h > 0 ? "#8cc63f" : "#e43c30",
            }}
          >
            {data.price_change_percentage_24h.toFixed(2)}%
          </C.Paragraph>
        </C.RowInfo>
        <CoinGraphic data={data} sparkline={data.sparkline_in_7d.price} />
      </C.InfoCoin>
    </C.Container>
  );
};
