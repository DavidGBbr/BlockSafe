import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #222227;
`;

export const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const InfoCoin = styled.View`
  flex: 1;
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const CoinName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffc52c;
  margin-bottom: 20px;
`;

export const RowInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Paragraph = styled.Text`
  color: #fff;
  font-size: 20px;
  padding-bottom: 4px;
`;
