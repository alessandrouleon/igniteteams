import { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { TextInputProps } from "react-native";
import { Container } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  const themeContext = useContext(ThemeContext);

  return (
    <Container 
    placeholderTextColor={themeContext?.COLORS.GRAY_300}
     {...rest} 
     />
  );
}
