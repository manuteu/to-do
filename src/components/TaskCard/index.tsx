import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Trash from '../../svg/trash'
import { styles } from './styles'

export default function TaskCard() {
  const [check, setCheck] = useState(false)

  return (
    <View style={styles.container}>
      <BouncyCheckbox fillColor={check ? '#5E60CE' : '#4EA8DE'} onPress={(isChecked: boolean) => { setCheck(isChecked) }} />
      <Text style={{ color: check ? '#808080' : '#F2F2F2', textDecorationLine: check ? 'line-through' : 'none' }}>TaskCard</Text>
      <TouchableOpacity>
        <Trash />
      </TouchableOpacity>
    </View>
  )
}