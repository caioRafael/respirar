import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles'
import { Breathe } from '../Breathe';

export function Body() {

  const [start, setStart] = useState<boolean>(false);

  return (
    <View style={styles.container}>

      <Breathe start={start} />

      <TouchableOpacity onPress={() => { setStart(!start) }} style={styles.button}>
        <Text style={styles.textButton}>{start ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  );
}