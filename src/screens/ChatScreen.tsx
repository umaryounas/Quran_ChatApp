import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NavigationProp} from '../types/navigation';
import {useDispatch, useSelector} from 'react-redux';
import {
  sendMessage,
  selectMessages,
  selectIsLoading,
  clearChat,
} from '../store/chatSlice';
import {RootState, AppDispatch} from '../store/store';

const ChatScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector(selectMessages);
  const isLoading = useSelector(selectIsLoading);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    dispatch(clearChat());
    const initialQuestion = (route.params as {initialQuestion?: string})
      ?.initialQuestion;
    if (initialQuestion) {
      dispatch(sendMessage(initialQuestion));
    }
  }, [dispatch, route.params]);

  const handleSend = async () => {
    if (inputText.trim()) {
      await dispatch(sendMessage(inputText));
      setInputText('');
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({animated: true});
    }
  }, [messages]);

  const renderMessage = ({item}: {item: any}) => (
    <View
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
        {item.content}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F3A40" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.searchButton}>
          <Ionicons name="arrow-back" size={22} color="white" />
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.messagesContainer}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type your message..."
            placeholderTextColor="#666"
            multiline
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSend}
            disabled={isLoading}>
            <Ionicons
              name="send"
              size={24}
              color={isLoading ? '#666' : '#007AFF'}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.suggestionContainer}>
          <TouchableOpacity style={styles.suggestionButton}>
            <Text style={styles.suggestionText}>
              Show me a verse about gratitude.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.suggestionButton}>
            <Text style={styles.suggestionText}>
              Show me a verse about gratitude.
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachButton}>
            <Ionicons name="attach" size={24} color="white" />
          </TouchableOpacity>

          <View style={styles.inputField}>
            <Text style={styles.inputText}>
              Ask about life, faith, or the Qur'an...
            </Text>
          </View>

          <TouchableOpacity style={styles.micButton}>
            <Ionicons name="mic" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.scrollUpButton}
            onPress={() => navigation.navigate('SettingsScreen')}>
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
    color: '#fff',
    fontSize: 16,
  },
  userMessageText: {
    color: '#fff',
  },
  assistantMessageText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
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
  attachButton: {
    padding: 8,
    marginRight: 8,
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
