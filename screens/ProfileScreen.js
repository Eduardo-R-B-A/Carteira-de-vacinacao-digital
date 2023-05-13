import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth } from 'firebase/auth';
import { database } from '../firebase';
import { getDatabase, ref, child, get } from 'firebase/database';


const auth = getAuth();

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  



  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome Completo:</Text>
      <Text style={styles.text}>{name}</Text>

      <Text style={styles.label}>E-mail:</Text>
      <Text style={styles.text}>{email}</Text>

      <Text style={styles.label}>CPF:</Text>
      <Text style={styles.text}>{cpf}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
});
