import React, { useState } from 'react'
import { Container, InputContainer, StatsContainer } from './styles'
import { Alert, FlatList } from 'react-native';

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { PlusButton } from '../../components/PlusButton'
import { Stats } from '../../components/Stats'
import { Task } from '../../components/Task'
import { EmptyList } from '../../components/EmptyList';
import theme from '../../theme';


export default function Home() {

  const [isChecked, setIsChecked] = useState(false);

  const [taskEnded, setTaskEnded] = useState(0);

  const [task, setTask] = useState<string[]>([]);

  const [taskName, setTaskName] = useState('');


  function handleCheckboxChange(name: string) {
    Alert.alert('Tarefa', 'Marcar a tarefa como concluída?', [
      {
        text: 'Sim',
        onPress: () => {
          setIsChecked(true);
          setTaskEnded((prevState) => prevState + 1);
        }
      },
      {
        text: 'Não',
        onPress: () => {
          setIsChecked(false);
          setTaskEnded((prevState) => prevState - 1);
        }
      }

    ])
  }

  // Adiconar tarefa
  function handleAddTask() {
    if(taskName.length === 0) {
      return Alert.alert("Tarefa Vazia!", "De um nome à sua tarefa!");
    }
  
    if (task.includes(taskName)) {
      return Alert.alert("Participante Existe!", "Já existe um participante com esse nome!");
    }
    setTask((prevState) => [...prevState, taskName]);
    setTaskName("");
  }

  // Remover tarefa
  function handleRemoveTask(name: string) {
    Alert.alert('Remover', `Deseja remover a tarefa ${name}?`, [  
      {
        text: 'Sim',
        onPress: () => {setTask((prevState) => 
          prevState.filter((task) => task !== name))}
      },
      {
        text: 'Não',	
        style: 'cancel'
      }
    ])
  }

  return (
    <Container>
      <Header/> 
      <InputContainer>
        <Input
          value={taskName}
          onChangeText={setTaskName}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={theme.COLORS.GRAY_300}
          onSubmitEditing={handleAddTask}
        />
        <PlusButton
          onPress={handleAddTask}
        />
      </InputContainer>

      <StatsContainer>
        <Stats
          title='Tarefas criadas'
          counter={task.length}
        />
        
        <Stats
          type='SECONDARY'
          title='Concluídas'
          counter={taskEnded}
        />
      </StatsContainer>

      <FlatList
        data={task}
        keyExtractor={item => item}
        renderItem={({item}) => 
          <Task 
            title={item} 
            onPress={() => handleRemoveTask(item)} 
            checkbox={
              {
                value: isChecked,
                onValueChange(isChecked) {
                  handleCheckboxChange(item)
                },
                color: theme.COLORS.GREEN,
              }
            }
          />}
        ListEmptyComponent={<EmptyList/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{paddingBottom: 100}, task.length === 0 && {flex: 1}]}
      />
    </Container>
  )
}