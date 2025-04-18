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
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/navigation';

const {width} = Dimensions.get('window');

const TransitionScreen3 = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <GradientBackground>
      <StatusBar backgroundColor="#0A333A" barStyle="light-content" />

      <View style={styles.progressContainer}>
        <ProgressSteps currentStep={3} totalSteps={5} />
      </View>

      <ContentContainer>
        {/* Main content area */}
        <View style={styles.contentArea}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/person.png')}
              style={{width: width * 0.8, height: width * 0.8}}
            />
          </View>

          <Header title="Level Up Your Imaan" />

          <Text style={styles.descriptionText}>
            Everyone’s faith journey is different. QuranChat helps track your
            progress and set spiritual goals tailored to you.
          </Text>
        </View>
      </ContentContainer>

      <View style={styles.bottomContainer}>
        <PrimaryButton
          title="Srengthen My Faith"
          onPress={() => navigation.navigate('TransitionScreen4')}
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
    marginBottom: 60,
  },
  descriptionText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    fontFamily: 'MontserratRegular',
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default TransitionScreen3;
