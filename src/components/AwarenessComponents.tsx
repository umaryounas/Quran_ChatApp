import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageSourcePropType } from 'react-native';
import PrimaryButton from './Button';

const { width } = Dimensions.get('window');

// Quote component with light bulb symbol
interface QuoteProps {
  text: string;
  source: string;
}

export const Quote = ({ text, source }: QuoteProps) => {
  return (
    <View style={styles.quoteContainer}>
      <View style={styles.quoteIconContainer}>
        <Text style={styles.lightBulbIcon}>💡</Text>
      </View>
      <Text style={styles.quoteText}>
        {text} <Text style={styles.quoteSource}>{source}</Text>
      </Text>
    </View>
  );
};

// Stat component with chat or chart symbol
interface StatProps {
  text: string;
  iconType: 'chat' | 'chart';
}

export const Stat = ({ text, iconType }: StatProps) => {
  // Use appropriate symbol based on type
  const iconSymbol = iconType === 'chat' ? '💬' : '📊';
    
  return (
    <View style={styles.statContainer}>
      <View style={styles.statIconContainer}>
        <Text style={styles.statIcon}>{iconSymbol}</Text>
      </View>
      <Text style={styles.statText}>{text}</Text>
    </View>
  );
};

// Warning component with X symbol
interface WarningProps {
  text: string;
}

export const Warning = ({ text }: WarningProps) => {
  return (
    <View style={styles.warningContainer}>
      <View style={styles.warningIconContainer}>
        <Text style={styles.warningIcon}>❌</Text>
      </View>
      <Text style={styles.warningText}>{text}</Text>
    </View>
  );
};

// Progress dots component
interface ProgressDotsProps {
  currentPage: number;
  totalPages: number;
}

export const ProgressDots = ({ currentPage, totalPages }: ProgressDotsProps) => {
  const dots = [];
  
  for (let i = 0; i < totalPages; i++) {
    dots.push(
      <View 
        key={i} 
        style={[
          styles.dot, 
          i === currentPage ? styles.activeDot : styles.inactiveDot
        ]}
      />
    );
  }
  
  return (
    <View style={styles.dotsContainer}>
      {dots}
    </View>
  );
};

// Main illustration component
interface IllustrationProps {
  source: ImageSourcePropType;
}

export const Illustration = ({ source }: IllustrationProps) => {
  return (
    <View style={styles.illustrationContainer}>
      <Image
        source={source}
        style={styles.illustration}
        resizeMode="contain"
      />
    </View>
  );
};

// Awareness content component that combines all elements
interface AwarenessContentProps {
  title: string;
  illustration: ImageSourcePropType;
  quote: {
    text: string;
    source: string;
  };
  stat: {
    text: string;
    iconType: 'chat' | 'chart';
  };
  warning: {
    text: string;
  };
  currentPage: number;
  onPress: () => void;
}

export const AwarenessContent = ({
  title,
  illustration,
  quote,
  stat,
  warning,
  currentPage,
  onPress,
}: AwarenessContentProps) => {
  return (
    <View style={styles.container}>
      {/* Main Illustration */}
      <Illustration source={illustration} />
      
      {/* Title */}
      <Text style={styles.title}>{title}</Text>
      
      {/* Points Section */}
      <View style={styles.pointsContainer}>
        <Quote text={quote.text} source={quote.source} />
        <Stat text={stat.text} iconType={stat.iconType} />
        <Warning text={warning.text} />
      </View>
      
      {/* Progress Dots */}
      <ProgressDots currentPage={currentPage} totalPages={3} />
      
      {/* Button */}
      <PrimaryButton
        title="I Want to Fix It"
        onPress={onPress}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingTop: 30,
  },
  illustrationContainer: {
    width: width * 0.5,
    height: width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  pointsContainer: {
    width: '85%',
    marginBottom: 20,
  },
  quoteContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  quoteIconContainer: {
    marginRight: 10,
    width: 24,
    alignItems: 'center',
  },
  lightBulbIcon: {
    fontSize: 18,
  },
  quoteText: {
    flex: 1,
    color: 'white',
    fontSize: 14,
  },
  quoteSource: {
    fontStyle: 'italic',
    color: '#ddd',
  },
  statContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  statIconContainer: {
    marginRight: 10,
    width: 24,
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 18,
  },
  statText: {
    flex: 1,
    color: 'white',
    fontSize: 14,
  },
  warningContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  warningIconContainer: {
    marginRight: 10,
    width: 24,
    alignItems: 'center',
  },
  warningIcon: {
    fontSize: 18,
  },
  warningText: {
    flex: 1,
    color: 'white',
    fontSize: 14,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#FFD700',
  },
  inactiveDot: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  button: {
    width: width * 0.8,
  },
});