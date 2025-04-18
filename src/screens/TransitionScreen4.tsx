import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import GradientBackground from '../components/GradientBackground';
import PrimaryButton from '../components/Button';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import ProgressSteps from '../components/ProgressBar';
import BulletPoint from '../components/BulletPoints';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/navigation';

const {width} = Dimensions.get('window');

const TransitionScreen4 = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <GradientBackground>
      <StatusBar backgroundColor="#0A333A" barStyle="light-content" />

      <View style={styles.progressContainer}>
        <ProgressSteps currentStep={4} totalSteps={5} />
      </View>

      <ContentContainer>
        {/* Main content area */}
        <View style={styles.contentArea}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/img4.png')}
              style={{width: width * 0.8, height: width * 0.8}}
              resizeMode="contain"
            />
          </View>

          <Header title="Let's Personalize Your Experience" />

          <Text style={styles.descriptionText}>
            To personalize your experience, let's take a quick quiz. This will
            help QuranChat provide you with tailored guidance based on the Quran
            & Hadith.
          </Text>

          <View style={styles.bulletContainer}>
            <BulletPoint
              text="Takes less than 1 minute"
              iconSource={require('../assets/images/check-tick.png')}
            />
            <BulletPoint
              text="Helps tailor Quranic insights for you"
              iconSource={require('../assets/images/check-tick.png')}
            />
          </View>
        </View>
      </ContentContainer>

      <View style={styles.bottomContainer}>
        <PrimaryButton
          title="Bismillah - Let's Begin"
          onPress={() => navigation.navigate('TransitionScreen5')}
        />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 50,
  },
  contentArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 20,
    fontFamily: 'MontserratRegular',
  },
  bulletContainer: {
    width: '90%',
    marginTop: 20,
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default TransitionScreen4;
