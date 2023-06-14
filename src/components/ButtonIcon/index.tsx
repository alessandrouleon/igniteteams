import { Container, Icon, ButtonIconTypeStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";
import {AntDesign} from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
icon: keyof typeof AntDesign.glyphMap;
type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({ icon, type = "PRIMARY", ...rest}: Props){
  return (
    <Container {...rest}>
  <Icon 
   name={icon} 
   size={24} 
   type={type}
    />
    </Container>
  );
}