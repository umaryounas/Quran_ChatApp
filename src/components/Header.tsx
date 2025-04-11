import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header = ({title, subtitle}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      {subtitle && <Text style={styles.headerSubtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e4e4e7',
    textAlign: 'center',
    fontFamily: 'MontserratRegular',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'MontserratRegular',
  },
});

export default Header;
