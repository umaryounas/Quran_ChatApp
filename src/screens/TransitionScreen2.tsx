import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, Image } from 'react-native';
import GradientBackground from '../components/GradientBackground';
import PrimaryButton from '../components/Button';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import ProgressSteps from '../components/ProgressBar';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types/navigation';

const { width } = Dimensions.get('window');

const TransitionScreen2 = () => {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <GradientBackground>
      <StatusBar backgroundColor="#0A333A" barStyle="light-content" />
      
      <View style={styles.progressContainer}>
        <ProgressSteps currentStep={2} totalSteps={5} />
      </View>
      
      <ContentContainer>
        {/* Main content area */}
        <View style={styles.contentArea}>
          <View style={styles.imageContainer}>
              <Image 
              source={require('../assets/images/mosque.png')} 
              style={{ width: width * 0.8, height: width * 0.8 }} 
              />
  
          </View>
          
          <Header title="Not Everything We Believe is Right..." />
          
          <Text style={styles.descriptionText}>
            Let go of doubts and false beliefs. QuranChat will help you uncover the truth with authentic sources.
          </Text>
        </View>
      </ContentContainer>
      
      <View style={styles.bottomContainer}>
        <PrimaryButton
          title="Uncover the Truth"
          onPress={() => navigation.navigate('TransitionScreen3')}
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
    marginBottom: 60,
  },
  descriptionText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default TransitionScreen2;