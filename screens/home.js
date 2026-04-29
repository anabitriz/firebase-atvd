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
    .then(() => {
      navigation.navigate("Cotacoes");
    })
    .catch((error) => {
  console.log(error);
  alert(error.message);
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
      
      <TouchableOpacity style={styles.botaoAzul} onPress={login}> 
        <Text style={styles.textoBotao}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVermelho} onPress={() => navigation.navigate("Cadastrar")}>
        <Text style={styles.textoBotao}>Cadastrar-se</Text>
      </TouchableOpacity>

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

botaoAzul: {
  width: 240,
  height: 45,
  backgroundColor: "#0a62e7",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 10,
},

botaoVermelho: {
  width: 240,
  height: 45,
  backgroundColor: "#e7360a",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 10,
},

textoBotao: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
},

});
