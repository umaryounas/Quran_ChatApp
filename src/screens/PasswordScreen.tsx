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

const PasswordScreen = ({route}: {route: any}) => {
  const {width} = Dimensions.get('window');
  const {userData = {}} = route.params || {};
  const navigation = useNavigation<NavigationProp>();
  const [password, setPassword] = useState('abcd1234');
  const [confirmPassword, setConfirmPassword] = useState('abcd1234');
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (!password.trim() || !confirmPassword.trim()) {
      setError('Please enter both passwords');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    navigation.navigate('AgeScreen', {
      userData: {
        ...userData,
        password: password.trim(),
      },
    });
  };

  const handleBack = () => {
    navigation.goBack();
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
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, {width: '40%'}]} />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <Text style={styles.title}>Create a password</Text>
            <Text style={styles.subtitle}>Make it strong and memorable</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={password}
              onChangeText={text => {
                setPassword(text);
                setError('');
              }}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={confirmPassword}
              onChangeText={text => {
                setConfirmPassword(text);
                setError('');
              }}
              secureTextEntry
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            style={[
              styles.continueButton,
              (!password.trim() || !confirmPassword.trim()) &&
                styles.disabledButton,
            ]}
            onPress={handleContinue}
            disabled={!password.trim() || !confirmPassword.trim()}>
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
    marginTop: 50,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
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
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'MontserratBold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    opacity: 0.8,
    fontFamily: 'MontserratRegular',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'MontserratRegular',
  },
  errorText: {
    color: '#FF6B6B',
    textAlign: 'center',
    marginBottom: 20,
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
  disabledButton: {
    backgroundColor: 'rgba(255, 215, 0, 0.5)',
  },
  continueButtonText: {
    color: '#0A333A',
    fontFamily: 'MontserratRegular',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PasswordScreen;
