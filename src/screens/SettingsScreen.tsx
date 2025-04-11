import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import {NavigationProp} from '../types/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const navigateTo = (screen: any) => {
    navigation.navigate(screen);
  };

  const renderSettingItem = (
    title: string,
    iconName: string,
    screen: string,
    hasToggle: boolean = false,
    isToggled: boolean = false,
    value: string = '',
  ) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={() => navigateTo(screen)}>
      <View style={styles.settingIconContainer}>
        <Ionicons name={iconName} size={20} color="#FFFFFF" />
      </View>
      <Text style={styles.settingText}>{title}</Text>
      <View style={styles.settingRight}>
        {value && <Text style={styles.settingValue}>{value}</Text>}
        {hasToggle ? (
          <View
            style={[
              styles.toggleContainer,
              isToggled ? styles.toggleActive : {},
            ]}>
            <View
              style={[
                styles.toggleCircle,
                isToggled ? styles.toggleCircleActive : {},
              ]}
            />
          </View>
        ) : (
          <Ionicons name="chevron-forward" size={20} color="#A7A7A7" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={styles.searchButton}>
            <Ionicons name="search" size={22} color="#FFFFFF" />
          </View>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account & Subscription</Text>
            {renderSettingItem(
              'Profile Information',
              'person-outline',
              'ProfileInformationScreen',
            )}
            {renderSettingItem(
              'Change Password',
              'lock-closed-outline',
              'ChangePasswordScreen',
            )}
            {renderSettingItem(
              'Subscription Management',
              'card-outline',
              'SubscriptionManagementScreen',
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Chat Preferences</Text>
            {renderSettingItem(
              'Voice-to-Text Settings',
              'mic-outline',
              'VoiceToTextSettingsScreen',
            )}
            {renderSettingItem(
              'AI Response Length',
              'text-outline',
              'AIResponseLengthScreen',
              false,
              false,
              'Medium',
            )}
            {renderSettingItem(
              'Suggested Prompts',
              'bulb-outline',
              '',
              true,
              true,
            )}
            {renderSettingItem(
              'Save Chat History',
              'save-outline',
              '',
              true,
              true,
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Appearance & Accessibility</Text>
            {renderSettingItem('Dark Mode', 'moon-outline', '', true, true)}
            {renderSettingItem(
              'Font Size Adjustments',
              'text-outline',
              '',
              false,
              false,
              'Small',
            )}
            {renderSettingItem(
              'Background Theme',
              'color-palette-outline',
              '',
              false,
              false,
              'Default',
            )}
            {renderSettingItem(
              'Text-to-Speech',
              'volume-high-outline',
              '',
              true,
              true,
            )}
            {renderSettingItem(
              'Haptic Feedback',
              'hand-right-outline',
              '',
              true,
              true,
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Privacy & Security</Text>
            {renderSettingItem(
              'Two-Factor Authentication',
              'shield-checkmark-outline',
              '',
              true,
              true,
            )}
            {renderSettingItem(
              'Set App Lock',
              'lock-closed-outline',
              'AppLockMainScreen',
            )}
            {renderSettingItem(
              'Clear Chat History',
              'trash-outline',
              'ClearHistoryScreen',
            )}
            {renderSettingItem(
              'Download My Data',
              'download-outline',
              'DownloadDataScreen',
            )}
            {renderSettingItem(
              'Manage Connected Devices',
              'phone-portrait-outline',
              'ManageDevicesScreen',
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Help & Support</Text>
            {renderSettingItem(
              'FAQs & Quick Tips',
              'help-circle-outline',
              'FAQsScreen',
            )}
            {renderSettingItem(
              'Contact Support',
              'mail-outline',
              'ContactSupportScreen',
            )}
            {renderSettingItem(
              'Report a Problem',
              'warning-outline',
              'ReportProblemScreen',
            )}
            {renderSettingItem(
              'Community & Feedback',
              'people-outline',
              'CommunityFeedbackScreen',
            )}
          </View>
        </ScrollView>
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
  searchButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#A7A7A7',
    fontSize: 12,
    marginHorizontal: 12,
    marginVertical: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  settingIconContainer: {
    width: 30,
    alignItems: 'center',
    marginRight: 10,
  },
  settingText: {
    color: 'white',
    fontWeight: '500',
    lineHeight: 20,
    flex: 1,
    fontSize: 14,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    color: '#A7A7A7',
    marginRight: 10,
    fontSize: 12,
  },
  toggleContainer: {
    width: 40,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    padding: 2,
  },
  toggleActive: {
    backgroundColor: '#FFD700',
  },
  toggleCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'white',
  },
  toggleCircleActive: {
    alignSelf: 'flex-end',
  },
});

export default SettingsScreen;
