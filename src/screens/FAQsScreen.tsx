import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GradientBackground from '../components/GradientBackground';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.faqItem}>
      <TouchableOpacity 
        style={styles.faqQuestion} 
        onPress={() => setExpanded(!expanded)}
      >
        <Text style={styles.faqQuestionText}>{question}</Text>
        <Ionicons 
          name={expanded ? "chevron-up" : "chevron-down"} 
          size={20} 
          color="#FFFFFF" 
        />
      </TouchableOpacity>
      
      {expanded && (
        <View style={styles.faqAnswer}>
          <Text style={styles.faqAnswerText}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const FAQsScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const faqData = [
    {
      question: 'How to use ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
      question: 'How to use ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
      question: 'How to use ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
      question: 'How to use ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
      question: 'How to use ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
  ];

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>FAQs & Quick Tips</Text>
          <View style={styles.searchButton}>
            <Ionicons name="search" size={22} color="#FFFFFF" />
          </View>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>FAQs & Quick Tips</Text>
            <Text style={styles.subtitle}>Answers to your querries</Text>
          </View>

          <View style={styles.faqList}>
            {faqData.map((item, index) => (
              <FAQItem 
                key={index} 
                question={item.question} 
                answer={item.answer} 
              />
            ))}
          </View>
        </ScrollView>
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
    paddingHorizontal: 15,
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#A7A7A7',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'italic',
    marginTop: 5,
  },
  faqList: {
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  faqQuestionText: {
    color: '#FAFAFA',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  faqAnswer: {
    padding: 15,
    paddingTop: 0,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  faqAnswerText: {
    color: '#E4E4E7',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default FAQsScreen;