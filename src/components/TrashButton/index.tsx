import { TouchableOpacityProps } from 'react-native';
import { Container, TrashIcon, ButtonTypeStyleProps, IconTypeStyleProps} from './styles';

type Props = TouchableOpacityProps & {
    type?: ButtonTypeStyleProps;
}

export default function TrashButton({type = 'PRIMARY'}: Props) {
    return(
        <Container
            type={type}
        >
            <TrashIcon/>
        </Container>
    );
}