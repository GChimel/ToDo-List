import styled from 'styled-components/native';
import { PlusCircle } from 'phosphor-react-native';
import { TouchableHighlight } from 'react-native';

export const Container = styled(TouchableHighlight)`
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
`;

export const Icon = styled(PlusCircle).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GRAY_100
}))``;