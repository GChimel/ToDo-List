import styled, {css} from 'styled-components/native'
import { Trash } from 'phosphor-react-native';

export const Container = styled.View`

  height: 80px;
  max-width: 320px;
  min-width: 320px;

  justify-content: center;
  align-items: center;
  
  flex-direction: row;
  justify-content: space-between;

  border-width: 1px;
  border-radius: 6px;
  
  ${({theme}) => css`
    background-color: ${ theme.COLORS.GRAY_500};
    border-color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Text = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  width: 70%;
  margin: 10px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  
  margin-right: 15px;
`;

export const CheckBoxContainer = styled.View`
  margin-left: 15px;
`;

export const Icon = styled(Trash).attrs(({theme}) => ({
  size: 28,
  color: theme.COLORS.GRAY_300
}))``;