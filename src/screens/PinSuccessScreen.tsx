import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GradientBackground from '../components/GradientBackground';
import { NavigationProp } from '../types/navigation';

const PinSuccessScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  
  const handleGoBack = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Set App Lock</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.content}>
          <View style={styles.topContent}>
            <Text style={styles.screenTitle}>Set App Lock</Text>
            <Text style={styles.screenSubtitle}>Select password type</Text>

            <View style={styles.optionContainer}>
              <View style={styles.optionRow}>
                <View style={styles.optionIcon}>
                  <Ionicons name="lock-closed-outline" size={22} color="#FFFFFF" />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionText}>App Lock</Text>
                  <Text style={styles.optionDescription}>Choose a password for your app</Text>
                </View>
                <Switch
                  value={true}
                  trackColor={{ false: 'rgba(255, 255, 255, 0.3)', true: '#FFD700' }}
                  thumbColor={'#FFFFFF'}
                  style={styles.toggle}
                />
              </View>
            </View>
            
            <View style={styles.optionContainer}>
              <View style={styles.optionRow}>
                <View style={styles.optionIcon}>
                  <Ionicons name="keypad-outline" size={22} color="#FFFFFF" />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionText}>Set password</Text>
                  <Text style={styles.optionDescription}>Set or change password</Text>
                </View>
                <Ionicons 
                  name="chevron-forward"
                  size={22} 
                  color="#FFFFFF" 
                  style={styles.chevron}
                />
              </View>
            </View>
            
            <View style={styles.optionContainer}>
              <View style={styles.optionRow}>
                <View style={styles.optionIcon}>
                  <Ionicons name="document-text-outline" size={22} color="#FFFFFF" />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionText}>Security Question</Text>
                  <Text style={styles.optionDescription}>If you forget password</Text>
                </View>
                <Ionicons 
                  name="chevron-forward"
                  size={22} 
                  color="#FFFFFF" 
                  style={styles.chevron}
                />
              </View>
            </View>
          </View>
          
          {/* <View style={styles.divider} /> */}
          
          <View style={styles.successContainer}>
            <View style={styles.successIconContainer}>
              <Ionicons name="checkmark" size={40} color="#FFFFFF" />
            </View>
            <Text style={styles.successTitle}>Successfully Applied</Text>
            <Text style={styles.successText}>
              Your password has been applied successfully, you can change your pin from settings.
            </Text>
            <TouchableOpacity 
              style={styles.doneButton}
              onPress={handleGoBack}
            >
              <Text style={styles.doneButtonText}>Done</Text>
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
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  placeholder: {
    width: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topContent: {
    paddingTop: 20,
  },
  screenTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  screenSubtitle: {
    color: '#e4e4e7',
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  optionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  optionDescription: {
    color: '#A7A7A7',
    fontSize: 13,
    marginTop: 2,
  },
  toggle: {
    marginLeft: 10,
  },
  chevron: {
    marginLeft: 10,
  },
  divider: {
    height: 5,
    width: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignSelf: 'center',
    borderRadius: 2.5,
    marginVertical: 10,
  },
  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  successIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(52, 199, 89, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  successTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  successText: {
    color: '#A7A7A7',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  doneButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PinSuccessScreen;