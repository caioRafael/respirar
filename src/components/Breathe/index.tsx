import { AnimatePresence, MotiView, useAnimationState } from 'moti';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { theme } from '../../styles/theme';

type BreatheProps = {
  start: boolean,
};

export function Breathe({ start }: BreatheProps) {
  const [countTime, setCountTime] = useState<number>(0);

  const time: number = 2000

  const breatheAnimateState = useAnimationState({
    breatheIn: {
      width: 250,
      height: 250,
    },
    breatheOut: {
      width: 150,
      height: 150,
    }
  })

  useEffect(() => {
    if (start) {
      breatheAnimateState.transitionTo(state => {
        if (state === 'breatheOut') {
          return 'breatheIn'
        } else {
          return 'breatheOut'
        }
      })
    } else {
      breatheAnimateState.transitionTo('breatheOut')
    }

    setTimeout(() => { setCountTime(countTime + 1) }, time);
  }, [countTime, start])

  return (
    <View style={styles.breatheContainer}>
      <AnimatePresence >
        <MotiView
          style={styles.outsideAirContainer}
          state={breatheAnimateState}
          delay={time}
          transition={{
            type: 'timing',
            duration: time,
          }}
        >
          <View style={styles.indoorAirContainer}>
            {/* <Text>respirar</Text> */}
            <Entypo name="air" size={24} color={theme.colors.white} />
          </View>
        </MotiView>
      </AnimatePresence>
    </View>
  )
}