import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import React from "react";
import { Highlight } from "@components/Highlight";

export function Groups() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
    </Container>
  );
}
