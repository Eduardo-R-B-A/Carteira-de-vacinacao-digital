import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ username, navigation }) => {
  return (
    <View>
      <Text>Bem-vindo(a), {username}!</Text>
      <Button title="Cadastrar usuário" onPress={() => navigation.navigate('UserRegistration')} />
      <Button title="Cadastrar profissional da saúde" onPress={() => navigation.navigate('HealthProfessionalRegistration')} />
      <Button title="Recuperar senha" onPress={() => navigation.navigate('PasswordRecovery')} />
    </View>
  );
};

export default HomeScreen;
