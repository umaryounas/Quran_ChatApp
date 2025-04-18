import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import {UserData} from '../types';
import {NavigationProp} from '../types/navigation';

const QuizScreen7 = ({route}: {route: any}) => {
  const {userData = {}} = route.params || {};
  const [selectedOption, setSelectedOption] = useState<string>(
    userData.emotionalConnection || '',
  );
  const navigation = useNavigation<NavigationProp>();

  const options = [
    {
      id: 'frequently',
      text: 'Frequently',
      description: " - I'm able to feel connected.",
      icon: '😊',
    },
    {
      id: 'sometimes',
      text: 'Sometimes',
      description: " - I feel moments of connection, but it's not consistent.",
      icon: '🤔',
    },
    {
      id: 'rarely',
      text: 'Rarely or Never',
      description: " - I feel distant from the Qur'an.",
      icon: '😞',
    },
  ];

  const handleOptionSelect = (optionId: string) => {
    const updatedUserData: UserData = {
      ...userData,
      emotionalConnection: optionId,
    };
    navigation.navigate('QuizScreen8', {userData: updatedUserData});
  };

  const handleBack = () => navigation.goBack();

  const handleSkip = () => navigation.navigate('QuizScreen8', {userData});

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
              <View style={[styles.progress, {width: '54%'}]} />
            </View>
          </View>

          {/* Question */}
          <View style={styles.content}>
            <Text style={styles.question}>
              Do you feel emotionally or spiritually disconnected from the
              Qur'an?
            </Text>

            {/* Options */}
            <View style={styles.optionsContainer}>
              {options.map(option => {
                const isSelected = selectedOption === option.id;
                return (
                  <TouchableOpacity
                    key={option.id}
                    style={[styles.option, isSelected && styles.selectedOption]}
                    onPress={() => handleOptionSelect(option.id)}
                    activeOpacity={0.8}>
                    <View style={styles.optionContent}>
                      <Text style={styles.optionIcon}>{option.icon}</Text>
                      <View style={styles.optionTextContainer}>
                        <Text
                          style={[
                            styles.optionText,
                            isSelected && styles.selectedOptionText,
                          ]}>
                          <Text style={styles.boldText}>{option.text}</Text>
                          <Text style={styles.optionDescription}>
                            {option.description}
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
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
    marginTop: 50,
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 8,
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
    paddingHorizontal: 16,
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
    paddingHorizontal: 16,
  },
  question: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  optionsContainer: {
    marginTop: 10,
  },
  option: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
  },
  selectedOption: {
    backgroundColor: '#ffffff',
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
  },
  selectedOptionText: {
    color: '#0A333A',
  },
  boldText: {
    fontWeight: 'bold',
  },
  optionDescription: {
    color: '#e4e4e7',
    fontSize: 14,
    marginTop: 4,
  },
});

export default QuizScreen7;
