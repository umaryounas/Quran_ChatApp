import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import {NavigationProp} from '../types/navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileInformationScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [name, setName] = useState('Masood');
  const [number, setNumber] = useState('masood0123@gmail.com');
  const [email, setEmail] = useState('masood0123@gmail.com');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    // Save logic here
    navigation.goBack();
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Icon name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile Information</Text>
          <View style={styles.emptyView} />
        </View>

        <View style={styles.content}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../assets/images/img1.jpeg')}
              style={styles.avatar}
            />
            <View style={styles.editIconContainer}>
              <Icon name="camera" size={15} color="#0A333A" />
            </View>
          </View>

          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Name</Text>
            <View style={styles.inputContainer}>
              <Icon
                name="person"
                size={20}
                color="#A7A7A7"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholderTextColor="#A7A7A7"
                selectionColor="#FFD700"
              />
            </View>
          </View>

          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Number</Text>
            <View style={styles.inputContainer}>
              <Icon
                name="call"
                size={20}
                color="#A7A7A7"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={number}
                onChangeText={setNumber}
                placeholderTextColor="#A7A7A7"
                selectionColor="#FFD700"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputContainer}>
              <Icon
                name="mail"
                size={20}
                color="#A7A7A7"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#A7A7A7"
                selectionColor="#FFD700"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
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
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    marginTop: 20,
    marginBottom: 30,
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFD700',
  },
  editIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSection: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    color: '#A7A7A7',
    fontSize: 12,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#d1d1d6',
    paddingVertical: 12,
  },
  saveButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#0A333A',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileInformationScreen;
