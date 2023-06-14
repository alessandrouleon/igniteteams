import { styled } from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.COLORS.GRAY_600};
padding: 24px;
`;

export const Form = styled.View`
width: 100%;
min-height: 56px;
max-height: 56px;
justify-content: center;
border-radius: 6px;
flex-direction: row;
background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;