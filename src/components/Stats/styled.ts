import styled, {css} from 'styled-components/native';

export type TextStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: TextStyleProps;
}

export const Container = styled.View`
  width: 100%;

  flex-direction: row;

`;

export const Title = styled.Text<Props>`

  color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.RED : theme.COLORS.GREEN};

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Counter = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_400};
  
  min-width: 30px;
  border-radius: 40px;
  max-width: 20px;

  justify-content: center;
  align-items: center;
`;

export const CounterText = styled.Text`

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.L}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`