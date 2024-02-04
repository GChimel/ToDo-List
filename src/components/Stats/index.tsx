import { Container, Title, Counter, CounterText, TextStyleProps } from "./styled";

type Props = {
  title: string;
  counter: number;
  type?: TextStyleProps;
};

export default function Stats({ title, counter, type = 'PRIMARY' }: Props) {
  return (
    <Container>
      <Title type={type}>{title}</Title>
      <Counter>
        <CounterText>{counter}</CounterText>
      </Counter>
    </Container>
  );
}
