import { View, Text } from 'react-native'
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
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={task}
            onChangeText={setTask}
            placeholder='Adicionar uma nova tarefa'
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.button}>
            <Plus />
          </TouchableOpacity>

        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoGroup}>
            <Text style={styles.createText}>Criadas</Text>
            <View style={styles.numberBox}>
              <Text style={styles.number}>0</Text>
            </View>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.concludedText}>Concluídas</Text>
            <View style={styles.numberBox}>
              <Text style={styles.number}>0</Text>
            </View>
          </View>
        </View>
        {/* <EmptyTodo /> */}
        <TaskCard />
      </View>
    </View>
  )
}