import React from 'react';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Status } from '../../components/Status';

import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <Input />

      <Status />
    </Container>
  );
}
