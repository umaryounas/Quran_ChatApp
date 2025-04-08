import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import { NavigationProp } from '../types/navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const VoiceToTextSettingsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
  const [sensitivityValue, setSensitivityValue] = useState(0.7);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    // Save settings logic here
    navigation.goBack();
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Icon name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Voice-to-Text Settings</Text>
          <View style={styles.emptyView} />
        </View>

        <View style={styles.content}>
        <Text style={styles.title}>Voice-to-Text Settings</Text>
          <Text style={styles.subtitle}>Check voice to text settings</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingLabelContainer}>
              <Icon name="mic" size={22} color="#FFD700" style={styles.settingIcon} />
              <Text style={styles.settingLabel}>Enable microphone input</Text>
            </View>
            <Switch
              trackColor={{ false: 'rgba(255, 255, 255, 0.3)', true: '#FFD700' }}
              thumbColor={microphoneEnabled ? '#FFFFFF' : '#f4f3f4'}
              ios_backgroundColor="rgba(255, 255, 255, 0.3)"
              onValueChange={setMicrophoneEnabled}
              value={microphoneEnabled}
            />
          </View>

          <View style={styles.sliderContainer}>
            <View style={styles.sliderHeader}>
              <Text style={styles.sliderLabel}>Adjust voice input sensitivity</Text>
              <Text style={styles.sliderValue}>{Math.round(sensitivityValue * 100)}%</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1}
              value={sensitivityValue}
              onValueChange={setSensitivityValue}
              minimumTrackTintColor="#FFD700"
              maximumTrackTintColor="rgba(255, 255, 255, 0.3)"
              thumbTintColor="#FFD700"
            />
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderMinLabel}>Low</Text>
              <Text style={styles.sliderMaxLabel}>High</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.confirmButton} onPress={handleSave}>
            <Text style={styles.confirmButtonText}>Save</Text>
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
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  header: {
    marginTop: 20,
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
    paddingHorizontal: 20,
  },
  subtitle: {
    color: '#e4e4e7',
    fontSize: 12,
    fontWeight: '400',
    marginVertical: 10,
    fontStyle: 'italic',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  settingLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: 10,
  },
  settingLabel: {
    color: 'white',
    fontSize: 14,
  },
  sliderContainer: {
    marginTop: 20,
  },
  sliderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sliderLabel: {
    color: 'white',
    fontSize: 14,
  },
  sliderValue: {
    color: 'white',
    fontSize: 14,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  sliderMinLabel: {
    color: 'white',
  },
  sliderMaxLabel: {
    color: 'white',
  },
  slider: {
    height: 40,
  },
  confirmButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  confirmButtonText: {
    color: '#0A333A',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VoiceToTextSettingsScreen;