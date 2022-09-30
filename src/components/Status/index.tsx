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
};

export function Status({create}: Props) {
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
          <LabelCounter>0</LabelCounter>
        </Counter>
      </Separator>
    </Container>
  );
}
