import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'

//packages
// import LinearGradient from 'react-native-linear-gradient';

//components
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics';
import { color } from '../../theme/colors';

const Button = (props) => {
  return (
    <TouchableOpacity style={[styles.Button,  { backgroundColor: props.background, width: props.width ? props.width : wp(80) }]}  onPress={props.onPress}>
        <Text style={{color:props.color ? props.color : "white", fontSize:18, fontWeight:"600"}}> {props.title} </Text>
    </TouchableOpacity>
  )
}

export const SocialButton = (props) => {
  return (
    <TouchableOpacity style={[styles.socialButton, { width: props.width ? props.width : wp(80) }]} onPress={props.onPress}>
        <Image source={props.icon} style={styles.icon} />
          <Text style={styles.title}> {props.title} </Text>     
    </TouchableOpacity>
  )
}


// export const GradientButton = ({ title, onPress, isActive }) => {
//   return (
//     <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{width:"47%"}}>
//       <LinearGradient
//         colors={
//           isActive
//             ? ['rgba(79, 148, 240, 1)', 'rgba(160, 32, 240, 1)']
//             : ['transparent', 'transparent']
//         }
//         style={styles.gradientButton}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       >
//         <Text
//           style={[
//             styles.buttonText,
//             {
//               color: isActive ? 'white' : 'black',
//             },
//           ]}
//         >
//           {title}
//         </Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   );
// };

export default Button

const styles = StyleSheet.create({
  Button: {
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: hp(2.1),
    borderRadius: wp(8),
    borderColor: color.Primary,
    borderWidth: 1,
  },
  socialButton: {
    backgroundColor: color.White,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2),
    borderRadius: wp(8),
    borderColor: "#E5E7EB",
    marginBottom: hp(2),
    borderWidth: 1,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: wp(10)
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: wp(4),
    // alignSelf:'flex-start'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
