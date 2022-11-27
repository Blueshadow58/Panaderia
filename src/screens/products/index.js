import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';

export default function Products({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Productos</Text>
      <Button title='Ir al producto' color={'#dac4f7'} onPress={()=> navigation.navigate('Product')} />
    </View>
  );
}

