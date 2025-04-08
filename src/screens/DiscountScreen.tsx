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

const DiscountScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Restore</Text>
          <TouchableOpacity>
            <Text style={styles.closeIcon}>✕</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.content}>
          <View style={styles.discountHeaderContainer}>
            <Image 
              source={require('../assets/images/Logo.png')} 
              style={styles.discountLogo} 
            />
          </View>

          <Text style={styles.discountTitle}>We're Cutting Our Profits to Make This Accessible for You</Text>
          <Text style={styles.discountSubtitle}>
            This is the best discount we can offer while keeping the app running.
          </Text>

          <View style={styles.discountBadgeContainer}>
            <Text style={styles.discountPercent}>50%</Text>
            <Text style={styles.discountLabel}>Discount</Text>
          </View>

          <View style={styles.countdownContainer}>
            <Text style={styles.countdownText}>
              Countdown ends in...
            </Text>
            <Text style={styles.countdownTimer}>04 : 59</Text>
          </View>

          <View style={styles.pricingContainer}>
            <View style={styles.yearlyContainerWrapper}>
              <View style={styles.bestPriceContainer}>
                <Text style={styles.bestPriceText}>Lowest Price ever</Text>
              </View>
              
              <View style={styles.yearlyContainer}>
                <View style={styles.yearlyDetails}>
                  <Text style={styles.yearlyText}>Yearly</Text>
                  <Text style={styles.yearlySubtext}>12 month - 29.99$</Text>
                </View>
                <Text style={styles.yearlyPrice}>2.50 $/mo</Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.claimButton} onPress={() => navigation.navigate('Awareness1Screen')}> 
              <Text style={styles.claimButtonText}>Claim your offer now</Text>
            </TouchableOpacity>
            
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 25,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  closeIcon: {
    color: 'white',
    fontSize: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  discountHeaderContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  discountLogo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  discountTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  discountSubtitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 45,
    opacity: 0.9,
  },
  discountBadgeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: '50%',
    marginBottom: 20,
  },
  discountPercent: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  discountLabel: {
    color: 'white',
    fontSize: 16,
  },
  countdownContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  countdownText: {
    color: '#e4e4e7',
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  countdownTimer: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  pricingContainer: {
    width: '100%',
    marginBottom: 25,
  },
  yearlyContainerWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  bestPriceContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    alignItems: 'center',
  },
  bestPriceText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  yearlyContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yearlyDetails: {
    flexDirection: 'column',
  },
  yearlyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  yearlySubtext: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
  },
  yearlyPrice: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    marginTop: 'auto',
    paddingBottom: 30,
    alignItems: 'center',
  },
  claimButton: {
    backgroundColor: '#FFDD00',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  claimButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guaranteeContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
  guaranteeText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default DiscountScreen;