import { Container, Title, Counter, CounterText, TextStyleProps } from "./styled";

type Props = TextStyleProps & {
  title: string;
  // counter: number;
  style?: TextStyleProps;
};

export default function Stats({title, style = 'PRIMARY'}: Props) {
  return (
    <Container>
      <Title type={style}>{title}</Title>
      <Counter>
        <CounterText>10</CounterText>
      </Counter>
    </Container>
  );
}
