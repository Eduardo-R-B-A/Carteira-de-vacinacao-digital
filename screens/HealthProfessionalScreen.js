import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { getAuth } from 'firebase/auth';
import { database } from '../firebase';
import { getDatabase, ref, child, get } from 'firebase/database';



const auth = getAuth();

const HealthProfessionalScreen = () => {
  // Dados do profissional de saúde
  const name = 'Marcio Araujo';
  const email = 'marcio.araujo@exemplo.com';
  const profession = 'Enfermeiro';
  const location = 'Hospital';

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