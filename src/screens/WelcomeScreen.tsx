import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/navigation';
import {getFontFamily} from '../utils/fontFamily';
import PrimaryButton from '../components/Button';

const {width, height} = Dimensions.get('window');

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleGetStarted = () => {
    navigation.navigate('TransitionScreen1');
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      colors={['#0A333A', '#236952']}
      style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>QuranChat</Text>
          <Text style={styles.subtitle}>An AI-Powered Islamic Therapy </Text>
          <Text style={styles.subtitle}>App</Text>
        </View>

        <Text style={styles.description}>
          Find answers from the Quran, Hadith & Islamic scholars
        </Text>

        <View style={styles.ratingContainer}>
          <Image
            source={require('../assets/images/stars.png')}
            style={styles.starsWingsImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.bottomContainer}>
          <PrimaryButton
            title="Bismillah"
            onPress={() => navigation.navigate('TransitionScreen1')}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.footerText}>
            Your data is protected.
            <Text style={styles.footerLink}> Find out how?</Text>
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a4345',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    marginTop: 20,
  },
  contentContainer: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: height * 0.1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    marginBottom: 5,
  },
  title: {
    fontSize: 33,
    fontWeight: 600,
    color: 'white',
    marginBottom: 0,
  },
  subtitle: {
    fontSize: 10,
    color: '#e0e0e0',
    fontWeight: 400,
    textAlign: 'center',
    marginTop: 0,
    fontFamily: 'Montserrat-Italic',
  },
  description: {
    fontSize: 16,
    color: 'white',
    fontWeight: 400,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 0,
    fontFamily: 'MontserratRegular',
  },
  ratingContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  starsWingsImage: {
    width: width * 0.7,
    height: width * 0.2,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 32,
  },
  getStartedButton: {
    backgroundColor: '#0F3A40',
    borderRadius: 50,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    padding: 16,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'MontserratRegular',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 400,
    marginTop: 5,
  },
  footerLink: {
    textDecorationLine: 'underline',
  },
});
