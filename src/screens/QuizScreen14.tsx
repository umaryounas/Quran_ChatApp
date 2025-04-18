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
import { NavigationProp } from '../types/navigation';
const { width } = Dimensions.get('window');

const QuizScreen14 = ({ route }: { route: any }) => {
  const { userData = {} } = route.params || {};
  const navigation = useNavigation<NavigationProp>();
  const userName = userData?.firstName || 'Ahmed';

  const handleGetStarted = () => {
    console.log('Starting main app with final user data:', userData);
    navigation.navigate('Awareness1Screen');
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={50}
      >
        <SafeAreaView style={styles.container}>
          {/* Back Button */}
          <View style={styles.headerContainer}>
            {/* <TouchableOpacity style={styles.backButton}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity> */}
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <Image 
              source={require('../assets/images/welcome.png')} 
              style={styles.illustration}
              resizeMode="contain"
            />
            
            <Text style={styles.welcomeTitle}>{userName}, before you begin</Text>
            <Text style={styles.welTitle}>Here's a small but powerful way to gain rewards.</Text>
            
            <View style={styles.descriptionBox}>
              <View style={styles.quoteRow}>
                <Text style={styles.lightbulbIcon}>💡</Text>
                <Text style={styles.quoteText}>
                  The Prophet ﷺ said: 'Whoever guides someone to goodness will have a reward like the one who does it.'" (Sahih Muslim 1893)
                </Text>
              </View>
            </View>

            <Text style={styles.messageText}>
              By leaving a review, you help more Muslims discover Qur'anChat and strengthen their faith. Your words could change someone's life.
            </Text>
          </View>

          {/* Button */}
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
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  backButton: {
    padding: 10,
    marginLeft: -10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  illustration: {
    width: width * 0.8,
    height: width * 0.6,
    marginBottom: 20,
  },
  welcomeTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  welTitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
  },
  descriptionBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    borderRadius: 12,
    padding: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
  },
  quoteRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  lightbulbIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  quoteText: {
    color: 'white',
    fontSize: 16,
    flex: 1,
    lineHeight: 24,
  },
  messageText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  buttonContainer: {

    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 5,
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

export default QuizScreen14;