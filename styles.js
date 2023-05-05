import styled from "styled-components/native";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #242425;
`;

export const SearchArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 50px;
  background: #363636;
  margin: 24px;
  font-size: 19px;
  padding: 0px 15px;
  color: #fff;
  border-radius: 10px;
`;

export const OrderButton = styled.TouchableOpacity`
  width: 32px;
  margin-right: 30px;
`;
