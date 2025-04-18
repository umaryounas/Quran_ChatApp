import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GradientBackground from '../components/GradientBackground';

const ManageDevicesScreen = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  // Sample device data
  const devices = [
    {
      id: '1',
      name: 'iPhone 13 pro',
      location: 'Melbourne, Australia',
      time: '22 Jan at 10:40am',
      isCurrentDevice: true,
    },
    {
      id: '2',
      name: 'iPhone 13 pro',
      location: 'Melbourne, Australia',
      time: '22 Jan at 10:40am',
      isCurrentDevice: false,
    },
    {
      id: '3',
      name: 'iPhone 13 pro',
      location: 'Melbourne, Australia',
      time: '22 Jan at 10:40am',
      isCurrentDevice: false,
    },
  ];

  interface Device {
    id: string;
    name: string;
    location: string;
    time: string;
    isCurrentDevice: boolean;
  }

  const handleRemoveDevice = (device: Device): void => {
    if (device.isCurrentDevice) {
      Alert.alert('Current Device', 'You cannot remove your current device.', [
        {text: 'OK'},
      ]);
      return;
    }
    Alert.alert(
      'Remove Device',
      `Are you sure you want to remove "${device.name}" from your account?`,
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Remove', style: 'destructive'},
      ],
    );
  };

  const renderDevice = ({item}: {item: Device}) => (
    <View style={styles.deviceItem}>
      <View style={styles.deviceIconContainer}>
        <Ionicons name="phone-portrait-outline" size={22} color="#FFFFFF" />
      </View>
      <View style={styles.deviceInfo}>
        <Text style={styles.deviceName}>
          {item.name}
          {item.isCurrentDevice && (
            <Text style={styles.currentDevice}> Current device</Text>
          )}
        </Text>
        <Text style={styles.deviceDetails}>
          {item.location} • {item.time}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveDevice(item)}>
        <Ionicons name="trash-outline" size={20} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Manage Connected Devices</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Where you're logged in</Text>
          <Text style={styles.subtitle}>
            We'll alert you at johndoe@email.com if there is any unusual
            activity on your account.
          </Text>

          <FlatList
            data={devices}
            renderItem={renderDevice}
            keyExtractor={item => item.id}
            style={styles.devicesList}
            contentContainerStyle={styles.devicesListContent}
          />
        </View>

        {/* <View style={styles.tabIndicator} /> */}
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24,
  },
  devicesList: {
    flex: 1,
  },
  devicesListContent: {
    paddingBottom: 20,
  },
  deviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  deviceIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  deviceInfo: {
    flex: 1,
  },
  deviceName: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
  },
  currentDevice: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 'normal',
  },
  deviceDetails: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 13,
  },
  removeButton: {
    padding: 8,
  },
  tabIndicator: {
    width: 60,
    height: 5,
    backgroundColor: 'white',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 8,
  },
});

export default ManageDevicesScreen;
