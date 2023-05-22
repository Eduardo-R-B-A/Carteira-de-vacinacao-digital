import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import UserRegistrationScreen from './screens/UserRegistrationScreen';
import HealthProfessionalRegistrationScreen from './screens/HealthProfessionalRegistrationScreen';
import { useNavigation } from '@react-navigation/native';
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen';
import ProfileScreen from './screens/ProfileScreen';
import { getDatabase, ref } from 'firebase/database';
import HealthProfessionalScreen from './screens/HealthProfessionalScreen';



const loginButtonColor = 'blue';
const registerButtonColor = 'green';
const forgotPasswordButtonColor = 'orange';
const registerHealthButtonColor = 'red';


const Stack = createStackNavigator();

function HomeScreen({ handleLogin, loggedIn }) {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleRegister = () => {
    navigation.navigate('UserRegistration');
  };

  const handleProfessionalRegister = () => {
    navigation.navigate('HealthProfessionalRegistration');
  };

  const handlePasswordRecovery = () => {
    navigation.navigate('PasswordRecovery');
  };

  const handleLoginPress = () => {
    const auth = getAuth();
    
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Login bem-sucedido
        const user = userCredential.user;
        
        
        // Verificar o tipo de usuário com base em uma propriedade específica
        if (user == 'ProfileScreen'){
        navigation.navigate('ProfileScreen');
        }else {
        navigation.navigate('HealthProfessionalScreen');
      }
        // Navegar para a tela ProfileScreen
        //navigation.navigate('ProfileScreen');
        //navigation.navigate('HealthProfessionalScreen');
      })
      .catch((error) => {
        // Tratar erros de login
        console.log('Erro ao fazer login:', error);
      });
  };

  //const handleProfileScreen = () => {
    //navigation.navigate('ProfileScreen');
  //};


  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Carteira de Vacinação Digital </Text>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity
        style={[styles.button, { width: '80%', backgroundColor: loginButtonColor }]}
        onPress={handleLoginPress}> 
      <Text style={styles.buttonText}> Login </Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, { width: '35%', backgroundColor: registerButtonColor }]} onPress={handleRegister}>
        <Text style={styles.buttonText}> Cadastrar Usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { width: '35%', backgroundColor: registerHealthButtonColor }]} onPress={handleProfessionalRegister}>
        <Text style={styles.buttonText}> Cadastrar Profissional da Saúde</Text>
      </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { width: '35%', backgroundColor: forgotPasswordButtonColor }]} onPress={handlePasswordRecovery}>
          <Text style={styles.buttonText}> Recuperar senha </Text>
        </TouchableOpacity>

      </View>
      
    </View>
  );
}

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  

  const handleLogin = async (username, password) => {
    const database = getDatabase();
    const usersRef = ref(database, 'users');
    const userRef = child(usersRef, username);
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      setLoggedIn(true);
      setUser(userCredential.user);
    } catch (error) {
      console.log(error);
      setLoggedIn(false);
    }
  };

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <HomeScreen
              setUsername={setUsername}
              setPassword={setPassword}
              handleLogin={handleLogin}
              loggedIn={loggedIn}
            />
          )}
        </Stack.Screen>

      <Stack.Screen name="UserRegistration" component={UserRegistrationScreen} />
      <Stack.Screen name="HealthProfessionalRegistration" component={HealthProfessionalRegistrationScreen} />
      <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="HealthProfessionalScreen" component={HealthProfessionalScreen} />
    </Stack.Navigator>
  </NavigationContainer>

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
  fontSize: 23,
  textAlign: 'center',
  marginVertical: 20,
  color: '#0D0D0D',
},
});