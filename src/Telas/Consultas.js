import {ImageBackground, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, View} from 'react-native'
import {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cabecalho from "../../components/Cabecalho"


const Consultas = ()=> {
 const[listaConsultas,setListaConsultas]=useState([])

 async function consultasMarcadas(){
    const p = await AsyncStorage.getItem("CONSULTAS")
    setListaConsultas(JSON.parse(p))
  }
  useEffect(()=>{
    consultasMarcadas()
  },[])
  console.log(listaConsultas)

  return(
    <ImageBackground source={require('../../assets/tela-de-fundo2.jpg')}>
    <Cabecalho/>
    <Text>Consultas Marcadas: </Text>

     <FlatList
          data={listaConsultas}

          renderItem={({item})=>{

            return(
                <View>
                  <Text style={{fontSize:18}}>ESPECIALISTA:{item.especialista} DIA:{item.dia} NOME:{item.nome} PERIODO:{item.periodo}</Text>                
                </View>
            )
          }}
      />
    </ImageBackground>
  )
}

export default Consultas