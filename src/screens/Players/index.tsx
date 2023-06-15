import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Hightlight } from "@components/Hightlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Hightlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe o time"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="addfile" />
      </Form>
      <Filter title="Turma A" isActive />
    </Container>
  );
}
