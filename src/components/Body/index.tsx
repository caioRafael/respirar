import { MotiView } from 'moti';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles'
import { theme } from '../../styles/theme';

export function Body() {

  const [breathe, setBreathe] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    if (start) {
      setTimeout(() => { setBreathe(!breathe) }, 3000);
    } else {
      setBreathe(false)
    }
  }, [breathe, start])

  return (
    <View style={styles.container}>

      {breathe ?

        <MotiView
          style={styles.outsideAirContainer}
          from={{
            width: 150,
            height: 150,
            // opacity: 0
          }}
          animate={{
            width: 250,
            height: 250,
            // opacity: 1
          }}
          transition={{
            type: 'timing',
            duration: 3000,
          }}
        >
          <View style={styles.indoorAirContainer}>
            {/* <Text>respirar</Text> */}
            <Entypo name="air" size={24} color={theme.colors.white} />
          </View>
        </MotiView>
        :
        <MotiView
          style={styles.outsideAirContainer}
          from={{
            width: 250,
            height: 250,
            // opacity: 0
          }}
          animate={{
            width: 150,
            height: 150,
            // opacity: 1
          }}
          transition={{
            type: 'timing',
            duration: 3000,
          }}
        >
          <View style={styles.indoorAirContainer}>
            {/* <Text>respirar</Text> */}
            <Entypo name="air" size={24} color={theme.colors.white} />
          </View>
        </MotiView>
      }

      <TouchableOpacity onPress={() => { setStart(!start) }} style={styles.button}>
        <Text style={styles.textButton}>{start ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  );
}