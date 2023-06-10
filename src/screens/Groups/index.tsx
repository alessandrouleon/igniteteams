import { Header } from "@components/Header";
import { Container } from "./styles";
import { Hightlight } from "@components/Hightlight";

export function Groups() {
  return (
    <Container>
      <Header />
      <Hightlight title="Turma" subtitle="joge com a sua turma" />
    </Container>
  );
}
