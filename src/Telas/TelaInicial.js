import {ImageBackground, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Cabecalho from "../../components/Cabecalho"
import Integrantes from './Integrantes'


const TelaInical = (props) => {

  return( 
    <ImageBackground source={require('../../assets/tela-de-fundo2.jpg')} style= {styles.container}>
    <Cabecalho navigation={props.navigation}/>

    <Text style={styles.texto}>Bem-vindo ao Oasis Health Center!</Text>

    <Text style={styles.texto}>No Oasis Health Center, nossa missão é proporcionar um ambiente acolhedor e cuidados médicos de alta qualidade para toda a família. Situado em um local tranquilo, nosso centro é um refúgio de saúde e bem-estar, onde você pode encontrar alívio, renovação e equilíbrio.</Text>

    <Text>Escolha um especialista para marcar uma consulta: </Text>

    <TouchableOpacity onPress={()=>props.navigation.navigate('Oftalmologista')}>
    <Text>Oftalmologista</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>props.navigation.navigate('Ortopedista')}>
    <Text>Ortopedista</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>props.navigation.navigate('Dermatologista')}>
    <Text>Dermatologista</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>props.navigation.navigate('Consultas')}>
    <Text>Verificar Consultas Marcadas</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>props.navigation.navigate('Integrantes')}>
    <Text>Conheça nossos integrantes</Text>
    </TouchableOpacity>

    </ImageBackground>
  )
}

export default TelaInical

 const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center'
        },
          texto: {
    backgroundColor: '#addff8',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center'
  },
})