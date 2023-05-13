import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import UserRegistrationScreen from '../screens/UserRegistrationScreen';
import HealthProfessionalRegistrationScreen from '../screens/HealthProfessionalRegistrationScreen';
import PasswordRecoveryScreen from '../screens/PasswordRecoveryScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="UserRegistration"
        component={UserRegistrationScreen}
        options={{ title: 'Cadastro de Usuário' }}
      />
      <Stack.Screen
        name="HealthProfessionalRegistration"
        component={HealthProfessionalRegistrationScreen}
        options={{ title: 'Cadastro de Profissional de Saúde' }}
      />
      <Stack.Screen 
        name="PasswordRecovery" 
        component={PasswordRecoveryScreen}
        options={{ title: 'Recuperar Senha'}} 
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />

    </Stack.Navigator>
  );
}
