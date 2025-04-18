import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
const width = Dimensions.get('window').width;
const Awareness2Screen = () => {
  const navigation = useNavigation<NavigationProp>();
  const handleNext = () => {
    navigation.navigate('Awareness3Screen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/images/awareness2.png')} 
          style={styles.image} 
          resizeMode="contain" 
        />
      </View>
      
      <Text style={styles.title}>
        The Qur'an is the word of Allah—yet it sits unread.
      </Text>
      
      <View style={styles.quoteContainer}>
        <Ionicons name="bulb" size={24} color="#FFD700" style={styles.quoteIcon} />
        <Text style={styles.quoteText}>
          The heart that has no Qur'an is like a ruined house." (Tirmidhi 2913)
        </Text>
      </View>
      
      <View style={styles.statContainer}>
        <Ionicons name="bar-chart" size={24} color="#00BFFF" style={styles.statIcon} />
        <Text style={styles.statText}>
          70% of Muslims wish they had a deeper connection.
        </Text>
      </View>
      
      <View style={styles.warningContainer}>
        <Ionicons name="close" size={30} color="#FFD700" style={styles.warningIcon} />
        <Text style={styles.warningText}>
          A neglected Qur'an leads to a neglected soul.
        </Text>
      </View>
      
      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>I Want to Fix It</Text>
      </TouchableOpacity>
      
      {/* <View style={styles.bottomBar} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AF001E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginTop: 30,
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
  },
  title: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  quoteContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '100%',
    alignItems: 'flex-start',
  },
  quoteIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  quoteText: {
    color: '#e4e4e7',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  statContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center', 
  },
  statIcon: {
    marginRight: 10,
    marginTop: 2, 
    
  },
  statText: {
    color: '#e4e4e7',
    fontSize: 14,
    fontWeight: '500',
  },
  warningContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center', // Changed to center
  },
  warningIcon: {
    marginRight: 10,
    marginTop: 2, // Added to match
  },
  warningText: {
    color: '#e4e4e7',
    fontSize: 14,
    fontWeight: '500',
  },
  dotsContainer: {
    marginTop: 130,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 5,
  },
  activeDot: {
    width: 24,
    height: 8,
    backgroundColor: '#FFD700',
  },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomBar: {
    width: 80,
    height: 5,
    backgroundColor: 'white',
    borderRadius: 3,
  },
});

export default Awareness2Screen;