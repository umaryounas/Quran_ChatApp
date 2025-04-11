import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
}

const PrimaryButton = ({title, onPress, style}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 30,
    paddingVertical: 15,
    width: '80%', // Adjusted for flexibility
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'MontserratBold',
  },
});

export default PrimaryButton;
