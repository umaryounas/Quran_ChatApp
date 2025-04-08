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
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types/navigation';

const width = Dimensions.get('window').width;

const Awareness5Screen = () => {
  const navigation = useNavigation<NavigationProp>();
  const handleNext = () => {
    navigation.navigate('Awareness6Screen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/images/awareness5.png')} 
          style={styles.image} 
          resizeMode="contain" 
        />
      </View>
      
      <Text style={styles.title}>
        Rediscover the miracle of the Qur'an in your life
      </Text>
      
      <View style={styles.checklistContainer}>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={24} color="#6BB577" style={styles.checkIcon} />
          <Text style={styles.checkText}>
            Understand the deeper meanings behind each verse
          </Text>
        </View>
        
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={24} color="#6BB577" style={styles.checkIcon} />
          <Text style={styles.checkText}>
            Find guidance that applies directly to your daily challenges
          </Text>
        </View>
        
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={24} color="#6BB577" style={styles.checkIcon} />
          <Text style={styles.checkText}>
            Feel the comfort and clarity that comes from regular recitation
          </Text>
        </View>
      </View>
      
      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#175CD3',
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
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  checklistContainer: {
    width: '100%',
    marginBottom: 20,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  checkIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  checkText: {
    color: '#e4e4e7',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
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
    // marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Awareness5Screen;