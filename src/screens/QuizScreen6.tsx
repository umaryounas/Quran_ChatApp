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

const QuizScreen6 = ({ route }: { route: any }) => {
  const { userData = {} } = route.params || {};
  const [selectedOption, setSelectedOption] = useState<string>(userData.focusStruggle || '');
  const navigation = useNavigation<NavigationProp>();

  const options = [
    {
      id: 'frequently',
      text: 'Frequently',
      description: ' - My mind is always distracted.',
      icon: '😔',
    },
    {
      id: 'sometimes',
      text: 'Sometimes',
      description: ' - I can focus, but I get distracted easily.',
      icon: '🙂',
    },
    {
      id: 'rarely',
      text: 'Rarely or Never',
      description: ' - I feel deeply concentrated in Salah.',
      icon: '🙏',
    },
  ];

  const handleOptionSelect = (optionId: string) => {
    const updatedUserData: UserData = {
      ...userData,
      focusStruggle: optionId,
    };

    console.log('Updated onboarding data:', updatedUserData);
    navigation.navigate('QuizScreen7', { userData: updatedUserData });
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    navigation.navigate('QuizScreen7', { userData });
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
              <View style={[styles.progress, { width: '45%' }]} />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <Text style={styles.question}>Do you struggle with focus in Salah?</Text>

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
                        <Text style={styles.optionDescription}>
                          {option.description}
                        </Text>
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
  optionDescription: {
    color: '#e4e4e7',
    fontSize: 14,
    marginTop: 4,
  },
  selectedOptionText: {
    color: '#0A333A',
  },
});

export default QuizScreen6;