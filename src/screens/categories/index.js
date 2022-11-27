import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';

export default function Categories({navigation}) {
  
  return (
    <View style={styles.container}>
      <Text>Categorias</Text>
      <Button title='Ir a los productos' color={'#dac4f7'} onPress={()=> navigation.navigate('Products')} />
    </View>
  );
}

