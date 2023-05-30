import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { database } from '../firebase';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




const auth = getAuth();


const Stack = createStackNavigator();

export default function HealthProfessionalRegistrationScreen({ navigation }) {
  //const navigation = useNavigation();

  const handleGoToHealthProfessionalScreen = () => {
    navigation.navigate('HealthProfessionalScreen');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profession, setProfession] = useState('Selecione uma opção');
  const [location, setLocation] = useState('Selecione uma opção');

  const handleRegister = () => {
    console.log('Botão pressionado');
    if (password !== confirmPassword) {
      alert('As senhas não coincidem. Por favor, verifique novamente.');
    } else {
      // Código de registro do profissional de saúde aqui
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created successfully
        const user = userCredential.user;
        // Add custom user data to the Firebase Realtime Database
        database.ref(`healthProfessionals/${user.uid}`).set({
          name: name,
          profession: profession,
          location: location
        });
        console.log('User created successfully:', user);
        // Navigate to the next screen

        navigation.navigate('Home');
      })
      .catch((error) => {
        // Handle errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error creating user:', errorCode, errorMessage);
      });
    }
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <View style={styles.dropdownContainer}>
  <Text style={styles.dropdownLabel}>Profissão:</Text>
  <ModalDropdown
    options={['Selecione uma opção', 'Enfermeiro(a)', 'Tec. Enfermagem', 'Médico']}
    defaultValue={profession}
    style={styles.dropdown}
    textStyle={styles.dropdownText}
    dropdownStyle={styles.dropdownOptions}
    onSelect={(index, value) => setProfession(value)}
  />
</View>

<View style={styles.dropdownContainer}>
  <Text style={styles.dropdownLabel}>Localidade:</Text>
  <ModalDropdown
    options={['Selecione uma opção', 'Hospital', 'UPA', 'Clínica Médica']}
    defaultValue={location}
    style={styles.dropdown}
    textStyle={styles.dropdownText}
    dropdownStyle={styles.dropdownOptions}
    onSelect={(index, value) => setLocation(value)}
  />
</View>


      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar Profissional</Text>
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
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#1e90ff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonContainer: {
    /*width: '80%',
    marginTop: 16,
    marginBottom: 16,*/
    width: '80%',
    height: 50,
    backgroundColor: '#1e90ff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdown: {
    width: '60%',
    height: 50,
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownOptions: {
    width: '60%',
    height: 150,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});


    /*<View style={styles.buttonContainer}>
      <Button
        title="Ir para tela de registro de profissional de saúde"
        onPress={() => navigation.navigate('HealthProfessionalRegistration')}
      />
    </View> */

    
    /*  <View style={styles.buttonContainer}>
      <Button
        title="Ir para área de profissional de saúde"
        onPress={handleGoToHealthProfessionalScreen}
      />
    </View>  */