import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Trash from '../../svg/trash'
import { styles } from './styles'

type CardProps = {
  text: string;
  onRemove: () => void
  onConcluded: () => void
}

export default function TaskCard({ text, onRemove, onConcluded }: CardProps) {
  const [check, setCheck] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.nameBox}>
        <BouncyCheckbox
          style={{ paddingLeft: 4 }}
          fillColor={check ? '#5E60CE' : '#4EA8DE'}
          onPress={(isChecked: boolean) => {
            setCheck(isChecked)
            onConcluded();
          }}
        />
        <Text style={{ color: check ? '#808080' : '#F2F2F2', textDecorationLine: check ? 'line-through' : 'none', marginRight: 8 }}>
          {text}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Trash />
      </TouchableOpacity>
    </View>
  )
}