import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types/navigation';

const ChatScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F3A40" />
      
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
      
      {/* Status Bar */}
      {/* <View style={styles.statusBar}>
        <Text style={styles.statusTime}>9:41</Text>
        <View style={styles.statusIcons}>
          <Ionicons name="cellular" size={16} color="white" />
          <Ionicons name="wifi" size={16} color="white" style={styles.statusIcon} />
          <Ionicons name="battery-full" size={16} color="white" style={styles.statusIcon} />
        </View>
      </View> */}
      
      {/* Chat Messages */}
      <ScrollView style={styles.chatContainer} contentContainerStyle={styles.chatContent}>
        {/* Assistant Message */}
        <View style={styles.assistantMessageContainer}>
          <View style={styles.assistantMessage}>
            <Text style={styles.messageText}>
              Peace be upon you! May this journey bring you closer to the wisdom of the Quran. How can I help you today?
            </Text>
          </View>
        </View>
        
        {/* User Message */}
        <View style={styles.userMessageContainer}>
          <View style={styles.userMessage}>
            <Text style={styles.userMessageText}>
              Give me the translation of Surah Al-Fatiha.
            </Text>
          </View>
        </View>
        
        {/* Assistant Response */}
        <View style={styles.assistantMessageContainer}>
          <View style={styles.assistantMessage}>
            <Text style={styles.messageText}>
              In the name of Allah, the Most Gracious, the Most Merciful.{'\n\n'}
              All praise is for Allah, the Lord of all worlds.{'\n\n'}
              The Most Gracious, the Most Merciful.{'\n\n'}
              Master of the Day of Judgment.{'\n\n'}
              You alone we worship, and You alone we ask for help.{'\n\n'}
              Guide us on the Straight Path.{'\n\n'}
              The path of those who have received Your grace, not the path of those who have earned Your anger or gone astray.{'\n\n'}
            </Text>
            <Text style={styles.messageTextQuestion}>
              Would you like the Tafsir (explanation) of this Surah?
            </Text>
            <TouchableOpacity style={styles.readMoreButton}>
              <Text style={styles.readMoreText}>Read more</Text>
            </TouchableOpacity>
            <Text style={styles.messageTimestamp}>10:42 am</Text>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.suggestionContainer}>
          <TouchableOpacity style={styles.suggestionButton}>
            <Text style={styles.suggestionText}>Show me a verse about gratitude.</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.suggestionButton}>
            <Text style={styles.suggestionText}>Show me a verse about gratitude.</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachButton}>
            <Ionicons name="attach" size={24} color="white" />
          </TouchableOpacity>
          
          <View style={styles.inputField}>
            <Text style={styles.inputText}>Ask about life, faith, or the Qur'an...</Text>
          </View>
          
          <TouchableOpacity style={styles.micButton}>
            <Ionicons name="mic" size={24} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.scrollUpButton} onPress={() => navigation.navigate('SettingsScreen')}>
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
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  statusTime: {
    color: 'white',
    fontWeight: '500',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginLeft: 6,
  },
  chatContainer: {
    flex: 1,
  },
  chatContent: {
    padding: 16,
  },
  assistantMessageContainer: {
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  assistantMessage: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    borderTopLeftRadius: 4,
    padding: 12,
    maxWidth: '85%',
  },
  messageText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  messageTextQuestion: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
  },
  userMessageContainer: {
    marginBottom: 16,
    alignItems: 'flex-end',
  },
  userMessage: {
    backgroundColor: '#FFCC00',
    borderRadius: 16,
    borderTopRightRadius: 4,
    padding: 12,
    maxWidth: '85%',
  },
  userMessageText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  readMoreButton: {
    marginTop: 8,
  },
  readMoreText: {
    color: '#FFCC00',
    fontSize: 14,
    fontWeight: '500',
  },
  messageTimestamp: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 11,
    marginTop: 4,
    textAlign: 'right',
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

export default ChatScreen;