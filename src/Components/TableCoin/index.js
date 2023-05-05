import { FlatList } from "react-native";
import { CoinRow } from "../CoinRow";
import { SeparatorItem } from "../SeparatorItem";

export const TableCoin = ({ coins }) => {
  return (
    <FlatList
      ItemSeparatorComponent={<SeparatorItem />}
      keyExtractor={(item) => item.name}
      data={coins}
      renderItem={({ item }) => <CoinRow coin={item} />}
    />
  );
};
