import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import { UserData } from '../types';
import { NavigationProp } from '../types/navigation';

const QuizScreen9 = ({ route }: { route: any }) => {
  const { userData = {} } = route.params || {};
  const [selectedOption, setSelectedOption] = useState<string>(userData.quranGoal || '');
  const navigation = useNavigation<NavigationProp>();

  const options = [
    {
      id: 'understanding',
      text: 'Understand it deeply & apply it daily',
      icon: '📖',
    },
    {
      id: 'spiritual',
      text: 'Feel more connected to Allah & feel spiritual clarity',
      icon: '✨',
    },
    {
      id: 'memorize',
      text: 'Memorize & recite with confidence',
      icon: '🧠',
    },
  ];

  const handleOptionSelect = (optionId: string) => {
    const updatedUserData: UserData = {
      ...userData,
      quranGoal: optionId,
    };

    console.log('Updated onboarding data:', updatedUserData);
    navigation.navigate('QuizScreen10', { userData: updatedUserData });
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    navigation.navigate('QuizScreen10', { userData });
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
              <View style={[styles.progress, { width: '72%' }]} />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <Text style={styles.question}>What's your dream goal with the Qur'an?</Text>

            <View style={styles.optionsContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.option,
                    selectedOption === option.id && styles.selectedOption,
                  ]}
                  onPress={() => handleOptionSelect(option.id)}
                >
                  <View style={styles.optionContent}>
                    <Text style={styles.optionIcon}>{option.icon}</Text>
                    <View style={styles.optionTextContainer}>
                      <Text
                        style={[
                          styles.optionText,
                          selectedOption === option.id && styles.selectedOptionText,
                        ]}
                      >
                        <Text style={styles.boldText}>{option.text}</Text>
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
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
    alignItems: 'flex-start',
    width: '100%',
  },
  question: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  optionsContainer: {
    width: '100%',
    marginTop: 20,
  },
  option: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    marginBottom: 15,
    padding: 16,
  },
  selectedOption: {
    backgroundColor: 'Gray',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal',
  },
  boldText: {
    fontWeight: 'bold',
  },
  selectedOptionText: {
    color: '#0A333A',
  },
});

export default QuizScreen9;