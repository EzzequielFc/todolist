import * as React from 'react';

import {Container, Separator, Counter, Text, TextCounter} from './styles';

export function Status() {
  return (
    <Container>
      <Separator>
        <Text>Criadas</Text>
        <Counter>
          <TextCounter>0</TextCounter>
        </Counter>
      </Separator>

      <Separator>
        <Text>Concluídas</Text>
        <Counter>
          <TextCounter>0</TextCounter>
        </Counter>
      </Separator>
    </Container>
  );
}
