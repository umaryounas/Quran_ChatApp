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

const QuranConnectionScreen = ({route}: {route: any}) => {
  const {userData = {}} = route.params || {};
  const [selectedConnection, setSelectedConnection] = useState<string>(
    userData.quranConnection || '',
  );
  const navigation = useNavigation<NavigationProp>();

  const connectionOptions = [
    {
      id: 'deeply',
      text: 'Deeply connected',
      description: ' - but I want to go further.',
      icon: '🏆',
    },
    {
      id: 'sometimes',
      text: 'Sometimes',
      description: ' - I love it, but I need more consistency.',
      icon: '⭐',
    },
    {
      id: 'not',
      text: "Not as much as I'd like",
      description: " - but I'm ready to change that.",
      icon: '🚀',
    },
  ];

  const handleOptionSelect = (optionId: string) => {
    const finalUserData: UserData = {
      ...userData,
      quranConnection: optionId,
    };
    console.log('Completed onboarding with data:', finalUserData);
    navigation.navigate('QuizScreen6', {userData: finalUserData});
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    const finalUserData: UserData = {
      ...userData,
      quranConnection: '',
    };
    console.log('Completed onboarding with data:', finalUserData);
    navigation.navigate('QuizScreen6', {userData: finalUserData});
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
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
              <View style={[styles.progress, {width: '36%'}]} />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <Text style={styles.question}>
              How connected do you feel to the Qur'an right now?
            </Text>

            <View style={styles.optionsContainer}>
              {connectionOptions.map(option => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.optionCard,
                    selectedConnection === option.id && styles.optionSelected,
                  ]}
                  onPress={() => handleOptionSelect(option.id)}>
                  <View style={styles.optionRow}>
                    <Text style={styles.optionIcon}>{option.icon}</Text>
                    <View style={styles.optionTextBox}>
                      <Text
                        style={[
                          styles.optionText,
                          selectedConnection === option.id &&
                            styles.selectedText,
                        ]}>
                        <Text style={styles.optionTitle}>{option.text}</Text>
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
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  keyboardAvoid: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
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
  },
  question: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  optionsContainer: {
    gap: 15,
  },
  optionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
    padding: 16,
  },
  optionSelected: {
    backgroundColor: '#FFFFFF',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  optionTextBox: {
    flex: 1,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
  selectedText: {
    color: '#0A333A',
  },
  optionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionDescription: {
    fontSize: 14,
    color: '#e4e4e7',
  },
});

export default QuranConnectionScreen;
