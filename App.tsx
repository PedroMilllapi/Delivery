import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Presentation/views/home/Home';
import { RegisterScreen} from './src/Presentation/views/register/Register';

export type RootStackParamList = { 
  HomeScreen : undefined,
  RegisterScreen : undefined
}
const Stack = createNativeStackNavigator();

const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      
     
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen}
          options={{headerShown:true, title: 'Nuevo Usuario'}}
        /> 

      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App;