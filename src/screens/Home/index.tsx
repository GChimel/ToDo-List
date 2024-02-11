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

interface TaskItem {
  name: string;
  isChecked: boolean;
}

export default function Home() {

  const [taskEnded, setTaskEnded] = useState(0);
  const [task, setTask] = useState<TaskItem[]>([]);
  const [taskName, setTaskName] = useState('');

  // Marcar tarefa
  function handleCheckboxChange(name: string) {
    const updatedTask = task.map((task) => {
      if (task.name === name) {
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }
      return task;
    });
    setTask(updatedTask);
    setTaskEnded(updatedTask.filter((task) => task.isChecked).length);
  }

  // Adiconar tarefa
  function handleAddTask() {
    if (taskName.length === 0) {
      return Alert.alert('Tarefa Vazia!', 'De um nome à sua tarefa!');
    } else if (task.some(task => task.name === taskName)) {
      return Alert.alert('Participante Existe!', 'Já existe um participante com esse nome!');
    }
    setTask(prevTasks => [...prevTasks, { name: taskName, isChecked: false }]);
    setTaskName('');
  }

  // Remover tarefa
  function handleRemoveTask(name: string) {
    Alert.alert('Remover', `Deseja remover a tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTask(prevTask => prevTask.filter(task => task.name !== name));
          setTaskEnded(prevTaskEnded => prevTaskEnded - 1);
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
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
        keyExtractor={item => item.name}
        renderItem={({item}) => 
          <Task 
            title={item.name} 
            onPress={() => handleRemoveTask(item.name)} 
            checkbox={
              {
                value: item.isChecked,
                onValueChange: () => handleCheckboxChange(item.name),
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