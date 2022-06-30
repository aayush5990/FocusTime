import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';
import Constants from 'expo-constants';

export const Focus = ({ addSubject }) => {
  const [tempItem, setTempItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What you want to be focus on!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type text here!"
            style={{ flex: 1, marginRight: spacing.md }}
            //  onChangeText={newText => addSubject(newText)}
            onSubmitEditing={({ nativeEvent }) => setTempItem(nativeEvent.text)}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(tempItem);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  titleContainer: {
    flex: 0.5,
    padding: fontSizes.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg - 7,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
