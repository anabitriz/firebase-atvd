import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import Home from './screens/home';
import Cadastro from './screens/cadastro';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8qfbNfReIIq4p-DmuHDDO7ChbpjVPjE0",
  authDomain: "atvd-firebase.firebaseapp.com",
  projectId: "atvd-firebase",
  storageBucket: "atvd-firebase.firebasestorage.app",
  messagingSenderId: "795398536994",
  appId: "1:795398536994:web:0b984479fa586933ddef7b",
  measurementId: "G-CX59S4XCSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();



export default function App() {
  const [dolar, setDolar] = useState(0);
  const [euro, setEuro] = useState(0);

  useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
      .then(response => response.json())
      .then(data => {
        setDolar(data.USDBRL.bid); 
      })
      .catch(error => console.error(error));
  }, []);

useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/last/EUR-BRL')
      .then(response => response.json())
      .then(data => {
        setEuro(data.EURBRL.bid); 
      })
      .catch(error => console.error(error));
  }, []);
  return (
  
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastrar" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

