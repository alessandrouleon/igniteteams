import { Header } from "@components/Header";
import { Container } from "./styles";
import { Hightlight } from "@components/Hightlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Grupo de dev"]);
  return (
    <Container>
      <Header />
      <Hightlight title="Turma" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={[ {paddingBottom: 100}, groups.length === 0 && { flex: 1 }]}
        ListEmptyComponent={() => (
          <ListEmpty message="Não existe grupo cadastrado..." />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Criar nova turma" />
    </Container>
  );
}
