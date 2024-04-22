import {ImageBackground, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Cabecalho from "../../components/Cabecalho"
import { useData } from '../../context/ConsultasContext';



const Ortopedista = () =>{
   const { consultas, saveData } = useData();
   const [nomePaciente, setNomePaciente] = useState('');
   const [periodoConsulta, setPeriodoConsulta] = useState('');
   const [dataConsulta, setDataConsulta] = useState('');

    const salvarConsulta = async () => {
    const newConsultas = [...consultas, { especialista: 'Ortopedista', nome: nomePaciente, dia: dataConsulta, periodo: periodoConsulta }];
    saveData(newConsultas);
    alert("Consulta marcada com sucesso!")
  };


  return(
    <ImageBackground source={require('../../assets/tela-de-fundo2.jpg')}>
        <Cabecalho/>
        <Text>Ortopedista</Text>
        <TextInput
        placeholder= 'Nome do paciente'
        value={nomePaciente}
        onChangeText={(value) => setNomePaciente(value)}
        />

        <TextInput
        placeholder= 'Dia da consulta'
        value={dataConsulta}
        onChangeText={(value) => setDataConsulta(value)}
        />

        <TextInput
        placeholder= 'Período da consulta'
        value={periodoConsulta}
        onChangeText={(value) => setPeriodoConsulta(value)}
        />
        <TouchableOpacity onPress={salvarConsulta}>
        <Text>Marcar Consulta</Text>
        </TouchableOpacity>

    </ImageBackground>

  )
}
export default Ortopedista