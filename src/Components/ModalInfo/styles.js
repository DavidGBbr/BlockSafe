import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background: blue;
`;

export const OuterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalView = styled.View`
  background: white;
  border-radius: 30px;
  padding: 35px;
  width: 200px;
  align-items: center;
`;
