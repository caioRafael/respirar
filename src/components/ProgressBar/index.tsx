import React from 'react';
import { View } from 'react-native';

import { styles } from './styles'

export function ProgressBar() {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.progress}></View>
    </View>
  )
}