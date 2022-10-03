import React, {useState} from 'react';

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
import { Alert, FlatList } from 'react-native';

export type ListTask = {
  id: number
  description: string,
  status: boolean
}

export function Home() {
  const [concluded, setConcluded] = useState(0)
  const [descriptionTask,setDescriptionTask] = useState<string>();
  const [listaTask, setListTask]= useState<ListTask[]>([]);

  function handleNewTask() {
    if(!descriptionTask){
      return Alert.alert('Vazio','Preencha o campo');
    }
    const newTask = {
      id: listaTask.length + 1,
      description: descriptionTask,
      status: false
    }
    setListTask( prevState => [...prevState,newTask]);
    setDescriptionTask('')
  }

  function handleRemoveTask(id:number) {
    var newRemoveTask = listaTask.filter((item) => item.id !== id)
    setListTask(newRemoveTask)
  }

  function handleMarkTask(id:number){
    const markArray = listaTask.map( task => {
      if(task.id === id){
        task.status = !task.status
      }
      return task
    })
    setListTask(markArray)
    
    const totalConcluded = markArray.filter(task => task.status).length;
    
    setConcluded(totalConcluded)
  }
  return (
    <Container>
      <Header />

      <Content>
        <ContainerInput>
          <InputAssignment placeholder="Adicionar uma nova tarefa" onChangeText={setDescriptionTask} value={descriptionTask}/>
          <Button onPress={handleNewTask} activeOpacity={0.8}>
            <Icon source={PlusIcon} />
          </Button>
        </ContainerInput>

        <Status create={listaTask.length} concluded={concluded}/>

        <Line />

        {
          !listaTask.length
          ? <Empyt />
          : <FlatList data={listaTask} renderItem={( {item }) => (
            <Task task={item} removeTask={() => handleRemoveTask(item.id)} markTask={() => handleMarkTask(item.id)}/>
          )}/>
        }
      </Content>
    </Container>
  );
}
