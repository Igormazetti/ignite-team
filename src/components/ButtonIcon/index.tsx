import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ type }: Props) {
  return (
    <Container>
      <Icon name="home" type={type} />
    </Container>
  );
}
