import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, Image } from 'react-native';
import GradientBackground from '../components/GradientBackground';
import PrimaryButton from '../components/Button';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import ProgressSteps from '../components/ProgressBar';
import BulletPoint from '../components/BulletPoints';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types/navigation';

const { width } = Dimensions.get('window');

const TransitionScreen5 = () => {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <GradientBackground>
      <StatusBar backgroundColor="#0A333A" barStyle="light-content" />
      
      <View style={styles.progressContainer}>
        <ProgressSteps currentStep={5} totalSteps={5} />
      </View>
      
      <ContentContainer>
        {/* Main content area */}
        <View style={styles.contentArea}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/Lock.png')} // Replace with your image
              style={{ width: width * 0.4, height: width * 0.4 }}
              resizeMode="contain"
            />
          </View>
          
          <Header title="Your Privacy is 100% Protected" />
          
          <Text style={styles.descriptionText}>
            Your data is completely anonymized and securely encrypted. QuranChat respects your privacy. Your personal information will never be shared or stored in a way that identifies you.
          </Text>

          <View style={styles.bulletContainer}>
            <BulletPoint 
              text="Takes less than 1 minute" 
              iconSource={require('../assets/images/1.png')} 
            />
            <BulletPoint 
              text="Helps tailor Quranic insights for you" 
              iconSource={require('../assets/images/2.png')} 
            />
            <BulletPoint 
              text="100% anonymity guaranteed" 
              iconSource={require('../assets/images/3.png')} 
            />
          </View>
        </View>
      </ContentContainer>
      
      <View style={styles.bottomContainer}>
        <PrimaryButton
          title="I Trust You"
          onPress={() => navigation.navigate('NameScreen')} // Replace with the next screen name
        />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
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
  bulletIcon:{
    width: 40,
    height: 40,
    marginRight: 10,
  }
});

export default TransitionScreen5;