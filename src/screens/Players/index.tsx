import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Hightlight } from "@components/Hightlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players() {
  const [team, setTeam] = useState("Time A");
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
      <FlatList 
      data={["Time A", "Time B"]}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Filter title={item} 
        isActive={item === team}
        onPress={() => setTeam(item)}
        />
      )}
      horizontal
      />
     
    </Container>
  );
}
