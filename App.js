import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

// packages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import IntroSlides from './src/screens/Auth/IntroSlides/IntroSlides';



const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="IntroSlides" component={IntroSlides} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})