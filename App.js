import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer
    //  onReady={onNavigationReady}
    >
      <Stack.Navigator initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />





      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;