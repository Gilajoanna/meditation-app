import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}

const CustomButton = ({ onPress, title, textStyles = "", containerStyles = "" }: CustomButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7}
    style={styles.button}
    className={containerStyles}
    onPress={onPress}
    >
      <Text style={styles.buttonText} className={textStyles}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
      backgroundColor: "#153448",
      minHeight: 62,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      opacity: 0.7,
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
    },
});