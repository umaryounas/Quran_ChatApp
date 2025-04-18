import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GradientBackground from '../components/GradientBackground';

const ClearHistoryScreen = () => {
  const navigation = useNavigation();
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleClearHistory = () => {
    setConfirmModalVisible(true);
  };

  const confirmClearHistory = () => {
    // Here would be the actual clearing logic
    setConfirmModalVisible(false);
    // Could navigate back or show success message
    navigation.goBack();
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Clear Chat History</Text>
          <View style={styles.searchButton}>
            <Ionicons name="search" size={22} color="#FFFFFF" />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Clear your chat history</Text>
            <Text style={styles.infoText}>
              This action will permanently delete all your conversations and
              cannot be undone.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearHistory}>
            <Ionicons
              name="trash-outline"
              size={24}
              color="#FFFFFF"
              style={styles.clearIcon}
            />
            <Text style={styles.clearButtonText}>Clear All Chat History</Text>
          </TouchableOpacity>
        </View>

        {/* Confirmation Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={confirmModalVisible}
          onRequestClose={() => setConfirmModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalIconContainer}>
                <Ionicons name="trash-outline" size={40} color="#FFFFFF" />
              </View>

              <Text style={styles.modalTitle}>Are You Sure?</Text>
              <Text style={styles.modalText}>
                Your chat history will be deleted permanently if you proceed.
              </Text>

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={confirmClearHistory}>
                <Text style={styles.confirmButtonText}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setConfirmModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
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
  },
  searchButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  infoTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoText: {
    color: '#A7A7A7',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  clearButton: {
    flexDirection: 'row',
    backgroundColor: '#FF3B30',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  clearIcon: {
    marginRight: 10,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#1E4E4E',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    width: '85%',
  },
  modalIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 59, 48, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    color: '#A7A7A7',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  confirmButton: {
    backgroundColor: '#FFD700', // Yellow color from the UI
    borderRadius: 25,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  confirmButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#A7A7A7',
    fontSize: 16,
  },
});

export default ClearHistoryScreen;
