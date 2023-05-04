import { Text, ScrollView, FlatList } from "react-native";
import * as C from "./styles";
import { CoinRow } from "../CoinRow";

export const TableCoin = ({ coins }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.name}
      data={coins}
      renderItem={({ item }) => <CoinRow coin={item} />}
    />
  );
};
