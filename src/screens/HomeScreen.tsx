import React, { FunctionComponent } from 'react';  
import { View, TouchableOpacity, Text, useColorScheme } from 'react-native';
import Header from '../components/Header';
import SidebarMenu from '../components/SidebarMenu';
import { homeStyles } from '../../assets/styles/HomeStyle';
import { StatusBar } from 'expo-status-bar';

const HomeScreen: FunctionComponent = () => {
  const [menuVisible, setMenuVisible] = React.useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';
  const styles = homeStyles(isDarkMode ? 'dark' : 'light');
  
  // Handlers for button actions can be added here
  const handleButtonPress = (buttonNumber: number) => {
    console.log(`Button ${buttonNumber} pressed`);
    // Additional actions based on the Firebase can be triggered here
  };

  return (
    <>
      <StatusBar style="light" backgroundColor="#272430" />
      <View style={styles.container}>
        {menuVisible && <SidebarMenu onClose={() => setMenuVisible(false)} />}
        <Header onOpenMenu={() => setMenuVisible(true)} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(1)}>
            <Text style={styles.buttonText}>Agendamento</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(2)}>
            <Text style={styles.buttonText}>Exames</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(3)}>
            <Text style={styles.buttonText}>Acesse nosso site</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
