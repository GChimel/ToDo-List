import React, { useState } from 'react'
import { Container, InputContainer, StatsContainer } from './styles'

import Header from '../../components/Header'
import Input from '../../components/Input'
import PlusButton from '../../components/PlusButton'
import Stats from '../../components/Stats'
import Task from '../../components/Task'

export default function Home() {

  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <Header/>
      <InputContainer>
        <Input/>
        <PlusButton/>
      </InputContainer>

      <StatsContainer>
        <Stats
          title='Tarefas criadas'
          counter={5}
        />
        
        <Stats
          type='SECONDARY'
          title='Concluídas'
          counter={2}
        />
      </StatsContainer>

      <Task
        title='COMPRAR UM CARRO COM UM MOTOR DE BOMBA'
      />
      
    </Container>
  )
}