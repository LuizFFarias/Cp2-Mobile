import {ImageBackground, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {useState} from 'react'
import Cabecalho from "../../components/Cabecalho"
import { useData } from '../../context/ConsultasContext';


const Dermatologista = () =>{
   const { consultas, saveData } = useData();
   const [nomePaciente, setNomePaciente] = useState('');
   const [periodoConsulta, setPeriodoConsulta] = useState('');
   const [dataConsulta, setDataConsulta] = useState('');

   const salvarConsulta = async () => {
    const newConsultas = [...consultas, { especialista: 'Dermatologista', nome: nomePaciente, dia: dataConsulta, periodo: periodoConsulta }];
    saveData(newConsultas);
    alert("Consulta marcada com sucesso!")
  };
   
  return(
    <ImageBackground source={require('../../assets/tela-de-fundo2.jpg')}>
        <Cabecalho/>
        <Text>Dermatologista</Text>
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
export default Dermatologista