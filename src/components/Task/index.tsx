import React from 'react';

import {Container, ButtonIcon, Icon, LabelTask} from './styles';

import Trash from '../../../assets/images/trash/trash.png';
import Circle from '../../../assets/images/Circle/circle.png';

export function Task() {
  return (
    <Container>
      <ButtonIcon>
        <Icon source={Circle} />
      </ButtonIcon>

      <LabelTask>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
      </LabelTask>

      <ButtonIcon>
        <Icon source={Trash} />
      </ButtonIcon>
    </Container>
  );
}
