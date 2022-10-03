import * as React from 'react';

import {
  Container,
  Separator,
  Counter,
  LabelCreate,
  LabelComplet,
  LabelCounter,
} from './styles';

type Props = {
  create: number;
  concluded: number;
};

export function Status({create,concluded}: Props) {
  return (
    <Container>
      <Separator>
        <LabelCreate>Criadas</LabelCreate>
        <Counter>
          <LabelCounter>{!create? 0 : create}</LabelCounter>
        </Counter>
      </Separator>

      <Separator>
        <LabelComplet>Concluídas</LabelComplet>
        <Counter>
          <LabelCounter>{!concluded? 0 : concluded}</LabelCounter>
        </Counter>
      </Separator>
    </Container>
  );
}
