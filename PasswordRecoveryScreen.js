import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function PasswordRecoveryScreen() {
    const [email, setEmail] = useState('');
  
    const handleRecovery = () => {
      // Lógica para enviar o e-mail de recuperação de senha
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recuperar Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TouchableOpacity style={styles.button} onPress={handleRecovery}>
          <Text style={styles.buttonText}>Recuperar Senha</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 50,
      backgroundColor: '#eee',
      borderRadius: 8,
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    button: {
      width: '80%',
      height: 50,
      backgroundColor: '#1e90ff',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  