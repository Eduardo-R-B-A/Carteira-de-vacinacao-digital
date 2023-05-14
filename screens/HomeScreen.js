import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ username, navigation }) => {
  return (
    <View>
      <Text>Bem-vindo(a), {username}!</Text>
      <Button title="Cadastrar usuário" onPress={() => navigation.navigate('UserRegistration')} />
      <Button title="Cadastrar profissional da saúde" onPress={() => navigation.navigate('HealthProfessionalRegistration')} />
      <Button title="Recuperar senha" onPress={() => navigation.navigate('PasswordRecovery')} />
      <Button title="Perfil" onPress={() => navigation.navigate('handleLoginPress')} />
      <Button title="Área de profissional da saúde" onPress={() => navigation.navigate('HealthProfessional')} />
    </View>
  );
};



export default HomeScreen;
