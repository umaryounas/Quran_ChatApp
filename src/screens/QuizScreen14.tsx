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
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import { UserData } from '../types';
import { NavigationProp } from '../types/navigation';
const { width } = Dimensions.get('window');

const QuizScreen14 = ({ route }: { route: any }) => {
  const { userData = {} } = route.params || {};
  const navigation = useNavigation<NavigationProp>();
  const userName = userData.name || 'Ahmed';

  const handleGetStarted = () => {
    console.log('Starting main app with final user data:', userData);
    navigation.navigate('JoinThousandsScreen');
  };

  const handleHelp = () => {
    // Navigate to help or support screen
    console.log('Navigating to help screen');
    // navigation.navigate('Help', { userData });
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={50}
      >
        <SafeAreaView style={styles.container}>
          {/* Progress Bar */}

          {/* Main Content */}
          <View style={styles.content}>
            <Image 
              source={require('../assets/images/welcome.png')} 
              style={styles.illustration}
              resizeMode="contain"
            />
            
            <Text style={styles.welcomeTitle}>{userName}, before you begin</Text>
            <Text style={styles.welTitle}>Here’s a small but powerful way to gain rewards.</Text>
            
            <Text style={styles.welcomeDescription}>
              The number of seri (journey) points you have earned in these surveys helps us to customize your journey and make it more meaningful to your personal needs.
            </Text>
            
            <View style={styles.descriptionBox}>
              <Text style={styles.welcomeDescription}>
                The Prophet ﷺ said: ‘Whoever guides someone to goodness will have a reward like the one who does it.’ (Sahih Muslim 1893)
              </Text>
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            
            <TouchableOpacity
              style={styles.startButton}
              onPress={handleGetStarted}
            >
              <Text style={styles.startButtonText}>Yes! I Want to Help</Text>
            </TouchableOpacity>
          </View>
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
  progressContainer: {
    width: '100%',
    marginVertical: 20,
  },
  welTitle:{
    fontWeight:'400',
    fontSize: 14,
    color: '#e4e4e7',
    marginBottom: 15,
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
    paddingHorizontal: 20,
  },
  illustration: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 30,
  },
  descriptionBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  
  welcomeTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  welcomeDescription: {
    color: '#eaecf0',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 10,
  },
  messageText: {
    color: '#fcfcfc',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: 400,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  startButton: {
    marginTop: 30,
    backgroundColor: '#FFD700',
    width: '100%',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#0A333A',
    fontWeight: 'bold',
    fontSize: 16,
  },
  helpButton: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  helpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default QuizScreen14;