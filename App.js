import { StatusBar } from 'expo-status-bar';
//---------------------------------------------------------------------------------------------------------------------------------------
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//---------------------------------------------------------------------------------------------------------------------------------------
const Stack = createStackNavigator();
//---------------------------------------------------------------------------------------------------------------------------------------
import { HomeScreen } from './pages/HomeScreen';
import { CadpaisScreen } from './pages/CadpaisScreen';
import { CadbabaScreen } from './pages/CadbabaScreen';
import { LoginScreen } from './pages/LoginScreen';
//---------------------------------------------------------------------------------------------------------------------------------------
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}
