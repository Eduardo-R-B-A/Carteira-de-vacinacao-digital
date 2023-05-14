import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { getAuth } from 'firebase/auth';
import { database } from '../firebase';
import { getDatabase, ref, child, get } from 'firebase/database';


const auth = getAuth();

const VaccineItem = ({ name, manufacturer, dosage }) => {
  return (
    <View style={styles.vaccineContainer}>
      <Text style={styles.vaccineName}>{name}</Text>
      <Text style={styles.vaccineManufacturer}>{manufacturer}</Text>
      <View style={styles.dosageContainer}>
        {dosage.map((dose, index) => (
          <Text key={index} style={styles.dosageText}>
            {dose.type}: {dose.amount}
          </Text>
        ))}
      </View>
    </View>
  );
};


export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Variável para controlar o estado de login do usuário


  useEffect(() => {
    const fetchData = async () => {
      const userRef = ref(database, 'users/user1'); // Substitua 'user1' pela chave ou ID do usuário que deseja buscar
      const userSnapshot = await get(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.val();
        setName(userData.name);
        setEmail(userData.email);
        setCpf(userData.cpf);
      }
    };
  
    fetchData();
  }, []);
  

// Lista de vacinas
const vaccines = [
  {
    name: 'Vacina A',
    manufacturer: 'Fabricante A',
    dosage: [
      { type: '1° dose', amount: '10mg' },
      { type: '2° dose', amount: '10mg' },
      { type: 'Dose de reforço', amount: '5mg' }
    ]
  },
  {
    name: 'Vacina B',
    manufacturer: 'Fabricante B',
    dosage: [
      { type: '1° dose', amount: '20mg' },
      { type: '2° dose', amount: '20mg' },
      { type: 'Dose de reforço', amount: '10mg' }
    ]
  },
  {
    name: 'Vacina C',
    manufacturer: 'Fabricante C',
    dosage: [
      { type: '1° dose', amount: '15mg' },
      { type: '2° dose', amount: '15mg' },
      { type: 'Dose de reforço', amount: '7.5mg' }
    ]
  },
  {
    name: 'Vacina D',
    manufacturer: 'Fabricante D',
    dosage: [
      { type: '1° dose', amount: '12mg' },
      { type: '2° dose', amount: '12mg' },
      { type: 'Dose de reforço', amount: '6mg' }
    ]
  },
  {
    name: 'Vacina E',
    manufacturer: 'Fabricante E',
    dosage: [
      { type: '1° dose', amount: '18mg' },
      { type: '2° dose', amount: '18mg' },
      { type: 'Dose de reforço', amount: '9mg' }
    ]
  }
];



  return (
   
   <View style={styles.container}>
      <Text style={styles.label}>Nome Completo:</Text>
      <Text style={styles.text}>{name}</Text>
      

      <Text style={styles.label}>E-mail:</Text>
      <Text style={styles.text}>{email}</Text>
      

      <Text style={styles.label}>CPF:</Text>
      <Text style={styles.text}>{cpf}</Text>

      
     {/* Lista de vacinas */}
     <ScrollView style={styles.scrollView}>
        {vaccines.map((vaccine, index) => (
          <VaccineItem
            key={index}
            name={vaccine.name}
            manufacturer={vaccine.manufacturer}
            dosage={vaccine.dosage}
          />
        ))}
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  scrollView: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,
  },

  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
});



