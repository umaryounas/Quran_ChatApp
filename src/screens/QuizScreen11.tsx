import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import {UserData} from '../types';
import {NavigationProp} from '../types/navigation';

const QuizScreen11 = ({route}: {route: any}) => {
  const {width} = Dimensions.get('window');
  const {userData = {}} = route.params || {};
  const navigation = useNavigation<NavigationProp>();

  const handleContinue = () => {
    console.log('Moving to next screen with data:', userData);
    navigation.navigate('QuizScreen12', {userData});
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    navigation.navigate('QuizScreen12', {userData});
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
            <TouchableOpacity onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, {width: '90%'}]} />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <View style={styles.securityContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/images/Lock.png')} // Replace with your image
                  style={{width: width * 0.4, height: width * 0.4}}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.securityTitle}>
                Your Data is 100% Private & Secure
              </Text>
              <Text style={styles.securityDescription}>
                Our promise ensures your data is fully anonymous and protected.
                Your information is encrypted, confidential and never shared!
              </Text>
            </View>
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => handleContinue()}>
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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 0,
    marginTop: 20,
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
    fontWeight: '600',
    marginTop: 10,
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  securityContainer: {
    alignItems: 'center',
    padding: 20,
  },
  lockIconContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  lockIcon: {
    fontSize: 36,
  },
  securityTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  securityDescription: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
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

export default QuizScreen11;
