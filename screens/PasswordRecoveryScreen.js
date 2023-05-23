import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';


export default function PasswordRecoveryScreen() {
    const [email, setEmail] = useState('');
  
    const handleRecovery = () => {
      // Lógica para enviar o e-mail de recuperação de senha

      // Exemplo: Verificar se o e-mail foi preenchido
    if (!email) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Digite seu e-mail',
        visibilityTime: 3000,
      });
      return;
    }

    // Exemplo: Enviar o e-mail de recuperação de senha
    const sendRecoveryEmail = () =>{
      
    };

    // Exibir a mensagem de sucesso
    Toast.show({
      type: 'success',
      text1: 'Link enviado com sucesso!',
      visibilityTime: 3000,
    });
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
        <Toast ref={(ref) => Toast.setRef(ref)} />
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
  