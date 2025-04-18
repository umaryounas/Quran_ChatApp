import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import {NavigationProp} from '../types/navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const ChangePasswordScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [currentPassword, setCurrentPassword] = useState('********');
  const [newPassword, setNewPassword] = useState('********');
  const [reEnterPassword, setReEnterPassword] = useState('********');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    navigation.goBack();
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Icon name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Change Password</Text>
          <View style={styles.emptyView} />
        </View>

        <View style={styles.content}>
          <Text style={styles.subtitle}>Change Password</Text>

          <Text style={styles.title2}>
            Verify Your Identity and Set a New Password.
          </Text>

          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Current Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                secureTextEntry={!showCurrentPassword}
                placeholderTextColor="#A7A7A7"
                selectionColor="#FFD700"
              />
              <TouchableOpacity
                onPress={() => setShowCurrentPassword(!showCurrentPassword)}>
                <Icon
                  name={showCurrentPassword ? 'eye-off' : 'eye'}
                  size={20}
                  color="#A7A7A7"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>New Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={!showNewPassword}
                placeholderTextColor="#A7A7A7"
                selectionColor="#FFD700"
              />
              <TouchableOpacity
                onPress={() => setShowNewPassword(!showNewPassword)}>
                <Icon
                  name={showNewPassword ? 'eye-off' : 'eye'}
                  size={20}
                  color="#A7A7A7"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Re-enter Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={reEnterPassword}
                onChangeText={setReEnterPassword}
                secureTextEntry={!showReEnterPassword}
                placeholderTextColor="#A7A7A7"
                selectionColor="#FFD700"
              />
              <TouchableOpacity
                onPress={() => setShowReEnterPassword(!showReEnterPassword)}>
                <Icon
                  name={showReEnterPassword ? 'eye-off' : 'eye'}
                  size={20}
                  color="#A7A7A7"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirm}>
            <Text style={styles.confirmButtonText}>Confirm Password</Text>
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
  title2: {
    color: '#e4e4e7',
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: '400',
    marginBottom: 20,
  },
  header: {
    marginTop: 50,
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
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
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
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: 'white',
    paddingVertical: 12,
  },
  confirmButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 20,
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

export default ChangePasswordScreen;
