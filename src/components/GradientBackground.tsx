import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type GradientBackgroundProps = {
  children: React.ReactNode;
  colors?: string[];
  locations?: number[];
};

const GradientBackground = ({
  children,
  colors = ['#0A333A', '#0F4A4A', '#1A5A52', '#236952'],
  locations = [0, 0.3, 0.6, 1],
}: GradientBackgroundProps) => {
  return (
    <LinearGradient
      colors={colors}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      locations={locations}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default GradientBackground;
