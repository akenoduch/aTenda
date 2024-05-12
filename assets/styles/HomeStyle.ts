import { Platform, StyleSheet, Dimensions } from "react-native";
import { colors, ThemeColors } from '../../src/utils/colors';

const { height } = Dimensions.get('window');

export const homeStyles = (theme: 'light' | 'dark') => {
  const themeColors: ThemeColors = colors[theme];
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      height: height,
      paddingBottom: Platform.OS === 'android' ? 0 : 0, 
    },
    scrollview: {
      width: '90%', 
      alignSelf: 'center',
      height: '100%'
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '100%'
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF3333',
      borderRadius: 5,
      padding: 40,
      marginTop: 10,
      marginBottom: 10,
      width: '80%'
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 25
    },
    icon: {
      width: 70,
      height: 70,
    },
  });
};
