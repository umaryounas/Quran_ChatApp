import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import {NavigationProp} from '../types/navigation';

const QuizScreen12 = ({route}: {route: any}) => {
  const {userData = {}} = route.params || {};
  const navigation = useNavigation<NavigationProp>();
  const [percentage, setPercentage] = useState(0);

  // Animation effect to increase percentage from 0 to 100
  useEffect(() => {
    setPercentage(0);
    const interval = setInterval(() => {
      setPercentage(prevPercentage => {
        if (prevPercentage >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevPercentage + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleContinue = () => {
    navigation.navigate('QuizScreen13', {userData});
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    navigation.navigate('QuizScreen13', {userData});
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={50}>
        <SafeAreaView style={styles.safeArea}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBack}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, {width: '100%'}]} />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <View style={styles.calculationContainer}>
              <Text style={styles.calculatingText}>
                Calculating your response...
              </Text>
              <Text style={styles.percentText}>{percentage}%</Text>
              <View style={styles.progressCircleContainer}>
                <View style={styles.progressBackground}>
                  <View
                    style={[styles.progressFill, {width: `${percentage}%`}]}
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
              percentage < 100 && styles.disabledButton,
            ]}
            onPress={handleContinue}
            disabled={percentage < 100}>
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
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
    marginBottom: 20,
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
    marginBottom: 30,
  },
  progressBar: {
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 3,
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
  calculationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculatingText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  percentText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressCircleContainer: {
    width: '80%',
    marginBottom: 30,
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
    width: 180,
    height: 180,
  },
  continueButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
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
