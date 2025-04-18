import React from 'react';
import {StyleSheet, View} from 'react-native';

const ProgressSteps = ({
  currentStep,
  totalSteps = 5,
}: {
  currentStep: number;
  totalSteps?: number;
}) => {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressLines}>
        {Array.from({length: totalSteps}, (_, index) => (
          <View
            key={index}
            style={[
              styles.progressLine,
              index < currentStep ? styles.completed : styles.incomplete,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20, // 👈 Add horizontal padding
  },
  progressLines: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  progressLine: {
    height: 5,
    width: '18%',
    borderRadius: 5,
  },
  completed: {
    backgroundColor: '#FFFFFF',
  },
  incomplete: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

export default ProgressSteps;
