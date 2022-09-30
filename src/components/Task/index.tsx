import React from 'react';

import {Container, ButtonIcon, Icon, LabelTask} from './styles';

import Trash from '../../../assets/images/trash/trash.png';
import Circle from '../../../assets/images/Circle/circle.png';

import { ListTask } from '../../screens/Home';

export type Props = {
  task: ListTask;
  removeTask: () => void;
};

export function Task({task, removeTask}: Props) {
  return (
    <Container>
      <ButtonIcon>
        <Icon source={Circle} />
      </ButtonIcon>

      <LabelTask>
        {task.description}
      </LabelTask>

      <ButtonIcon onPress={removeTask}>
        <Icon source={Trash} />
      </ButtonIcon>
    </Container>
  );
}
