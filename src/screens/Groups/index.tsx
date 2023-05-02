import { Header } from "@components/Header";
import { Container } from "./styles";
import React from "react";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard title="Galera do Ignite" onPress={() => console.log("alou")} />
    </Container>
  );
}
