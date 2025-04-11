import React, {useState, useRef, useEffect} from 'react';
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
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store/store';
import {logout} from '../store/authSlice';
import {
  sendMessage,
  selectIsLoading,
  clearChat,
  fetchAllChats,
  selectCurrentChatId,
} from '../store/chatSlice';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/navigation';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fetchAllMessages, selectMessages} from '../store/messageSlice';
import {unsubscribeMessageQuery} from '../store/subscribeMessage';
import _ from 'lodash';
import {fontStyles} from '../theme/fonts';

const {width} = Dimensions.get('window');

const ChatWelcomeScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();
  const [question, setQuestion] = useState('');
  const messages = useAppSelector(selectMessages);
  const currentChatId = useAppSelector(selectCurrentChatId);
  const isLoading = useAppSelector(selectIsLoading);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    return () => dispatch(unsubscribeMessageQuery());
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({animated: true});
    }
  }, [messages]);

  const handleSend = async () => {
    if (question.trim()) {
      try {
        await dispatch(sendMessage({message: question})).unwrap();
        setQuestion('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const handleSuggestion = (suggestion: string) => {
    setQuestion(suggestion);
    handleSend();
  };

  const renderMessage = ({item}: {item: any}) => {
    return (
      <View
        key={item.id}
        style={[
          styles.messageContainer,
          item.role === 'user' ? styles.userMessage : styles.assistantMessage,
        ]}>
        <Text
          style={[
            styles.messageText,
            item.role === 'user'
              ? styles.userMessageText
              : styles.assistantMessageText,
          ]}>
          {item.message}
        </Text>
      </View>
    );
  };

  return (
    <MenuProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation?.dispatch(DrawerActions.openDrawer());
            }}
            style={styles.searchButton}>
            <Ionicons name="menu" size={22} color="white" />
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Image
              source={require('../assets/images/Logo.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>QuranChat</Text>
          </View>

          <Menu>
            <MenuTrigger>
              <TouchableOpacity style={styles.menuButton}>
                <Ionicons name="ellipsis-vertical" size={22} color="white" />
              </TouchableOpacity>
            </MenuTrigger>
            <MenuOptions
              customStyles={{
                optionsContainer: {width: 130, borderRadius: 10, marginTop: 25},
              }}>
              <MenuOption
                onSelect={() => navigation.navigate('SettingsScreen')}>
                <View style={styles.menuItem}>
                  <Ionicons name="settings-outline" size={17} color="#333" />
                  <Text style={styles.menuItemText}>Settings</Text>
                </View>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          {messages.length === 0 ? (
            <ScrollView
              style={styles.content}
              contentContainerStyle={styles.contentContainer}>
              <View style={styles.illustrationContainer}>
                <Image
                  source={require('../assets/images/quran_illustration.png')}
                  style={styles.illustration}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.heading}>Know more about Quran</Text>

              <Text style={styles.subheading}>
                You can ask me all your questions related to Islam. I will be
                happy to answer them!
              </Text>

              {/* Features */}
              <View style={styles.featureCard}>
                <Ionicons
                  name="shield"
                  size={24}
                  color="#FFD700"
                  style={styles.featureIcon}
                />
                <Text style={styles.featureText}>
                  Be comfortable, our discussions are confidential
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Ionicons
                  name="book"
                  size={24}
                  color="#7B9CFF"
                  style={styles.featureIcon}
                />
                <Text style={styles.featureText}>
                  I have learned extensively from an Imam of Al-Azhar
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Ionicons
                  name="trash"
                  size={24}
                  color="#5AD3BC"
                  style={styles.featureIcon}
                />
                <Text style={styles.featureText}>
                  You can delete our discussions at any time.
                </Text>
              </View>
            </ScrollView>
          ) : (
            <FlatList
              ref={flatListRef}
              data={_.unionBy(messages, 'id')}
              renderItem={renderMessage}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.messagesContainer}
            />
          )}

          {/* Bottom Bar */}
          <View style={styles.bottomBar}>
            {messages.length === 0 && (
              <View style={styles.suggestionContainer}>
                <TouchableOpacity
                  style={styles.suggestionButton}
                  onPress={() =>
                    handleSuggestion('Show me a verse about gratitude.')
                  }>
                  <Text style={styles.suggestionText}>
                    Show me a verse about gratitude.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.suggestionButton}
                  onPress={() =>
                    handleSuggestion('What does the Quran say about patience?')
                  }>
                  <Text style={styles.suggestionText}>
                    What does the Quran say about patience?
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <View style={styles.inputContainer}>
              <TouchableOpacity style={styles.attachButton}>
                <Ionicons name="attach" size={24} color="white" />
              </TouchableOpacity>

              <TextInput
                style={styles.inputField}
                placeholder="Ask about life, faith, or the Qur'an..."
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                value={question}
                onChangeText={setQuestion}
                onSubmitEditing={handleSend}
                returnKeyType="send"
              />

              <TouchableOpacity style={styles.micButton}>
                <Ionicons name="mic" size={24} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSend}
                style={styles.scrollUpButton}>
                <Ionicons name="arrow-up" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3A40',
  },
  header: {
    marginTop: 0,
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
    ...fontStyles.semiBold,
  },
  menuButton: {
    padding: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
  menuItemText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
    ...fontStyles.regular,
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
    ...fontStyles.bold,
  },
  subheading: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
    ...fontStyles.regular,
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
    ...fontStyles.regular,
  },
  messagesContainer: {
    padding: 16,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  messageText: {
    fontSize: 16,
    ...fontStyles.regular,
  },
  userMessageText: {
    color: '#fff',
    ...fontStyles.regular,
  },
  assistantMessageText: {
    color: '#000',
    ...fontStyles.regular,
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
    ...fontStyles.regular,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attachButton: {
    padding: 8,
    marginRight: 8,
  },
  inputField: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 16,
    color: 'white',
    marginHorizontal: 8,
    ...fontStyles.regular,
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
