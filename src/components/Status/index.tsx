import * as React from 'react';

import {
  Container,
  Separator,
  Counter,
  LabelCreate,
  LabelComplet,
  LabelCounter,
} from './styles';

export function Status() {
  return (
    <Container>
      <Separator>
        <LabelCreate>Criadas</LabelCreate>
        <Counter>
          <LabelCounter>0</LabelCounter>
        </Counter>
      </Separator>

      <Separator>
        <LabelComplet>Concluídas</LabelComplet>
        <Counter>
          <LabelCounter>0</LabelCounter>
        </Counter>
      </Separator>
    </Container>
  );
}
