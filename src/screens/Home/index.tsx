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
}

export function Home() {

  const [description,setDescription] = useState<string>();
  const [listaTask, setListTask]= useState<ListTask[]>([]);

  function handleNewTask() {
    if(!description){
      return Alert.alert('Vazio','Preencha o campo');
    }
    const newTask = {
      id: listaTask.length + 1,
      description
    }
    setListTask( prevState => [...prevState,newTask]);
  }

  function handleRemoveTask(id:number) {
    console.log(id)
  }
  return (
    <Container>
      <Header />

      <Content>
        <ContainerInput>
          <InputAssignment placeholder="Adicionar uma nova tarefa" onChangeText={setDescription} value={description}/>
          <Button onPress={handleNewTask} activeOpacity={0.8}>
            <Icon source={PlusIcon} />
          </Button>
        </ContainerInput>

        <Status create={listaTask.length}/>

        <Line />

        {
          !listaTask
          ? <Empyt />
          : <FlatList data={listaTask} renderItem={( {item }) => (
            <Task task={item} removeTask={() => handleRemoveTask(item.id)}/>
          )}/>
        }
      </Content>
    </Container>
  );
}
