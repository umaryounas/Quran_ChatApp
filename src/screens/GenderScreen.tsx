import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import {NavigationProp} from '../types/navigation';
import {User} from '../data/models/domain/user';

const {width} = Dimensions.get('window');

const GenderScreen = ({route}: {route: any}) => {
  const {userData = {}} = route.params || {};
  const [selectedGender, setSelectedGender] = useState<string>(
    userData.gender || '',
  );
  const navigation = useNavigation<NavigationProp>();

  const handleGenderSelect = (gender: string) => {
    const updatedUserData: User = {
      ...userData,
      gender: gender,
    };
    navigation.navigate('QuranConnectionScreen', {userData: updatedUserData});
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    const updatedUserData: User = {
      ...userData,
      gender: '',
    };
    navigation.navigate('QuranConnectionScreen', {userData: updatedUserData});
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progress, {width: '27%'}]} />
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          <Text style={styles.question}>What is your gender?</Text>
          <Text style={styles.subtitle}>Select your gender</Text>

          <View style={styles.genderOptionsContainer}>
            <TouchableOpacity
              style={[
                styles.genderOption,
                selectedGender === 'Male' && styles.selectedGenderOption,
              ]}
              onPress={() => handleGenderSelect('Male')}>
              <View style={styles.genderIconContainer}>
                <Image
                  source={require('../assets/images/male.png')}
                  style={styles.genderIcon}
                  resizeMode="contain"
                />
              </View>
              <Text
                style={[
                  styles.genderText,
                  selectedGender === 'Male' && styles.selectedGenderText,
                ]}>
                Male
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.genderOption,
                selectedGender === 'Female' && styles.selectedGenderOption,
              ]}
              onPress={() => handleGenderSelect('Female')}>
              <View style={styles.genderIconContainer}>
                <Image
                  source={require('../assets/images/female.png')}
                  style={styles.genderIcon}
                  resizeMode="contain"
                />
              </View>
              <Text
                style={[
                  styles.genderText,
                  selectedGender === 'Female' && styles.selectedGenderText,
                ]}>
                Female
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  backButton: {
    padding: 0,
  },
  skipButton: {
    marginTop: 10,
  },
  skipText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  progressContainer: {
    width: '100%',
    marginVertical: 20,
    paddingHorizontal: 20,
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
    paddingHorizontal: 20,
  },
  question: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'MontserratRegular',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 30,
    fontFamily: 'MontserratRegular',
  },
  genderOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // paddingHorizontal: 10,
  },
  genderOption: {
    width: '45%',
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  selectedGenderOption: {
    backgroundColor: '#FFD700',
  },
  genderIconContainer: {
    width: 80,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  genderIcon: {
    width: 60,
    height: 60,
  },
  genderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'MontserratRegular',
  },
  selectedGenderText: {
    color: '#0A333A',
  },
});

export default GenderScreen;
