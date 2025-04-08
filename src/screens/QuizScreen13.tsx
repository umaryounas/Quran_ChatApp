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

const QuizScreen13 = ({ route }: { route: any }) => {

   
  const { userData = {} } = route.params || {};
  const navigation = useNavigation<NavigationProp>();
  const userName = userData.name || 'Ahmed';

  const handleStart = () => {
    console.log('Starting main app with user data:', userData);
    navigation.navigate('QuizScreen14', { userData });
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
          {/* <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '90%' }]} />
            </View>
          </View> */}

          {/* Main Content */}
          <View style={styles.content}>
            <Image 
              source={require('../assets/images/ret.png')} 
              style={styles.illustration}
              resizeMode="contain"
            />
            
            <Text style={styles.welcomeTitle}>One last thing, {userName}...</Text>
            
            <Text style={styles.welcomeText}>
            Did you know that if the average lifespan is around 65, you’ve already lived 40% of your life?
            </Text>
          </View>

          {/* Start Button */}
          <TouchableOpacity
            style={styles.startButton}
            onPress={handleStart}
          >
            <Text style={styles.startButtonText}>Let's Start</Text>
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
    paddingHorizontal: 20,
  },
  illustration: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 30,
  },
  welcomeTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  startButton: {
    backgroundColor: '#FFD700',
    width: '100%',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    color: '#0A333A',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default QuizScreen13;