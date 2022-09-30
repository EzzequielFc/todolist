import React from 'react';

import {Header} from '../../components/Header';
import {Status} from '../../components/Status';

import {
  Container,
  Content,
  Line,
  Button,
  ContainerInput,
  Icon,
  InputAssignment,
} from './styles';

import PlusIcon from '../../../assets/images/plus.png';
import {Empyt} from '../../components/Empyt';
import {Task} from '../../components/Task';

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <ContainerInput>
          <InputAssignment placeholder="Adicionar uma nova tarefa" />
          <Button onPress={() => console.log('oi')} activeOpacity={0.8}>
            <Icon source={PlusIcon} />
          </Button>
        </ContainerInput>

        <Status />

        <Line />

        <Task />
      </Content>
    </Container>
  );
}
