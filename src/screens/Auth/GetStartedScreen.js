import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//packages
import { useNavigation } from '@react-navigation/native';

//assets
import { color } from '../../theme/colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import { Logo } from '../../assets/images'
import * as space from '../../components/common/Spacer'
import Button from '../../components/common/Button'

const GetStartedScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={Logo} />
      <space.s4 />
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Let's get started!</Text>
      <space.s1 />
      <Text style={{ fontSize: 16, width: wp(60), justifyContent: 'center', alignItems: 'center', color: '#717784', letterSpacing:0.3 }}>Login to enjoy the features we’ve {"\n"}
        <Text style={{ textAlign: 'center' }}>provided, and stay healthy!</Text>
      </Text>
      <space.s7 />
      <Button title="Login" background= {color.Primary} onPress={() => navigation.navigate("Login")} />
      <space.s2 />
      <Button title="Sign Up" color={color.Primary} onPress={() => navigation.navigate("SignUp")} />
    </View>
  )
}

export default GetStartedScreen

const styles = StyleSheet.create({})