import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import { NavigationProp } from '../types/navigation';

const QuizScreen12 = ({ route }: { route: any }) => {
  const { userData = {} } = route.params || {};
  const navigation = useNavigation<NavigationProp>();
  const [percentage, setPercentage] = useState(0);
  
  // Animation effect to increase percentage from 0 to 100
  useEffect(() => {
    // Start with 0%
    setPercentage(0);
    
    // Set up interval to increment percentage
    const interval = setInterval(() => {
      setPercentage(prevPercentage => {
        if (prevPercentage >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevPercentage + 1;
      });
    }, 50); // Adjust speed of animation (lower = faster)
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleContinue = () => {
    navigation.navigate('QuizScreen13', { userData });
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
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('QuizScreen13', { userData })}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '100%' }]} />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <View style={styles.calculationContainer}>
              <Text style={styles.calculatingText}>Calculating your response...</Text>
              <Text style={styles.percentText}>{percentage}%</Text>
              
              {/* Custom progress circle */}
              <View style={styles.progressCircleContainer}>
                <View style={styles.progressBackground}>
                  <View 
                    style={[
                      styles.progressFill, 
                      { width: `${percentage}%` }
                    ]} 
                  />
                </View>
              </View>
              
              <Image
                source={require('../assets/images/glass.gif')}
                style={styles.searchIcon}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Continue Button */}
          <TouchableOpacity 
            style={[
              styles.continueButton,
              percentage < 100 && styles.disabledButton
            ]} 
            onPress={handleContinue}
            disabled={percentage < 100}
          >
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
    paddingHorizontal: 16,
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
    paddingHorizontal: 16,
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
    paddingHorizontal: 16,
  },
  calculationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  calculatingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
  progressCircleContainer: {
    marginVertical: 10,
    width: '80%',
  },
  progressBackground: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 4,
  },
  searchIcon: {
    width: 200,
    height: 180,
    marginTop: 20,
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
    opacity: 0.6,
  },
  continueButtonText: {
    color: '#0A333A',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default QuizScreen12;