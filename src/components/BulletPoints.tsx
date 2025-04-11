import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

interface BulletPointProps {
  text: string;
  iconSource?: any;
}

const BulletPoint = ({text, iconSource}: BulletPointProps) => {
  return (
    <View style={styles.bulletContainer}>
      {iconSource ? (
        <Image
          source={iconSource}
          style={styles.bulletIcon}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.bulletDot} />
      )}
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    width: '100%',
  },
  bulletDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFD700',
    marginRight: 10,
  },
  bulletIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  bulletText: {
    color: '#f4f4f5',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'MontserratRegular',
  },
});

export default BulletPoint;
