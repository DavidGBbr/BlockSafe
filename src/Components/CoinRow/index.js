import { useState } from "react";
import * as C from "./styles";
import { Modal, View } from "react-native";
import { ModalInfo } from "../ModalInfo";

export const CoinRow = ({ coin }) => {
  const [coinName, setCoinName] = useState();
  const [modalActive, setModalActive] = useState(false);

  const getCoin = async (id) => {
    setModalActive(true);
    setCoinName(id);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalActive}
        onRequestClose={() => setModalActive(false)}
      >
        <ModalInfo setModalActive={setModalActive} coinName={coinName} />
      </Modal>
      <C.TouchableOpacity onPress={() => getCoin(coin.id)}>
        <C.Image source={{ uri: coin.image }} alt={coin.name} />
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
    </View>
  );
};
