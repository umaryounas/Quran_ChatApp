import React from 'react';
import { StyleSheet, View } from 'react-native';

const ContentContainer = ({ children, style }: { children: React.ReactNode; style?: object }) => {
  return (
    <View style={[styles.contentContainer, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ContentContainer;