import styled from "styled-components/native";

export const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 0px 20px;
  padding: 20px 0px;
  color: #fff;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const CoinInfo = styled.View`
  margin-left: 15px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const CoinName = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Price = styled.Text`
  color: #8cc63f;
`;
