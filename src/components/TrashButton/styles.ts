import styled from 'styled-components/native';
import { Trash } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';
export type IconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`

    width: 56px;
    height: 56px;

    border-radius: 6px;

    justify-content: center;
    align-items: center;

    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_400};

`;

export const TrashIcon = styled(Trash).attrs<Props>(({theme, type}) => ({

    color: theme.COLORS.GRAY_100

}))``;