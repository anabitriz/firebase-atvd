import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList} from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



export default function Home({ navigation }) {
  const [email, botarEmail] = React.useState('');
  const [senha, botarSenha] = React.useState('');


 function login() {
    if (!email || !senha) {
        alert('Preencha email e senha');
        return;
    }

   const auth = getAuth();
signInWithEmailAndPassword(auth, email, senha)
.then((userCredential) => {
// Signed in
const user = userCredential.user;
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
});
}
  
  return (
    <View style={styles.homeContainer}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://simplescontrole.com.br/wp-content/uploads/2024/05/usuario.png',
        }}
      />

      <Text style={styles.label}>  Nome</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={botarEmail}
      />

      <Text style={styles.label}>  Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={botarSenha}
      />

      <Button
        color="#0a62e7"
        title="                       Logar                      "
        onPress={login}
      />

      <Text> </Text>

      <Button
        color="#e7360a"
        title="                Cadastrar-se               "
        onPress={() => navigation.navigate("Cadastrar")}
      />

      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({

  screen: {
  flex: 1,
  backgroundColor: '#ffffff',
  alignItems: 'center'
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#fcf5f8ec',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 200,
    height: 200
  },

  header: {
    width: '100%',
    height: 90,
    backgroundColor: '#0a62e7',
    paddingTop: 40,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  headerTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },

  voltar: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold'
  },

  

  nome: {
    fontSize: 16,
  },


  input: {
    height: 35,
    width: 240,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
  width: 250,
  textAlign: 'left',
  marginTop: 15
},

});
