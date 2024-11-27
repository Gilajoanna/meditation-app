import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

interface AppGradientProps {
    children: any;
    colors: string[];
}

const AppGradient = ({ children, colors }: AppGradientProps) => {
  return (
    <LinearGradient style={styles.container} colors={colors}>
        <SafeAreaView style={styles.safeArea}>
            {children}
        </SafeAreaView>
    </LinearGradient>
  )
}

export default AppGradient

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 5,
    }
});