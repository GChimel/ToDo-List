import styled, {css} from 'styled-components/native';

export const Container = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.COLORS.GRAY_300
}))`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    min-width: 290px;
    max-width: 290px;

    border-width: 1px;
    border-radius: 6px;
    padding: 16px;

    ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.L}px;
    background-color: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
    border-color: ${theme.COLORS.GRAY_600};
    `};
`; 