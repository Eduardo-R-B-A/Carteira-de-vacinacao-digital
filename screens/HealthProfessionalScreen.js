import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { getAuth } from 'firebase/auth';
import { database } from '../firebase';
import { getDatabase, ref, child, get } from 'firebase/database';
import ModalDropdown from 'react-native-modal-dropdown';




const auth = getAuth();



  const HealthProfessionalScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profession, setProfession] = useState('');
    const [location, setLocation] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [cpf, setCpf] = useState('');
    const [userInfo, setUserInfo] = useState(null);

  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const userRef = ref(database, 'Professional/professional1'); // Substitua 'professional1' pela chave ou ID do profissional de saúde que deseja buscar
          const userSnapshot = await get(userRef);
          if (userSnapshot.exists()) {
            const userData = userSnapshot.val();
            setName(userData.name);
            setEmail(userData.email);
            setProfession(userData.profession);
            setLocation(userData.location);
          }
        } catch (error) {
          console.error('Erro ao buscar os dados do profissional de saúde:', error);
        }
      };

      fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome Completo:</Text>
      <Text style={styles.text}>{name}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{email}</Text>

      <Text style={styles.label}>Profissão:</Text>
      <Text style={styles.text}>{profession}</Text>

      <Text style={styles.label}>Localidade:</Text>
      <Text style={styles.text}>{location}</Text>

      <TextInput style={styles.input}
      placeholder="Digite o CPF"
      value={cpf}
      onChangeText={setCpf}/>
      
      

    <Button title="Procurar"
      onPress={() => {
        // Realizar a lógica de busca do usuário com base no CPF
        // Neste exemplo, sempre retorna as mesmas informações para o CPF "123456789"
        if (cpf === '123456789') {
          setUserInfo({
            nome: 'Eduardo Bezerra',
            cpf: '123456789',
            email: 'eduardo.bezerra@exemplo.com',
          });
        } else {
          setUserInfo(null);
        }
      }}
    />

    {userInfo && (
      <View style={styles.userInfo}>
        <Text>Nome: {userInfo.nome}</Text>
        <Text>CPF: {userInfo.cpf}</Text>
        <Text>E-mail: {userInfo.email}</Text>
      </View>
    )}
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    marginBottom: 16,
  },
});

export default HealthProfessionalScreen;