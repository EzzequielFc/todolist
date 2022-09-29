import React from 'react'

import { Image } from 'react-native';
import { Container,Logo } from './styles';

import LogoToDo from '../../../assets/images/Logo.png'

export function Header() {
    return (
        <Container>
            <Logo source={LogoToDo}/>
        </Container>
    );
}