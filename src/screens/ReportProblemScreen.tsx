import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GradientBackground from '../components/GradientBackground';

const ReportProblemScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedIssueType, setSelectedIssueType] = useState<string | null>(null);
  
  const issueTypes = [
    { id: 'technical', label: 'Technical Issue' },
    { id: 'content', label: 'Content Error' },
    { id: 'audio', label: 'Audio/Video Issue' },
    { id: 'payment', label: 'Payment & Earnings' },
    { id: 'student', label: 'Student Misconduct' },
    { id: 'other', label: 'Other' },
  ];
  
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmitReport = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter a title for your problem');
      return;
    }
    
    if (!selectedIssueType) {
      Alert.alert('Error', 'Please select an issue type');
      return;
    }
    
    if (!description.trim()) {
      Alert.alert('Error', 'Please describe your issue');
      return;
    }
    
    // Submit report logic
    Alert.alert(
      'Report Submitted',
      'Thank you for your report. We will review it as soon as possible.',
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  const renderIssueTypeButton = (issueType: { id: string; label: string }) => {
    const isSelected = selectedIssueType === issueType.id;
    
    return (
      <TouchableOpacity
        key={issueType.id}
        style={[
          styles.issueTypeButton,
          isSelected && styles.issueTypeButtonSelected
        ]}
        onPress={() => setSelectedIssueType(issueType.id)}
      >
        <Text
          style={[
            styles.issueTypeText,
            isSelected && styles.issueTypeTextSelected
          ]}
        >
          {issueType.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Report a Problem</Text>
        </View>
        
        <View style={styles.content}>
          <Text style={styles.title}>Report a Problem</Text>
          <Text style={styles.description}>
            Facing an issue? Let us know, and we'll work on resolving it as soon as possible.
          </Text>
          
          <Text style={styles.inputLabel}>Title</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Your problem title"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            value={title}
            onChangeText={setTitle}
          />
          
          <Text style={styles.inputLabel}>Select Issue Type</Text>
          <View style={styles.issueTypesContainer}>
            {issueTypes.map(issueType => renderIssueTypeButton(issueType))}
          </View>
          
          <Text style={styles.inputLabel}>Describe the Issue</Text>
          <TextInput
            style={[styles.inputField, styles.textArea]}
            placeholder="Enter a description..."
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            value={description}
            onChangeText={setDescription}
          />
          
          <TouchableOpacity 
            style={styles.reportButton}
            onPress={handleSubmitReport}
          >
            <Text style={styles.reportButtonText}>Report</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.tabIndicator} />
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
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
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    marginBottom: 24,
  },
  inputLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  inputField: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 12,
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  issueTypesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    marginHorizontal: -4,
  },
  issueTypeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
  },
  issueTypeButtonSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  issueTypeText: {
    color: 'white',
    fontSize: 14,
  },
  issueTypeTextSelected: {
    color: '#1F1F1F',
    fontWeight: '500',
  },
  reportButton: {
    backgroundColor: '#FFD600',
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 'auto',
  },
  reportButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
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

export default ReportProblemScreen;