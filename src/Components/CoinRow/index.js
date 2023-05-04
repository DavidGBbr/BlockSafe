import * as C from "./styles";
import { Text } from "react-native";

export const CoinRow = ({ coin }) => {
  return <Text>{coin.name}</Text>;
};
