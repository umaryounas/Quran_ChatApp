import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import {NavigationProp} from '../types/navigation';
import {User} from '../data/models/domain/user';

const itemHeight = 60;
const visibleItems = 5;
const verticalPadding = itemHeight * ((visibleItems - 1) / 2);

const AgeScreen = ({route}: {route: any}) => {
  const {userData = {}} = route.params || {};
  const navigation = useNavigation<NavigationProp>();
  const ageOptions = Array.from({length: 83}, (_, i) => i + 18);

  const [selectedAge, setSelectedAge] = useState<number>(userData.age || 25);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const indexToScrollTo = ageOptions.indexOf(selectedAge);
    if (indexToScrollTo !== -1) {
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          index: indexToScrollTo,
          animated: false,
        });
      }, 100);
    }
  }, []);

  const handleContinue = () => {
    const updatedUserData: User = {
      ...userData,
      age: selectedAge,
    };
    navigation.navigate('GenderScreen', {userData: updatedUserData});
  };

  const handleSkip = () => {
    const updatedUserData: User = {
      ...userData,
      age: null,
    };
    navigation.navigate('GenderScreen', {userData: updatedUserData});
  };

  const handleBack = () => navigation.goBack();

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / itemHeight);
    if (index >= 0 && index < ageOptions.length) {
      setSelectedAge(ageOptions[index]);
    }
  };

  const renderAgeItem = ({item, index}: {item: number; index: number}) => {
    const isSelected = item === selectedAge;
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedAge(item);
          flatListRef.current?.scrollToIndex({index, animated: true});
        }}
        style={styles.ageItem}>
        <Text
          style={[
            styles.ageText,
            isSelected ? styles.selectedAgeText : styles.unselectedAgeText,
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const onScrollToIndexFailed = (info: {
    index: number;
    highestMeasuredFrameIndex: number;
    averageItemLength: number;
  }) => {
    flatListRef.current?.scrollToOffset({
      offset: info.index * itemHeight,
      animated: false,
    });
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index: info.index,
        animated: true,
      });
    }, 300);
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={50}>
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

          {/* Progress */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, {width: '18%'}]} />
            </View>
          </View>

          {/* Question */}
          <View style={styles.content}>
            <Text style={styles.question}>How old are you?</Text>
            <Text style={styles.subtitle}>Enter your age.</Text>

            {/* Picker */}
            <View style={styles.agePickerContainer}>
              <View style={styles.agePickerHighlight} />
              <FlatList
                ref={flatListRef}
                data={ageOptions}
                renderItem={renderAgeItem}
                keyExtractor={item => item.toString()}
                showsVerticalScrollIndicator={false}
                snapToInterval={itemHeight}
                decelerationRate="fast"
                snapToAlignment="center"
                contentContainerStyle={{paddingVertical: verticalPadding}}
                getItemLayout={(data, index) => ({
                  length: itemHeight,
                  offset: itemHeight * index,
                  index,
                })}
                onMomentumScrollEnd={handleScrollEnd}
                onScrollEndDrag={handleScrollEnd}
                onScrollToIndexFailed={onScrollToIndexFailed}
              />
            </View>
          </View>

          {/* Continue */}
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 16,
    marginTop: 50,
  },
  backButtonText: {
    fontSize: 24,
    color: 'white',
  },
  skipText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    marginTop: 10,
  },
  progressContainer: {
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
    paddingHorizontal: 16,
    width: '100%',
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    fontFamily: 'MontserratRegular',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
    fontFamily: 'MontserratRegular',
  },
  agePickerContainer: {
    height: itemHeight * visibleItems,
    justifyContent: 'center',
    position: 'relative',
  },
  agePickerHighlight: {
    position: 'absolute',
    height: itemHeight,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 8,
    zIndex: 1,
  },
  ageItem: {
    height: itemHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ageText: {
    fontSize: 20,
  },
  selectedAgeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  unselectedAgeText: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.5)',
  },
  continueButton: {
    backgroundColor: '#FFD700',
    width: '90%',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A333A',
    fontFamily: 'MontserratRegular',
  },
});

export default AgeScreen;
