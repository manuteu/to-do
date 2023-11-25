import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Logo from '../../svg/logo'

export default function Header() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  )
}