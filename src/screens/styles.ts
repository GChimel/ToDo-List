import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.L}px ; 
`;