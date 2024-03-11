import { StyleSheet, View,Image} from 'react-native'
import React from 'react'

// packages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import IntroSlides from './src/screens/Auth/IntroSlides/IntroSlides';
import GetStartedScreen from './src/screens/Auth/GetStartedScreen';
import Login from './src/screens/Auth/Login';
import SignUp from './src/screens/Auth/SignUp';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPasswordScreen';
import VerificationScreen from './src/screens/Auth/VerificationScreen';
import CreatePasswordScreen from './src/screens/Auth/CreatePasswordScreen';
import Home from './src/screens/Home/Home';
import Message from './src/screens/Message/Message';
import Schedule from './src/screens/Schedule/Schedule';
import Profile from './src/screens/Profile/Profile';
import FindDoctors from './src/screens/DoctorConsultation/FindDoctors';
import DoctorDetail from './src/screens/DoctorConsultation/DoctorDetail';
import TopDoctors from './src/screens/Home/TopDoctors';


//utils
import * as images from "./src/assets/images/index";

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MainTabs = () => {
    return (
      <Tab.Navigator  tabBarOptions={{
        showLabel: false, 
      }}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false,
         tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? images.Home : images.inactiveHome}
            style={{ width: 24, height: 24 }}
          />
        ),
        }} />
        <Tab.Screen name="Message" component={Message} 
        options={{ headerShown: false,
          tabBarIcon: ({ focused }) => (
           <Image
             source={focused ? images.Message : images.InactiveMessage}
             style={{ width: 24, height: 24 }}
           />
         ),
         }} 
        />
        <Tab.Screen name="Schedule" component={Schedule} 
          options={{ headerShown: false,
            tabBarIcon: ({ focused }) => (
             <Image
               source={focused ? images.Calender : images.InactiveCalendar}
               style={{ width: 24, height: 24 }}
             />
           ),
           }} 
        />
        <Tab.Screen name="Profile" component={Profile}
          options={{ headerShown: false,
            tabBarIcon: ({ focused }) => (
             <Image
               source={focused ? images.Profile : images.InactiveProfile}
               style={{ width: 24, height: 24 }}
             />
           ),
           }} 
        />
      </Tab.Navigator>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IntroSlides">
          <Stack.Screen name="IntroSlides" component={IntroSlides} options={{ headerShown: false }} />
          <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="FindDoctor" component={FindDoctors} options={{ headerShown: false }} />
          <Stack.Screen name="DoctorDetail" component={DoctorDetail} options={{ headerShown: false }} />
          <Stack.Screen name="TopDoctors" component={TopDoctors} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({})