import { css } from "styled-components";
import { styled } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_500,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
