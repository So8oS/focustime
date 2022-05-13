import React, {useState} from 'react';
import { Text, View, StyleSheet , Platform ,SafeAreaView ,StatusBar} from 'react-native';
import Constants from 'expo-constants';
import {colors} from './src/utils/colors';
import {Focus} from './src/features/Focus'
import {fontSizes} from './src/utils/sizes'
import {Timer} from './src/features/timer'

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('test');
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer 
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
 } ,
});