import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Hightlight } from "@components/Hightlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCar";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);
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
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
      <NumberOfPlayers>
        {players.length}
      </NumberOfPlayers>
      </HeaderList>
      <FlatList 
      data={players}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <PlayerCard name={item} onRemove={() => {}}/>
      )}

      ListEmptyComponent={() => (
        <ListEmpty message="Não há pessoas nesse time. "/>
      )}
     showsVerticalScrollIndicator={false}
     contentContainerStyle={[
      {paddingBottom: 100},
      players.length === 0 &&
      {flex: 1}
     ]}
      />
      <Button 
      title="Remover Turma"
      type="SECONDARY"
      />
    </Container>
  );
}
