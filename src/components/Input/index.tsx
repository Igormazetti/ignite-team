import { TextInputProps } from "react-native";
import { InputElement } from "./styles";
import { useTheme } from "styled-components/native";

export function Input({ ...rest }: TextInputProps) {
  const theme = useTheme();

  return (
    <InputElement placeholderTextColor={theme.COLORS.GRAY_300} {...rest} />
  );
}
