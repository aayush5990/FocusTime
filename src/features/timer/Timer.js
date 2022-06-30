import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {ProgressBar} from 'react-native-paper'
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';

export const Timer = ({ focusSubject }) => {
  const [isStarted, setisStarted] = useState(false);
  const [progress, setProgress] = useState(1);

const onProgress=(progress)=>{

}

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} onProgress={onProgress}/>
      </View>
      <View style={{ paddingTop: spacing.xxxl }}>
        <Text style={styles.title}>Focusing On:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{paddingTop:spacing.sm}}>
      <ProgressBar progress={progress} color="#5E84E2" style={{height:10}}/>
      </View>
      <View style={styles.buttonWrapper}>
      {isStarted ? (
        <RoundedButton title="Pause" onPress={() => setisStarted(false)} />
      ) : (
        <RoundedButton title="Start" onPress={() => setisStarted(true)} />
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper:{
    flex:0.3,
    padding:15,
    justifyContent:'center',
    alignItems:'center'
  }
});
