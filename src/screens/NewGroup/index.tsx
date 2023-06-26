import { Hightlight } from "@components/Hightlight";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {
  const [group, setGroups] = useState("");
  const navigation = useNavigation();

 async function handleNew() {
   try{
    await groupCreate(group);
    navigation.navigate("players", { group });
    
   }catch(error){
  console.log(error);
   }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Hightlight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroups} />
        <Button title="Criar" style={{marginTop: 20}} onPress={handleNew} />
      </Content>
    </Container>
  );
}
