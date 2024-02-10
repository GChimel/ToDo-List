import { TouchableOpacityProps } from "react-native";
import { Container, Icon, ButtonIcon, Text, CheckBoxContainer, CheckBoxContent } from "./styled";
import { CheckboxProps } from "expo-checkbox";

type Props = TouchableOpacityProps & {
  title: string;
  checkbox: CheckboxProps;
};

export function Task({ title, checkbox, ...rest }: Props) {
  return (
    <Container>
      <CheckBoxContainer>
        <CheckBoxContent {...checkbox} />
      </CheckBoxContainer>

      <Text>{title}</Text>

      <ButtonIcon {...rest}>
        <Icon />
      </ButtonIcon>
    </Container>
  );
}
