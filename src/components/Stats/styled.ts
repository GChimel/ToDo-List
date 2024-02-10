import styled, { css } from "styled-components/native";

export type TextStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: TextStyleProps;
};

export const Container = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text<Props>`
  color: ${({ theme, type }) => (type === "PRIMARY" ? theme.COLORS.GREEN : theme.COLORS.RED)};

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Counter = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  min-width: 30px;
  min-height: 20px;
  border-radius: 40px;

  margin-left: 5px;

  justify-content: center;
  align-items: center;
`;

export const CounterText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.L}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;