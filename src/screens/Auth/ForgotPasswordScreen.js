import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

//packages
import { useNavigation } from '@react-navigation/native';

//components
import Header from '../../components/common/Header'
import TextInputWithIcon from '../../components/common/TextInputWithIcon'

//utils
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from '../../theme/metrics'
import * as space from '../../components/common/Spacer'
import { color } from '../../theme/colors'
import * as images from '../../assets/images/index'
import Button from '../../components/common/Button'

const ForgotPasswordScreen = () => {
    const navigation = useNavigation()

    //states
    const [selectedOption, setSelectedOption] = useState('email');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(null);
    
    //methods
    const handleSelectOption = (option) => {
      setSelectedOption(option);
    };

  return (
      <SafeAreaView>
          <View style={{ paddingVertical: hp(1), paddingHorizontal: wp(5) }}>
              <Header />
              <space.s4 />
              <Text style={styles.forgotTitle}>Forgot Your Password?</Text>
              <space.s1 />
              <Text style={styles.forgotSubtitle}>Enter your email or your phone number, we will send you confirmation code</Text>
              <space.s3 />

              {/* buttons */}
              <View style={styles.contactContainer}>
                  <TouchableOpacity
                      style={[styles.contactButton, selectedOption === 'phone' && styles.selectedButton,]}
                      onPress={() => handleSelectOption('phone')}
                  >
                      <Text style={[styles.buttonText, { color: selectedOption == "phone" ? color.Primary : color.Gray }]}>Phone</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                      style={[styles.contactButton, selectedOption === 'email' && styles.selectedButton,]}
                      onPress={() => handleSelectOption('email')}
                  >
                      <Text style={[styles.buttonText, { color: selectedOption == "email" ? color.Primary : color.Gray }]}>Email</Text>
                  </TouchableOpacity>
              </View>

              <space.s3 />
              {/* Input Field */}
              {
                  selectedOption == 'email' ? (
                      <TextInputWithIcon
                          icon={email == '' ? images.Email : images.Green}
                          placeholder="Enter your email"
                          keyboardType="email-address"
                          value={email}
                          onChangeText={(text) => setEmail(text)}
                      />
                  ) : (
                      <TextInputWithIcon
                          icon={phone == null ? images.Call : images.GreenCall}
                          placeholder="Enter your phone"
                          keyboardType="phone"
                          value={phone}
                          onChangeText={(text) => setPhone(text)}
                      />
                  )
              }

              <space.s3 />
              <Button title="Reset Password" width="100%" background={color.Primary} onPress={() => navigation.navigate("VerificationScreen", { contact: selectedOption === 'phone' ? phone : email })} />
          </View>
      </SafeAreaView>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    forgotTitle: {
        fontSize: 24,
        fontWeight: "800",
        color: "#101623",
    },
    forgotSubtitle: {
        fontSize: 16,
        color: '#A1A8B0',
        letterSpacing: 0.7,
    },
    contactContainer: {
        borderRadius: wp(8),
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(1),
        paddingVertical: hp(0.5),
        backgroundColor: '#E5E7EB',
        borderColor: '#A1A8B0',
        borderWidth: 1,
    },
    contactButton: {
        borderRadius: wp(8),
        paddingVertical: hp(1.7),
        paddingHorizontal: wp(16),
    },
    selectedButton: {
        backgroundColor: 'white',
    },
    buttonText: {
        color: color.Gray,
        fontWeight: 'bold',
        fontSize: 16,
    },
})