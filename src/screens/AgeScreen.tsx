import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import { UserData } from '../types';
import { NavigationProp } from '../types/navigation';

const { width } = Dimensions.get('window');

const AgeScreen = ({ route }: { route: any }) => {
  const { userData = {} } = route.params || {};
  const [selectedAge, setSelectedAge] = useState<number>(userData.age || 25);
  const navigation = useNavigation<NavigationProp>();
  const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1); // Ages 1-100
  
  const flatListRef = useRef<FlatList>(null);
  const itemHeight = 60; // Height of each age item

  // Scroll to the selected age when the component mounts
  useEffect(() => {
    if (flatListRef.current) {
      // Add a slight delay to ensure the FlatList has rendered
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          index: selectedAge - 1,
          animated: false,
          viewPosition: 0.5, // Center the item
        });
      }, 100);
    }
  }, []);

  const handleContinue = () => {
    const updatedUserData: UserData = {
      ...userData,
      age: selectedAge,
    };

    navigation.navigate('GenderScreen', { userData: updatedUserData });
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    const updatedUserData: UserData = {
      ...userData,
      age: null,
    };
    navigation.navigate('GenderScreen', { userData: updatedUserData });
  };

  const handleScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / itemHeight);
    if (index >= 0 && index < ageOptions.length) {
      setSelectedAge(ageOptions[index]);
    }
  };

  const renderAgeItem = ({ item, index }: { item: number; index: number }) => {
    const isSelected = item === selectedAge;
    
    return (
      <TouchableOpacity
        style={[
          styles.ageItem,
          isSelected && styles.selectedAgeItem,
        ]}
        onPress={() => {
          setSelectedAge(item);
          flatListRef.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5, // Center the item
          });
        }}
      >
        <Text
          style={[
            styles.ageText,
            isSelected ? styles.selectedAgeText : styles.unselectedAgeText,
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={50}
      >
        <SafeAreaView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '18%' }]} />
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            <Text style={styles.question}>How old are you?</Text>
            <Text style={styles.subtitle}>Enter your age.</Text>

            {/* Age Picker */}
            <View style={styles.agePickerContainer}>
              <View style={styles.agePickerHighlight} />
              <FlatList
                ref={flatListRef}
                data={ageOptions}
                renderItem={renderAgeItem}
                keyExtractor={(item) => item.toString()}
                showsVerticalScrollIndicator={false}
                onMomentumScrollEnd={handleScroll}
                getItemLayout={(data, index) => ({
                  length: itemHeight,
                  offset: itemHeight * index,
                  index,
                })}
                snapToInterval={itemHeight}
                snapToAlignment="center"
                decelerationRate="fast"
                contentContainerStyle={styles.agePickerContent}
                ListHeaderComponent={<View style={{ height: itemHeight * 2 }} />}
                ListFooterComponent={<View style={{ height: itemHeight * 2 }} />}
              />
            </View>
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
          
          {/* Home Indicator */}
          {/* <View style={styles.homeIndicator}>
            <View style={styles.homeIndicatorBar} />
          </View> */}
        </SafeAreaView>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  backButton: {
    padding: 0,
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
  },
  skipText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  progressContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#FFD700',
  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 16,
  },
  question: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 30,
  },
  agePickerContainer: {
    width: '100%',
    height: 60 * 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  agePickerHighlight: {
    position: 'absolute',
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 8,
    zIndex: 1,
  },
  agePickerContent: {
    paddingHorizontal: 16,
  },
  ageItem: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  selectedAgeItem: {
    // No background color here as we're using the highlight overlay
  },
  ageText: {
    fontSize: 20,
  },
  selectedAgeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  unselectedAgeText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 18,
  },
  continueButton: {
    backgroundColor: '#FFD700',
    width: '90%',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  continueButtonText: {
    color: '#0A333A',
    fontWeight: 'bold',
    fontSize: 16,
  },
  homeIndicator: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  homeIndicatorBar: {
    width: 134,
    height: 5,
    backgroundColor: 'white',
    borderRadius: 2.5,
  },
});

export default AgeScreen;