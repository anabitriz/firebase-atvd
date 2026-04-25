import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";





export default function Cadastro({ navigation }) {
  const [email, botarEmail] = React.useState('');
  const [senha, botarSenha] = React.useState('');
   const [titleText, setTitleText] = useState("");
   const onPressTitle = () => {
    setTitleText("testando");
  };

    function inserirDados() {
  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, senha)
.then((userCredential) => {
  const user = userCredential.user;
  alert("Usuário cadastrado!");
  navigation.navigate("Home");
})
.catch((error) => {
  alert(error.message);
});
// ..
}
  return (
    <View style={styles.screen}>

      
      <Text style={styles.label}>  Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={botarEmail} />

       <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          
      <Text style={styles.label}>  Senha</Text>
      <TextInput style={styles.input} value={senha} onChangeText={botarSenha} secureTextEntry />

      <Button
        title="                     Salvar                   "
        onPress={inserirDados}
        
      />
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