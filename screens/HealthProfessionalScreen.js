import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { getAuth } from 'firebase/auth';
import { database } from '../firebase';
import { getDatabase, ref, child, get } from 'firebase/database';
import ModalDropdown from 'react-native-modal-dropdown';
import Toast from 'react-native-toast-message';




const auth = getAuth();



  const HealthProfessionalScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profession, setProfession] = useState('');
    const [location, setLocation] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [cpf, setCpf] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [selectedVaccine, setSelectedVaccine] = useState(null);
    const vaccineOptions = ['Vacina A', 'Vacina B', 'Vacina C', 'Vacina D', 'Vacina E'];

  
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

  const handleInsertVaccine = () => {
    // Realizar a lógica de inserção da vacina no banco de dados
    console.log('Vacina inserida:', selectedVaccine);
    Toast.show({
      type: 'success',
      text1: 'Vacina inserida com sucesso!',
      position: 'bottom',
      visibilityTime: 2000,
      autoHide: true,
    });
  };

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

<ModalDropdown
        style={styles.dropdown}
        dropdownStyle={styles.dropdownContainer}
        dropdownTextStyle={styles.dropdownText}
        options={vaccineOptions}
        onSelect={(index) => setSelectedVaccine(vaccineOptions[index])}
      />

{selectedVaccine && (
        <View style={styles.vaccineInfo}>
          <Text>Vacina Selecionada: {selectedVaccine}</Text>
          <Button title="Inserir Vacina" onPress={handleInsertVaccine} />
        </View>
      )}

    {userInfo && (
      <View style={styles.userInfo}>
        <Text>Nome: {userInfo.nome}</Text>
        <Text>CPF: {userInfo.cpf}</Text>
        <Text>E-mail: {userInfo.email}</Text>
      </View>
    )}
    <Toast ref={(ref) => Toast.setRef(ref)} />
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
    paddingTop: 20,
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
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },

  dropdown: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  dropdownContainer: {
    width: '100%',
    borderRadius: 8,
    marginTop: 8,
  },
  dropdownText: {
    fontSize: 16,
    padding: 8,
  },
  vaccineInfo: {
    marginTop: 16,
    alignItems: 'center',
  },
  userInfo: {
    marginTop: 16,
  },
  
});

export default HealthProfessionalScreen;