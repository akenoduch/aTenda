import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, useColorScheme } from 'react-native';
import { headerStyles } from '../../assets/styles/HeaderStyle';
import moment from 'moment';
import 'moment/locale/pt-br';
import { textVariants } from '../utils/textVariants';

moment.locale('pt-br');

const Header: React.FC<{ onOpenMenu: () => void}> = ({ onOpenMenu}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const scheme = useColorScheme();
  const theme = scheme !== 'dark' ? 'light' : 'dark';
  const textStyles = textVariants(theme);
  const styles = headerStyles(theme);
  
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onOpenMenu} style={styles.menu}>
        <Image source={require('../../assets/icons/menu.png')} style={styles.menuImg}/>
      </TouchableOpacity>
      <Image source={require('../../assets/logo/logoATenda.png')} style={styles.headerImg} />
    </View>
  );
};
export default Header;
