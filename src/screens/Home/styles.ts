import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const InputContainer = styled.View`
  width: 90%;

  justify-content: space-between;
  justify-content: center;

  align-items: center;
  flex-direction: row;

  bottom: 30px;
`;
