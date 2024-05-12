import { StyleSheet  } from "react-native";
import { colors, ThemeColors } from '../../src/utils/colors';


export const headerStyles = (theme: 'light' | 'dark') => {
  const themeColors: ThemeColors = colors[theme];
  
  return StyleSheet.create({
    header: {
      height: 180,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    menu: {
      width: 30,
      height: 30,
      alignSelf:'flex-start',
      position: 'absolute',
      top: 40,
      right: 15,
      zIndex: 99,
    },
    menuImg: {
      height: 25,
      width: 25,
    },
    headerImg: {
      position: 'absolute',
      width: '70%',
      height: '60%',
    },
  });
};