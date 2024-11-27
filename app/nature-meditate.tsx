import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NatureMeditate = () => {
  return (
    <View style={styles.container}>
      <Text>Nature Meditate</Text>
    </View>
  )
}

export default NatureMeditate

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
});