import React from 'react';
import {Container, Logo, SubTitle, Title} from './styles';

import ClipBoard from '../../../assets/images/clipboard/clipboard.png';

export function Empyt() {
  return (
    <Container>
      <Logo source={ClipBoard} />
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <SubTitle>Crie tarefas e organize seus itens a fazer</SubTitle>
    </Container>
  );
}
