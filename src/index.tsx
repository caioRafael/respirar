import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './styles'
import { Header } from './components/Header';
import { Body } from './components/Body';
import { ThemeProvider } from './contexts/ThemeContext';

export default function Respirar() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Body />
      </SafeAreaView>
    </ThemeProvider>
  );
}