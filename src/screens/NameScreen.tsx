import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import { UserData } from '../types';
import { NavigationProp } from '../types/navigation';

const { width } = Dimensions.get('window');

const NameScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleContinue = () => {
    if (!firstName.trim()) {
      setError('Please enter your first name');
      return;
    }

    const userData: UserData = {
      firstName: firstName.trim(),
      age: null,
      gender: '',
      quranConnection: '',
      focusStruggle: '',
      emotionalConnection: '',
      guidanceFrequency: '',
      consistencyLevel: '',
    };

    navigation.navigate('AgeScreen', { userData });
  };

  const handleSkip = () => {
    const userData: UserData = {
      firstName: firstName.trim(),
      age: null,
      gender: '',
      quranConnection: '',
      focusStruggle: '',
      emotionalConnection: '',
      guidanceFrequency: '',
      consistencyLevel: '',
    };
    navigation.navigate('AgeScreen', { userData });
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={50}
      >
        <SafeAreaView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Text style={styles.backButtonText}>←</Text> {/* Arrow symbol */}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '9%' }]} />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <Text style={styles.question}>What's your first name?</Text>
            <Text style={styles.subtitle}>Enter your first name for username.</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={(text) => {
                  setFirstName(text);
                  if (error) setError('');
                }}
                placeholder="Enter first name"
                placeholderTextColor="#7A9499"
              />
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
          </View>

          {/* Continue Button */}
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 0,
    marginTop: 20, // Added margin for spacing
  },
  backButton: {
    padding: 0,
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
  },
  skipText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600', // Updated font weight
    marginTop: 10, // Added margin for spacing
  },
  progressContainer: {
    width: '100%',
    marginVertical: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#FFD700',
  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
  },
  question: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    color: 'white',
    padding: 15,
    fontSize: 16,
    width: '100%',
  },
  errorText: {
    color: '#FF6B6B',
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: '#FFD700',
    width: '100%',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#0A333A',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default NameScreen;