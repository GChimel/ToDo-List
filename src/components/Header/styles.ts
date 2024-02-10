import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 200px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Logo = styled.Image`
  width: 230px;
  height: 230px;
`;
