import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function EmptyTodo() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Clipboard.png')} />
      <View style={styles.textBox}>
        <Text style={{ color: '#808080', fontWeight: 'bold' }}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={{ color: '#808080' }}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}