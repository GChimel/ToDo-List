import styled from 'styled-components/native';

export const Container = styled.View`
        
    width: 100%;
    
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.L}px ; 
`;