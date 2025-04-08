import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GradientBackground from '../components/GradientBackground';

const DownloadDataScreen = () => {
  const navigation = useNavigation();
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [downloadFormat, setDownloadFormat] = useState('pdf');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleDownloadData = () => {
    setConfirmModalVisible(true);
  };

  const confirmDownload = () => {
    setConfirmModalVisible(false);
    // Simulate download process
    setIsDownloading(true);
    
    // Mock download completion after 2 seconds
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadComplete(true);
      
      // Reset and navigate back after showing success
      setTimeout(() => {
        setDownloadComplete(false);
        navigation.goBack();
      }, 2000);
    }, 2000);
  };

  const renderDataFormats = () => {
    const formats = ['pdf', 'csv', 'json'];
    
    return (
      <View style={styles.formatContainer}>
        {formats.map(format => (
          <TouchableOpacity
            key={format}
            style={[
              styles.formatOption,
              downloadFormat === format && styles.selectedFormat
            ]}
            onPress={() => setDownloadFormat(format)}
          >
            <Text style={[
              styles.formatText,
              downloadFormat === format && styles.selectedFormatText
            ]}>
              {format.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Download Data</Text>
          <View style={styles.searchButton}>
            {/* <Ionicons name="search" size={22} color="#FFFFFF" /> */}
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Ionicons name="cloud-download-outline" size={60} color="#FFFFFF" style={styles.downloadIcon} />
            <Text style={styles.infoTitle}>
              Download My Data
            </Text>
            <Text style={styles.infoText}>
              Select your preferred format and download your data. You can access this data anytime.
            </Text>
          </View>

          {renderDataFormats()}

          <TouchableOpacity 
            style={styles.downloadButton} 
            onPress={handleDownloadData}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <ActivityIndicator color="#FFFFFF" style={styles.downloadIcon} />
            ) : (
              <Ionicons name="download-outline" size={24} color="#FFFFFF" style={styles.downloadIcon} />
            )}
            <Text style={styles.downloadButtonText}>
              {isDownloading ? 'Downloading...' : 'Download Now'}
            </Text>
          </TouchableOpacity>

          {downloadComplete && (
            <View style={styles.successContainer}>
              <Ionicons name="checkmark-circle" size={28} color="#4CD964" />
              <Text style={styles.successText}>Download Complete!</Text>
            </View>
          )}
        </View>

        {/* Confirmation Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={confirmModalVisible}
          onRequestClose={() => setConfirmModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalIconContainer}>
                <Ionicons name="download-outline" size={40} color="#FFFFFF" />
              </View>
              
              <Text style={styles.modalTitle}>Download Data</Text>
              <Text style={styles.modalText}>
                Ready to download your data in {downloadFormat.toUpperCase()} format?
              </Text>
              
              <TouchableOpacity 
                style={styles.confirmButton}
                onPress={confirmDownload}
              >
                <Text style={styles.confirmButtonText}>Download</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => setConfirmModalVisible(false)}
              >
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
    marginTop: 20,
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
    marginBottom: 30,
  },
  downloadIcon: {
    // marginBottom: 15,
    marginRight: 10,
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
  formatContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30,
  },
  formatOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  selectedFormat: {
    backgroundColor: '#FFD700',
  },
  formatText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  selectedFormatText: {
    color: '#000000',
  },
  downloadButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 122, 255, 0.2)', // Blue color for download
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  successContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'rgba(76, 217, 100, 0.1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  successText: {
    color: '#4CD964',
    marginLeft: 8,
    fontWeight: '500',
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
    backgroundColor: '#FFD700', // Blue color for download
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

export default DownloadDataScreen;