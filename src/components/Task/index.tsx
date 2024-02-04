import { Container, Icon, ButtonIcon, Text, CheckBoxContainer } from './styled';
import { CheckBox } from '../../components/CheckBox'
import { CheckboxProps, CheckboxEvent } from 'expo-checkbox';

type Props = CheckboxProps &  CheckboxEvent &{
  title: string;
}

export default function Task({title, ...rest}: Props) {
  return (
    <Container>

      <CheckBoxContainer {...rest}>
      
        <CheckBox

        />
      </CheckBoxContainer>

      <Text>{title}</Text>
      
      <ButtonIcon>
        <Icon/>
      </ButtonIcon>
    </Container>
  )
}