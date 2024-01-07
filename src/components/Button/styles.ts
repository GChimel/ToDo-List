import styled from 'styled-components/native';
import { PlusCircle } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    border-radius: 6px;

    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.BLUE_DARK : theme.COLORS.BLUE};
`;

export const PlusIcon = styled(PlusCircle).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GRAY_100
}))``;