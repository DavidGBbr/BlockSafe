import * as C from "./styles";
import { Text } from "react-native";

export const CoinRow = ({ coin }) => {
  return (
    <C.TouchableOpacity>
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
