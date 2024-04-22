import {View, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icone from "../assets/Icone.jpg"

const styles = StyleSheet.create({
  imagens:{
    width: 40, 
    height: 40,
    marginRight: 25
    
  }
})

const Cabecalho = (props) => {
  const navigation = useNavigation();

  return(
    <View>
    <TouchableOpacity onPress={()=> navigation.goBack()}>
    <Image source={Icone} style={styles.imagens} />

    </TouchableOpacity>
    </View>
  )
}

export default Cabecalho