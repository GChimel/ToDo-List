import styled, {css} from 'styled-components/native';


export const Container = styled.View`
    flex: 1;

    min-height: 56px;
    max-height: 56px;
    width: 100%;

    justify-content: center;

    border-radius: 6px;
    padding: 10px;

    background-color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.M}px;
    `};
`;