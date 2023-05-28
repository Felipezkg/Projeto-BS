import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//---------------------------------------------------------------------------------------------------------------------------------------
const Stack = createStackNavigator();
//---------------------------------------------------------------------------------------------------------------------------------------
import UserProvider from './contexts/UserProvider';
//---------------------------------------------------------------------------------------------------------------------------------------
import { InicialScreen } from './pages/InicialScreen';
import { CadpaisScreen } from './pages/CadpaisScreen';
import { CadbabaScreen } from './pages/CadbabaScreen';
import { LoginScreen } from './pages/LoginScreen';
import { ProfileScreen } from './pages/ProfileScreen';
import { HomeScreen } from './pages/HomeScreen';
//---------------------------------------------------------------------------------------------------------------------------------------
import * as firebase from 'firebase/app';
import { firebaseConfig } from './config/firebaseConfig';

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log('App em carregamento');
}
//---------------------------------------------------------------------------------------------------------------------------------------
import { useFonts, Comfortaa_400Regular, Comfortaa_300Light } from '@expo-google-fonts/comfortaa';
import { Rubik_300Light, Rubik_300Light_Italic } from '@expo-google-fonts/rubik'
//---------------------------------------------------------------------------------------------------------------------------------------

export default function App() {

  const [fonteLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_300Light,
    Rubik_300Light,
    Rubik_300Light_Italic,
  });

  if (!fonteLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator initialRouteName={'Inicial'}>
          <Stack.Screen
            name="Inicial"
            component={InicialScreen}
            options={{
              headerShown: false,
              gestureEnabled: true,
            }}
          />

          <Stack.Screen
            name='Cadastro de Pais'
            component={CadpaisScreen}
            options={{
              headerShown: true,
              gestureEnabled: true,
            }}
          />

          <Stack.Screen
            name='Cadastro de Babás'
            component={CadbabaScreen}
            options={{
              headerShown: true,
              gestureEnabled: true,
            }}
          />

          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{
              headerShown: true,
              gestureEnabled: true,
            }}
          />

          <Stack.Screen
            name='Perfil'
            component={ProfileScreen}
            options={{
              headerShown: true,
              gestureEnabled: true,
            }}
          />

          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              headerShown: false,
              gestureEnabled: true,
            }}
          />

        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer >
  );
}
