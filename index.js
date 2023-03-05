import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Image } from 'react-native';


const loginButtonColor = 'blue';
const registerButtonColor = 'green';
const forgotPasswordButtonColor = 'orange';

export default function App() {

    const [fonteCarregada] = useFonts({
        'MontserratRegular': Montserrat_400Regular
    });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(`Username: ${username}, Password: ${password}`);
    };

    return (
        <View style={styles.container} >
            <View style={styles.logoContainer}>
                <Text style={styles.headerText}> Carteira de Vacinação Digital </Text>
                < Image source={require('./assets/logo.png')} style={styles.logo} />
            </View>
            < TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)
                }
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            <TouchableOpacity style={[styles.button, { width: '80%', backgroundColor: loginButtonColor }]} onPress={() => console.log('Login')}>
                <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, { width: '40%', backgroundColor: registerButtonColor }]} onPress={() => console.log('Cadastrar')}>
                    <Text style={styles.buttonText}> Cadastrar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: forgotPasswordButtonColor }]} onPress={() => console.log('Recuperar senha')}>
                    <Text style={styles.buttonText}> Recuperar senha </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        width: '80%',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    headerText: {
        //fontFamily: 'Arial Rounded MT Bold',
        fontFamily: 'MontserratRegular',
        fontSize: 23,
        textAlign: 'center',
        marginVertical: 20,
        color: '#0D0D0D',
    },
});