import {ImageBackground, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Dermatologista = () =>{
   const [nomePaciente, setNomePaciente] = useState('');
   const [periodoConsulta, setPeriodoConsulta] = useState('');

    async function salvar(){
    let consultas = [];
    if (await AsyncStorage.getItem("CONSULTAS") !== null) {
      consultas = JSON.parse(await AsyncStorage.getItem("CONSULTAS"));
    }
    consultas.push({especialista: 'Dermatologista', nome:nomePaciente,periodo:periodoConsulta})
    console.log(consultas)
    await AsyncStorage.setItem("CONSULTAS",JSON.stringify(consultas))
  }
   


  return(
    <ImageBackground source={require('../../assets/tela-de-fundo2.jpg')}>
        <Text>Oftalmologista</Text>
        <TextInput
        placeholder= 'Nome do paciente'
        value={nomePaciente}
        onChangeText={(value) => setNomePaciente(value)}
        />

        <TextInput
        placeholder= 'Período da consulta'
        value={periodoConsulta}
        onChangeText={(value) => setPeriodoConsulta(value)}
        />
        <TouchableOpacity onPress={salvar}>
        <Text>Marcar Consulta</Text>
        </TouchableOpacity>

    </ImageBackground>

  )
}
export default Dermatologista