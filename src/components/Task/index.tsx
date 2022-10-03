import React, { useState } from 'react';

import {Container, ButtonIcon, Icon, LabelTask} from './styles';

import Trash from '../../../assets/images/trash/trash.png';
import Circle from '../../../assets/images/Circle/circle.png';
import Mark from '../../../assets/images/Check/check.png';

import { ListTask } from '../../screens/Home';

export type Props = {
  task: ListTask;
  removeTask: () => void;
  markTask: () => void;
};

export function Task({task, removeTask, markTask}: Props) {

  return (
    <Container>
      <ButtonIcon onPress={markTask}>
        <Icon source={task.status ? Mark : Circle} />
      </ButtonIcon>

      <LabelTask selected={task.status}>
        {task.description}
      </LabelTask>

      <ButtonIcon onPress={removeTask}>
        <Icon source={Trash} />
      </ButtonIcon>
    </Container>
  );
}
