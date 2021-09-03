import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { MotiView } from 'moti'
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../styles/theme';
import { useTheme } from '../../hooks/useTheme';

export function Header() {
  const { mode, alterMode } = useTheme()

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
      <TouchableOpacity onPress={alterMode}>
        {mode ?
          <Feather name="moon" size={24} color={theme.colors.darkBLue} />
          :
          <Feather name="sun" size={24} color={theme.colors.white} />
        }
      </TouchableOpacity>
    </MotiView>
  )
}