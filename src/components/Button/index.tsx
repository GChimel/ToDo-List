import { TouchableOpacityProps } from 'react-native';
import { Container, PlusIcon, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
    type?: ButtonTypeStyleProps;
}

export default function Button({type = 'PRIMARY'}: Props) {
    return(
        <Container
            type={type}
        >
            <PlusIcon/>
        </Container>
    );
}