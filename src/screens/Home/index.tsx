import React from 'react';

import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Status} from '../../components/Status';
import {Task} from '../../components/Task';

import {Container, Content, Line} from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Input />

        <Status />

        <Line />

        <Task />
      </Content>
    </Container>
  );
}
