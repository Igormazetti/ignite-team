import { TextInputProps } from "react-native";
import { InputElement } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  return <InputElement {...rest} />;
}
