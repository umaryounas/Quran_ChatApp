import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types/navigation';

const ChatWelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  
  const handleChatStart = () => {
    navigation.navigate('ChatScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search-outline" size={22} color="white" />
        </TouchableOpacity>
        
        <View style={styles.titleContainer}>
          <Image 
            source={require('../assets/images/Logo.png')} 
            style={styles.logo} 
          />
          <Text style={styles.title}>QuranChat</Text>
        </View>
        
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="ellipsis-vertical" size={22} color="white" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.illustrationContainer}>
          <Image 
            source={require('../assets/images/quran_illustration.png')} 
            style={styles.illustration} 
            resizeMode="contain"
          />
        </View>
        
        <Text style={styles.heading}>Know more about Quran</Text>
        
        <Text style={styles.subheading}>
          You can ask me all your questions related to Islam. I will be happy to answer them!
        </Text>
        
        {/* Features */}
        <View style={styles.featureCard}>
          <Ionicons name="shield" size={24} color="#FFD700" style={styles.featureIcon} />
          <Text style={styles.featureText}>
            Be comfortable, our discussions are confidential
          </Text>
        </View>
        
        <View style={styles.featureCard}>
          <Ionicons name="book" size={24} color="#7B9CFF" style={styles.featureIcon} />
          <Text style={styles.featureText}>
            I have learned extensively from an Imam of Al-Azhar
          </Text>
        </View>
        
        <View style={styles.featureCard}>
          <Ionicons name="trash" size={24} color="#5AD3BC" style={styles.featureIcon} />
          <Text style={styles.featureText}>
            You can delete our discussions at any time.
          </Text>
        </View>
      </ScrollView>
      
      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.suggestionContainer}>
          <TouchableOpacity style={styles.suggestionButton} onPress={handleChatStart}>
            <Text style={styles.suggestionText}>Show me a verse about gratitude.</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.suggestionButton} onPress={handleChatStart}>
            <Text style={styles.suggestionText}>Show me a verse about gratitude.</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachButton}>
            <Ionicons name="attach" size={24} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.inputField} onPress={handleChatStart}>
            <Text style={styles.inputText}>Ask about life, faith, or the Qur'an...</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.micButton}>
            <Ionicons name="mic" size={24} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.scrollUpButton}>
            <Ionicons name="arrow-up" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3A40',
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  searchButton: {
    padding: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  menuButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: 'center',
  },
  illustrationContainer: {
    marginTop: 24,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
  },
  illustration: {
    width: width * 0.7,
    height: width * 0.7,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    width: '100%',
  },
  featureIcon: {
    marginRight: 12,
  },
  featureText: {
    color: 'white',
    fontSize: 14,
    flex: 1,
  },
  bottomBar: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  suggestionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  suggestionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flex: 0.48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggestionText: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  attachButton: {
    padding: 8,
    marginRight: 8,
  },
  inputField: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
  },
  inputText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
  },
  micButton: {
    padding: 8,
    marginRight: 8,
  },
  scrollUpButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 8,
  },
});

export default ChatWelcomeScreen;