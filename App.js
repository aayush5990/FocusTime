import React, { useState } from 'react';
import { Text, View, StyleSheet,Platform } from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/focus/focus';
import {Timer} from "./src/features/timer/Timer"
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

export default function App() {
  const [focusSubject, setFocusSubject] = useState('gardning');
  return (
    <View style={styles.container}>
      {focusSubject ? (
       <Timer focusSubject={focusSubject}/>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    padding:Platform.OS==='ios'? spacing.xl :spacing.md
  },
});
