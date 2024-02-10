import { Container, Icon } from "./styles";
import { TouchableHighlightProps } from "react-native";

type Props = TouchableHighlightProps;

export function PlusButton({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
    </Container>
  );
}
