import {Platform} from 'react-native';

export const fontFamilies = {
  MONTSERRAT: {
    normal: Platform.OS === 'ios' ? 'Montserrat-Regular' : 'MontserratRegular',
    medium: Platform.OS === 'ios' ? 'Montserrat-Medium' : 'MontserratMedium',
    bold: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'MontserratBold',
  },
  RUBIK: {
    normal: Platform.OS === 'ios' ? 'Rubik-Regular' : 'RubikRegular',
    medium: Platform.OS === 'ios' ? 'Rubik-Medium' : 'RubikMedium',
    bold: Platform.OS === 'ios' ? 'Rubik-Bold' : 'RubikBold',
  },
  // Adjust the above code to fit your chosen fonts' names
};
