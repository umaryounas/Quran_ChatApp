import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import {NavigationProp} from '../types/navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const SubscriptionManagementScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleUpgradePlan = () => {
    // Navigate to upgrade plan screen
    // navigation.navigate('UpgradePlanScreen');
  };

  const handlePaymentMethod = () => {
    // Navigate to payment method screen
    // navigation.navigate('PaymentMethodScreen');
  };

  const handleCancelSubscription = () => {
    // Navigate to cancel subscription screen
    // navigation.navigate('CancelSubscriptionScreen');
  };

  const handleDone = () => {
    navigation.goBack();
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Icon name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Subscription Management</Text>
          <View style={styles.emptyView} />
        </View>
        <Text style={styles.Title}>Subscription Management</Text>
        <View style={styles.content}>
          <View style={styles.subscriptionCard}>
            <View style={styles.subscriptionHeader}>
              <Text style={styles.currentSubscriptionText}>
                Current Subscription
              </Text>
              <View style={styles.activeIndicator}>
                <Text style={styles.activeText}>Expires on: Dec-2025</Text>
              </View>
            </View>

            <View style={styles.planInfo}>
              <Text style={styles.planTitle}>Yearly</Text>
              <Text style={styles.planPrice}>$2.50/mo</Text>
            </View>
            <Text style={styles.planDetails}>12 months • 29 USD</Text>
          </View>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={handleUpgradePlan}>
            <View style={styles.optionButtonContent}>
              <Icon name="arrow-up-circle" size={20} color="#FFFFFF" />
              <Text style={styles.optionButtonText}>Upgrade Plan</Text>
            </View>
            <Icon name="chevron-forward" size={20} color="#A7A7A7" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={handlePaymentMethod}>
            <View style={styles.optionButtonContent}>
              <Icon name="card" size={20} color="#FFFFFF" />
              <Text style={styles.optionButtonText}>Payment Method</Text>
            </View>
            <Icon name="chevron-forward" size={20} color="#A7A7A7" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={handleCancelSubscription}>
            <View style={styles.optionButtonContent}>
              <Icon name="close-circle" size={20} color="#FFFFFF" />
              <Text style={styles.optionButtonText}>Cancel Subscription</Text>
            </View>
            <Icon name="chevron-forward" size={20} color="#A7A7A7" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
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
  Title: {
    marginTop: 20,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    marginLeft: 25,
  },
  header: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  emptyView: {
    width: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
  },
  subscriptionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 15,
    marginVertical: 20,
  },
  subscriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  currentSubscriptionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  activeIndicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  activeText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  planInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  planPrice: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  planDetails: {
    color: '#A7A7A7',
    fontSize: 12,
    marginTop: 5,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  optionButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 15,
  },
  doneButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  doneButtonText: {
    color: '#0A333A',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SubscriptionManagementScreen;
