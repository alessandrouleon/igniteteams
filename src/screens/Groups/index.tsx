import { Header } from "@components/Header";
import { Container } from "./styles";
import { Hightlight } from "@components/Hightlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />
      <Hightlight title="Turma" subtitle="Jogue com a sua turma" />
      <GroupCard title="Galera do Ignite" />
    </Container>
  );
}
