import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import { NavigationProp } from '../types/navigation';

const CostExplanationScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleInvest = () => {
    navigation.navigate('JourneyScreen');
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.costHeaderContainer}>
            <Image 
              source={require('../assets/images/quran_book.png')} 
              style={styles.quranIcon} 
            />
          </View>

          <Text style={styles.costTitle}>Ahmed, Why Qur'anChat Costs Money</Text>
          <Text style={styles.costSubtitle}>
            We built Qur'anChat to help Muslims worldwide connect deeply with the Qur'an, but developing an AI-powered app comes with real costs.
          </Text>

          <View style={styles.costCardsContainer}>
            <View style={styles.costCard}>
              <View style={styles.costIconContainer}>
                <Image 
                  source={require('../assets/images/ai_icon.png')} 
                  style={styles.costIcon} 
                />
              </View>
              <View style={styles.costTextContainer}>
                <Text>
                  <Text style={styles.costCardTitle}>AI Computation Costs - </Text>
                  <Text style={styles.costCardDesc}>Every chat you have with Qur'anChat requires advanced AI processing.</Text>
                </Text>
              </View>
            </View>

            <View style={styles.costCard}>
              <View style={styles.costIconContainer}>
                <Image 
                  source={require('../assets/images/dev_icon.png')} 
                  style={styles.costIcon} 
                />
              </View>
              <View style={styles.costTextContainer}>
                <Text style={styles.costCardTitle}>Continuous Development -</Text>
                <Text style={styles.costCardDesc}>To improve accuracy & add new features, we must invest in developers.</Text>
              </View>
            </View>

            <View style={styles.costCard}>
              <View style={styles.costIconContainer}>
                <Image 
                  source={require('../assets/images/server_icon.png')} 
                  style={styles.costIcon} 
                />
              </View>
              <View style={styles.costTextContainer}>
                <Text style={styles.costCardTitle}>Server Costs -</Text>
                <Text style={styles.costCardDesc}>Qur'anChat runs 24/7 so you always have access to guidance.</Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.investButton} onPress={handleInvest}>
              <Text style={styles.investButtonText}>I'll Invest in My Faith</Text>
            </TouchableOpacity>
            
            <Text style={styles.discreetText}>Purchase appears Discretely</Text>
            
            <View style={styles.guaranteeContainer}>
              <Text style={styles.guaranteeText}>Cancel Anytime ✅  -  Money back guarantee 🛡️</Text>
            </View>
            
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
  content: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  costHeaderContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 30,
  },
  quranIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  costTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  costSubtitle: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 30,
    opacity: 0.9,
    fontStyle: 'italic',
  },
  costCardsContainer: {
    width: '95%',
  },
  costCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  costIconContainer: {
    marginRight: 15,
  },
  costIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  costTextContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline', // Align text baselines for better appearance
  },
  costCardTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 4, // Space between title and description
  },
  costCardDesc: {
    color: 'white',
    opacity: 0.9,
    fontSize: 14,
    flex: 0, // Remove flex: 1 to prevent forcing a new line
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  investButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  investButtonText: {
    color: '#0A333A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  discreetText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
    marginBottom: 10,
  },
  guaranteeContainer: {
    marginBottom: 5,
  },
  guaranteeText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
  },
  progressDots: {
    flexDirection: 'row',
    marginTop: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 20,
  },
});

export default CostExplanationScreen;