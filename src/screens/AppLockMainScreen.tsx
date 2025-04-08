import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GradientBackground from '../components/GradientBackground';
import { NavigationProp } from '../types/navigation';

const AppLockMainScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  type AppLockMainScreenRouteProp = RouteProp<{ params: { appLockEnabled?: boolean } }, 'params'>;
  const route = useRoute<AppLockMainScreenRouteProp>();
  const [isAppLockEnabled, setIsAppLockEnabled] = React.useState(false);
  
  useEffect(() => {
    if (route.params?.appLockEnabled !== undefined) {
      setIsAppLockEnabled(route.params.appLockEnabled);
    }
  }, [route.params]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const toggleAppLock = () => {
    if (!isAppLockEnabled) {
      navigation.navigate('CreatePinScreen');
    }
    setIsAppLockEnabled(!isAppLockEnabled);
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Set App Lock</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.content}>
          <Text style={styles.screenTitle}>Set App Lock</Text>
          <Text style={styles.screenSubtitle}>Select password type</Text>

          <View style={styles.optionContainer}>
            <View style={styles.optionRow}>
              <View style={styles.optionIcon}>
                <Ionicons name="lock-closed-outline" size={24} color="#FFFFFF" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>App Lock</Text>
                <Text style={styles.optionDescription}>Choose a password for your app</Text>
              </View>
              <Switch
                value={isAppLockEnabled}
                onValueChange={toggleAppLock}
                trackColor={{ false: 'rgba(255, 255, 255, 0.2)', true: '#FFD700' }}
                thumbColor="#FFFFFF"
                style={styles.toggle}
              />
            </View>
          </View>

          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => navigation.navigate('CreatePinScreen')}
          >
            <View style={styles.settingIconContainer}>
              <Ionicons name="key-outline" size={22} color="#FFFFFF" />
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Set password</Text>
              <Text style={styles.settingDescription}>Set or change password</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#A7A7A7" style={styles.chevron} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.settingItem}
          >
            <View style={styles.settingIconContainer}>
              <Ionicons name="document-text-outline" size={22} color="#FFFFFF" />
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingText}>Security Question</Text>
              <Text style={styles.settingDescription}>If you forget password</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#A7A7A7" style={styles.chevron} />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.bottomBar} /> */}
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  placeholder: {
    width: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  screenTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  screenSubtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    marginBottom: 25,
    fontStyle: 'italic',
  },
  optionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    width: 40,
    height: 40,
    borderRadius: 20,
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
    marginBottom: 4,
  },
  optionDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
  toggle: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 4,
  },
  settingDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
  chevron: {
    marginLeft: 10,
  },
  bottomBar: {
    alignSelf: 'center',
    width: 80,
    height: 5,
    backgroundColor: 'white',
    borderRadius: 3,
    marginBottom: 10,
  },
});

export default AppLockMainScreen;