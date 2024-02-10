import styled from "styled-components/native";
import { PlusCircle } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  min-height: 56px;
  min-width: 56px;

  background-color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const Icon = styled(PlusCircle).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))``;
