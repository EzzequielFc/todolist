import * as React from 'react';

import {Container, Button, InputAssignment, Icon} from './styles';

import PlusIcon from '../../../assets/images/plus.png';

export function Input() {
  return (
    <Container>
      <InputAssignment placeholder="Adiciona uma nova tarefa" />
      <Button>
        <Icon source={PlusIcon} />
      </Button>
    </Container>
  );
}
