import {ImageBackground, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Cabecalho from "../../components/Cabecalho"
import { useData } from '../../context/ConsultasContext';


const Integrantes = () =>{
  return(
    <ImageBackground source={require('../../assets/tela-de-fundo2.jpg')}>
        <Cabecalho/>
        <Text>2TDSPF</Text>
        <Text>Nome: Luiz Fillipe Farias - 99519</Text>
        <Text>Nome: Rafaella Monique do Carmo Bastos - 552425</Text>
    </ImageBackground>
  )
}

export default Integrantes