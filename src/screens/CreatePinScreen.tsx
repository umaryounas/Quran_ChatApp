import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GradientBackground from '../components/GradientBackground';
import { NavigationProp } from '../types/navigation';

const CreatePinScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [pin, setPin] = useState('');
  
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleDigitPress = (digit: string) => {
    if (pin.length < 4) {
      const newPin = pin + digit;
      setPin(newPin);
      
      if (newPin.length === 4) {
        setTimeout(() => {
          navigation.navigate('PinSuccessScreen', { pin: newPin });
        }, 300);
      }
    }
  };

  const handleDeletePress = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  const renderPinIndicator = () => {
    return (
      <View style={styles.pinIndicatorContainer}>
        {[0, 1, 2, 3].map((index) => (
          <View 
            key={index}
            style={[
              styles.pinDot,
              index < pin.length && styles.pinDotFilled
            ]}
          />
        ))}
      </View>
    );
  };

  interface DigitButtonProps {
    digit: string;
  }

  const renderDigitButton = (digit: DigitButtonProps['digit']) => (
    <TouchableOpacity 
      style={styles.digitButton}
      onPress={() => handleDigitPress(digit)}
    >
      <Text style={styles.digitText}>{digit}</Text>
    </TouchableOpacity>
  );

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Set App Lock</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.content}>
          <View style={styles.pinContainer}>
            <View style={styles.lockIconContainer}>
              <Ionicons name="lock-closed" size={60} color="#FFD700" />
            </View>
            <Text style={styles.createPinText}>Create Pin</Text>
            {renderPinIndicator()}
            
            <View style={styles.keypadContainer}>
              <View style={styles.keypadRow}>
                {renderDigitButton('1')}
                {renderDigitButton('2')}
                {renderDigitButton('3')}
              </View>
              <View style={styles.keypadRow}>
                {renderDigitButton('4')}
                {renderDigitButton('5')}
                {renderDigitButton('6')}
              </View>
              <View style={styles.keypadRow}>
                {renderDigitButton('7')}
                {renderDigitButton('8')}
                {renderDigitButton('9')}
              </View>
              <View style={styles.keypadRow}>
                <View style={styles.emptyButton} />
                {renderDigitButton('0')}
                <TouchableOpacity 
                  style={styles.digitButton}
                  onPress={handleDeletePress}
                >
                  <Ionicons name="backspace-outline" size={24} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
            
            <TouchableOpacity 
              style={[styles.confirmButton, pin.length < 4 && styles.confirmButtonDisabled]}
              disabled={pin.length < 4}
              onPress={() => {
                if (pin.length === 4) {
                  navigation.navigate('PinSuccessScreen', { pin });
                }
              }}
            >
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  placeholder: {
    width: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  pinContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  lockIconContainer: {
    marginTop: 70,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  createPinText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  pinIndicatorContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  pinDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginHorizontal: 8,
  },
  pinDotFilled: {
    backgroundColor: '#FFFFFF',
  },
  keypadContainer: {
    width: '90%',
    aspectRatio: 0.8,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  digitButton: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyButton: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: 'transparent',
  },
  digitText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
  },
  confirmButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
  },
  confirmButtonDisabled: {
    opacity: 0.5,
  },
  confirmButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CreatePinScreen;