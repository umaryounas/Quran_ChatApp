import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import {NavigationProp} from '../types/navigation';
import {UserDto} from '../data/models/dtos/auth-dto';

const {width} = Dimensions.get('window');

const NameScreen = ({route}: {route: any}) => {
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleContinue = () => {
    if (!firstName.trim()) {
      return;
    }
    const userData: UserDto = {
      firstName: firstName.trim(),
      age: null,
      gender: '',
      quranConnection: '',
      focusStruggle: '',
      emotionalConnection: '',
      guidanceFrequency: '',
      consistencyLevel: '',
    };
    navigation.navigate('EmailScreen', {
      userData: {
        ...userData,
        firstName: firstName.trim(),
      },
    });
  };

  const handleSkip = () => {
    const userData: UserDto = {
      firstName: firstName.trim(),
      age: null,
      gender: '',
      quranConnection: '',
      focusStruggle: '',
      emotionalConnection: '',
      guidanceFrequency: '',
      consistencyLevel: '',
    };
    navigation.navigate('AgeScreen', {userData});
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={50}>
        <SafeAreaView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Text style={styles.backButtonText}>←</Text> {/* Arrow symbol */}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, {width: '9%'}]} />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <Text style={styles.question}>What's your first name?</Text>
            <Text style={styles.subtitle}>
              Enter your first name for username.
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={text => {
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
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}>
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
    paddingHorizontal: 10,
    marginTop: 20, // Added margin for spacing
  },
  backButton: {
    padding: 10,
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
    paddingHorizontal: 20,
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
    paddingHorizontal: 20,
    marginTop: 40,
  },
  question: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'MontserratBold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 30,
    fontFamily: 'MontserratRegular',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 8,
    fontFamily: 'MontserratRegular',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    color: 'white',
    padding: 15,
    fontSize: 16,
    width: '100%',
    fontFamily: 'MontserratRegular',
  },
  errorText: {
    color: '#FF6B6B',
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: '#FFD700',
    width: '90%',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  continueButtonText: {
    color: '#0A333A',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'MontserratRegular',
  },
});

export default NameScreen;
