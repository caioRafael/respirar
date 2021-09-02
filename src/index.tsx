import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';

import { styles } from './styles'
import { Header } from './components/Header';
import { Body } from './components/Body';

export default function Respirar() {
  const [fonts] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  });

  if (!fonts) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Body />
      </SafeAreaView>
    );
  }

}
