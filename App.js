import { SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'

// packages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import IntroSlides from './src/screens/Auth/IntroSlides/IntroSlides';
import GetStartedScreen from './src/screens/Auth/GetStartedScreen';
import Login from './src/screens/Auth/Login';
import SignUp from './src/screens/Auth/SignUp';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="IntroSlides" component={IntroSlides} options={{ headerShown: false }} />
          <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})