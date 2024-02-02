import styled, {css} from 'styled-components/native';

export const Container = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.COLORS.GRAY_300
}))`
    min-width: 70%;
    min-height: 56px;

    border-width: 1px;
    border-radius: 6px;
    
    margin-right: 5px;

    padding: 10px;

    ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.L}px;
    background-color: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
    border-color: ${theme.COLORS.GRAY_600};
    `};
`; 