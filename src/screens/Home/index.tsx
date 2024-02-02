import React from 'react'
import { Container, InputContainer } from './styles'

import Header from '../../components/Header'
import Input from '../../components/Input'
import PlusButton from '../../components/PlusButton'
import Stats from '../../components/Stats'

export default function Home() {
  return (
    <Container>
      <Header/>
      <InputContainer>
        <Input/>
        <PlusButton/>
      </InputContainer>

      <Stats
        style
        title='Criadas'
        
      />
      
      
    </Container>
  )
}