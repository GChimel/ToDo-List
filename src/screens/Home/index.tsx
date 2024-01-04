import React from 'react'
import { Container, InputContainer } from './styles'

import Header from '../../components/Header'
import Input from '../../components/Input'

import Task from '../../components/Task'

export default function Home() {
  return (
    <Container>
      <Header/>
      <InputContainer>
        <Input/>
      </InputContainer>
    </Container>
  )
}