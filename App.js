import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {DataProvider} from "./context/ConsultasContext"

import TelaInical from "./src/Telas/TelaInicial"
import Dermatologista from "./src/Telas/Dermatologista"
import Oftalmologista from "./src/Telas/Oftalmologista"
import Ortopedista from "./src/Telas/Ortopedista"
import Consultas from "./src/Telas/Consultas"

const Stack = createStackNavigator();

export default function App() {
  return (
    <DataProvider>
    <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen 
      name= 'TelaInicial' component = {TelaInical}
      options={{headerShown:false}}/>
       <Stack.Screen 
      name= 'Dermatologista' component = {Dermatologista}
      options={{headerShown:false}}/>
       <Stack.Screen 
      name= 'Oftalmologista' component = {Oftalmologista}
      options={{headerShown:false}}/>
       <Stack.Screen 
      name= 'Ortopedista' component = {Ortopedista}
      options={{headerShown:false}}/>
       <Stack.Screen 
      name= 'Consultas' component = {Consultas}
      options={{headerShown:false}}/>
   </Stack.Navigator>
   </NavigationContainer>
    </DataProvider>
   
  );
}