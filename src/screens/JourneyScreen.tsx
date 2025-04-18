import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import {NavigationProp} from '../types/navigation';

const JourneyScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleJourney = () => {
    navigation.navigate('DiscountScreen');
  };

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
          <View style={styles.journeyHeaderContainer}>
            <Image
              source={require('../assets/images/Logo.png')}
              style={styles.journeyLogo}
            />
          </View>

          <Text style={styles.journeyTitle}>Start Your Journey Today</Text>
          <Text style={styles.journeySubtitle}>
            We worked hard to find the best pricing—affordable for you, while
            sustainable for us™
          </Text>

          <View style={styles.benefitsContainer}>
            <View style={styles.benefitRow}>
              <Image
                source={require('../assets/images/peace_icon.png')}
                style={styles.benefitIcon}
              />
              <Text style={styles.benefitText}>
                Feel completely at peace the moment you say 'Allahu Akbar'.
              </Text>
            </View>

            <View style={styles.benefitRow}>
              <Image
                source={require('../assets/images/prayer_icon.png')}
                style={styles.benefitIcon}
              />
              <Text style={styles.benefitText}>
                Eliminate distractions and connect deeply in every prayer.
              </Text>
            </View>

            <View style={styles.benefitRow}>
              <Image
                source={require('../assets/images/star_icon.png')}
                style={styles.benefitIcon}
              />
              <Text style={styles.benefitText}>
                Transform Salah into a source of strength and clarity.
              </Text>
            </View>
          </View>

          <Text style={styles.costComparison}>
            Investing in your faith costs less than a weekly gum.
          </Text>

          <View style={styles.planContainer}>
            <View style={styles.planRow}>
              <View style={styles.planCard}>
                <View style={styles.radioCircle}>
                  <View style={styles.radioInner} />
                </View>
                <Text style={styles.planTitle}>Monthly Plan</Text>
                <Text style={styles.planPrice}>$14.99/month</Text>
              </View>

              <View style={[styles.planCard, styles.selectedPlan]}>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>70% off</Text>
                </View>
                <View style={styles.radioCircle}>
                  <View style={styles.radioInner} />
                </View>
                <Text style={styles.planTitle}>Yearly Plan</Text>
                <Text style={styles.planPrice}>$4/month</Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.gumButton} onPress={handleJourney}>
              <Text style={styles.gumButtonText}>
                Yes! For the Price of a gum
              </Text>
            </TouchableOpacity>

            <Text style={styles.discreetText}>Purchase appears Discretely</Text>

            <View style={styles.guaranteeContainer}>
              <Text style={styles.guaranteeText}>
                Cancel Anytime ✅ - Money back guarantee 🛡️
              </Text>
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
    paddingHorizontal: 25,
    marginTop: 50,
  },
  headerTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  closeIcon: {
    color: 'white',
    fontSize: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  journeyHeaderContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  journeyLogo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  journeyTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  journeySubtitle: {
    color: '#e4e4e7',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 25,
    opacity: 0.9,
    fontStyle: 'italic',
  },
  benefitsContainer: {
    width: '100%',
    marginBottom: 25,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  benefitIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 15,
  },
  benefitText: {
    color: '#FAFAFA',
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
    fontWeight: '500',
  },
  costComparison: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 25,
  },
  planContainer: {
    width: '100%',
    marginBottom: 25,
  },
  planRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  planCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 15,
    width: '48%',
    alignItems: 'center',
    position: 'relative',
  },
  selectedPlan: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 15,
    width: '48%',
    alignItems: 'center',
    position: 'relative',
  },
  discountBadge: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  discountText: {
    color: '#0A333A',
    fontWeight: 'bold',
    fontSize: 12,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  planTitle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  planPrice: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  gumButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  gumButtonText: {
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

export default JourneyScreen;
