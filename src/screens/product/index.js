import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Product() {
  return (
    <View style={styles.container}>
      <Text>Producto</Text>      
    </View>
  );
}

