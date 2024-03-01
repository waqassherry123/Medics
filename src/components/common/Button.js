import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

//packages
import LinearGradient from 'react-native-linear-gradient';

//components
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics';

const Button = (props) => {
  return (
    <TouchableOpacity  onPress={props.onPress}>
      <LinearGradient
        colors={['rgba(79, 148, 240, 1)', 'rgba(160, 32, 240, 1)']}
        style={[styles.gradientButton, {height: hp(7), width: wp(85), borderRadius:wp(4)}]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={{color:"white", fontSize:wp(6), fontWeight:"700"}}> {props.title} </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}


export const GradientButton = ({ title, onPress, isActive }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{width:"47%"}}>
      <LinearGradient
        colors={
          isActive
            ? ['rgba(79, 148, 240, 1)', 'rgba(160, 32, 240, 1)']
            : ['transparent', 'transparent']
        }
        style={styles.gradientButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text
          style={[
            styles.buttonText,
            {
              color: isActive ? 'white' : 'black',
            },
          ]}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button

const styles = StyleSheet.create({
  gradientButton: {
    padding: 15,
    borderRadius: 8,
    justifyContent:'center',
    alignItems:"center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6),
    width: wp(85),
}
}) 