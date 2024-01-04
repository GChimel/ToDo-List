import styled from 'styled-components/native';

export const Container = styled.View`    
    flex: 1;
    
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const InputContainer = styled.View`
    justify-content: center;
    bottom: 30px;
`;