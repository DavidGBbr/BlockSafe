import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { TouchableOpacity, Text } from "react-native";

export const ModalInfo = ({ setModalActive, coinName }) => {
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getCoin() {
    setLoading(true);
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    setCoinData(response.data);
    setLoading(false);
  }
  useEffect(() => {}, [coinName]);
  return (
    <C.Container>
      <C.OuterView>
        <C.ModalView>
          <TouchableOpacity onPress={() => setModalActive(false)}>
            <Text>Fechar modal</Text>
          </TouchableOpacity>
        </C.ModalView>
      </C.OuterView>
    </C.Container>
  );
};
