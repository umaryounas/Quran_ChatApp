import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import { NavigationProp } from '../types/navigation';

const { width, height } = Dimensions.get('window');

const JoinThousandsScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const testimonials = [
    {
      id: '1',
      name: 'Adam',
      location: 'Malaysia',
      quote: '"AI changed my life and my connection to islam"',
      rating: 5,
      avatar: require('../assets/images/img1.jpeg'),
    },
    {
      id: '2',
      name: 'M Ahmad',
      location: 'UAE',
      quote: '"It\'s like having an AI Islamic mentor available 24/7"',
      rating: 5,
      avatar: require('../assets/images/img2.jpeg'),
    },
    {
      id: '3',
      name: 'Musa',
      location: 'Canada',
      quote: '"I struggled with focus in Salah. Qur\'an Chat gave me the tools to change that"',
      rating: 5,
      avatar: require('../assets/images/img3.jpeg'),
    },
  ];

  const handleJoin = () => {
    navigation.navigate('CostExplanationScreen');
  };

  interface Testimonial {
    id: string;
    name: string;
    location: string;
    quote: string;
    rating: number;
    avatar: any; 
  }
  
  const renderTestimonial = ({ item }: { item: Testimonial }) => (
    <View style={styles.testimonialCard}>
      <View style={styles.testimonialHeader}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={styles.testimonialHeaderText}>
          <Text style={styles.testimonialName}>{item.name}</Text>
          <Text style={styles.testimonialLocation}>{item.location}</Text>
        </View>
        <View style={styles.ratingContain}>
          {Array(5).fill(0).map((_, i) => (
            <Text key={i} style={styles.starIcon}>★</Text>
          ))}
        </View>
      </View>
      <Text style={styles.testimonialQuote}>{item.quote}</Text>
    </View>
  );

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.ratingContainer}>
                    <Image 
                      source={require('../assets/images/stars.png')} 
                      style={styles.starsWingsImage} 
                      resizeMode="contain"
                    />
                  </View>

          <Text style={styles.title}>Join Thousands Who Are Transforming Their Faith</Text>
          <Text style={styles.subtitle}>
            Thousands of Muslims around the world are already using AI to deepen their connection with the Qur'an. Here's what they say
          </Text>

          <FlatList
            data={testimonials}
            renderItem={renderTestimonial}
            keyExtractor={item => item.id}
            style={styles.testimonialsList}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Users say they feel more connected to the Qur'an in just 7 days</Text>
            <TouchableOpacity style={styles.joinButton} onPress={handleJoin}>
              <Text style={styles.joinButtonText}>I Want to Join Them</Text>
            </TouchableOpacity>
            
          </View>
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
  content: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//     marginBottom: 10,
//   },
  wingLeft: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
  },
  wingRight: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
  },
  starsContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  starIcon: {
    color: '#FFD700',
    fontSize: 18,
    marginHorizontal: 2,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.9,
  },
  testimonialsList: {
    width: '100%',
    marginBottom: 20,
  },
  ratingContainer: {
    marginTop: 20,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
  },
  starsWingsImage: {
    width: width * 0.8,
    height: width * 0.3,
  },
  testimonialCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 10,
    marginBottom: 25,
  },
  testimonialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  testimonialHeaderText: {
    marginLeft: 10,
    flex: 1,
  },
  testimonialName: {
    color: '#FAFAFA',
    fontWeight: 'bold',
    fontSize: 16,
  },
  testimonialLocation: {
    color: '#D1D1D6',
    opacity: 0.8,
    fontSize: 12,
  },
  ratingContain: {
    flexDirection: 'row',
  },
  testimonialQuote: {
    color: '#F4F4F5',
    fontSize: 14,
    fontStyle: 'italic',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  footerText: {
    color: '#e4e4e7',
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 15,
  },
  joinButton: {
    marginTop: 15,
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    
  },
  joinButtonText: {
    color: '#0A333A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressDots: {
    flexDirection: 'row',
    marginTop: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 20,
  },
});

export default JoinThousandsScreen;