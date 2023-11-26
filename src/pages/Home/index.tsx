import { View, Text, Alert, FlatList } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Plus from '../../svg/plus'
import { styles } from './styles'
import EmptyTodo from '../../components/EmptyTodo'
import TaskCard from '../../components/TaskCard'

export default function Home() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState<string[]>([])
  const [conclud, setConclud] = useState<string[]>([])
  const [inputFocus, setInputFocus] = useState(false)

  const handleTaskAdd = () => {
    if (taskList.map(item => item).includes(task)) {
      return Alert.alert("Tarefa repitida!")
    }
    if (task) {
      setTaskList(prevState => [...prevState, task])
      setTask('')
    }
  }

  const handleTaskRemove = (name: string) => {
    Alert.alert('Remover', `Deseja remover ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTaskList(prevState => prevState.filter(task => task !== name));
          setConclud(prevState => prevState.filter(task => task !== name));
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  const handleConcludTask = (name: string) => {
    if (conclud.includes(name)) {
      return setConclud(prevState => prevState.filter(task => task !== name))
    } else {
      return setConclud(prevState => [...prevState, name])
    }
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              padding: 16,
              height: 56,
              fontSize: 16,
              backgroundColor: '#262626',
              borderColor: inputFocus ? '#8284FA' : '#0D0D0D',
              borderWidth: 1,
              flex: 1,
              marginRight: 10,
              borderRadius: 6,
              color: '#F2F2F2'
            }}
            value={task}
            onChangeText={setTask}
            placeholder='Adicionar uma nova tarefa'
            placeholderTextColor="#808080"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Plus />
          </TouchableOpacity>

        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoGroup}>
            <Text style={styles.createText}>Criadas</Text>
            <View style={styles.numberBox}>
              <Text style={styles.number}>{taskList.length}</Text>
            </View>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.concludedText}>Concluídas</Text>
            <View style={styles.numberBox}>
              <Text style={styles.number}>{conclud.length}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={taskList}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TaskCard
              key={item}
              text={item}
              onRemove={() => handleTaskRemove(item)}
              onConcluded={() => handleConcludTask(item)} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyTodo />
          )}
        />
      </View>
    </>
  )
}
