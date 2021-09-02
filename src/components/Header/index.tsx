import React, { useState } from 'react'
import { Text } from 'react-native'
import { MotiView } from 'moti'
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Header() {
  const [darkMode, setDarckMode] = useState<boolean>(false)
  return (
    <MotiView
      style={styles.header}
      from={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        type: 'timing',
        duration: 300
      }}
    >
      <Text style={styles.textHeader}>Respirar</Text>
      {darkMode ?
        <Feather name="moon" size={24} color={theme.colors.white} />
        :
        <Feather name="sun" size={24} color={theme.colors.white} />
      }
    </MotiView>
  )
}