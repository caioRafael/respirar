import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles'

export function ProgressBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.level}>1</Text>
      <View style={styles.progressContainer}>
        <View style={styles.progress}></View>
      </View>
      <Text style={styles.level}>2</Text>
    </View>
  )
}