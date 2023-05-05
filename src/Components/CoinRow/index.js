import { useState } from "react";
import * as C from "./styles";
import { Text } from "react-native";
import axios from "axios";

export const CoinRow = ({ coin }) => {
  const [coinName, setCoinName] = useState();

  const getCoin = async (id) => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    setCoinName(response.data);
    console.log(response.data);
  };

  return (
    <C.TouchableOpacity onPress={() => getCoin(coin.id)}>
      <C.Image source={{ uri: coin.image }} />
      <C.CoinInfo>
        <C.CoinName>{coin.name}</C.CoinName>
        <C.Price>
          {coin.current_price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </C.Price>
      </C.CoinInfo>
    </C.TouchableOpacity>
  );
};
