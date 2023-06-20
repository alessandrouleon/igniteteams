import { Hightlight } from "@components/Hightlight";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {

  const navigation = useNavigation();

function handleGoBack(){
   navigation.navigate('players', {group: 'react native'});
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
        <Input placeholder="Nome da turma" />
        <Button title="Criar" onPress={handleGoBack}/>
      </Content>
    </Container>
  );
}
