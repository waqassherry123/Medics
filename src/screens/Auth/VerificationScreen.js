import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useRef } from 'react'

//packages
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import OTPTextInput from 'react-native-otp-textinput';

//components
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

//utils
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics';
import * as space from '../../components/common/Spacer'
import { color } from '../../theme/colors';


const VerificationScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const contact = route.params.contact;

    // Refs
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);

    // methods
    const handleOTPChange = (otp) => {
        // Handle OTP change here
        console.log('OTP entered:', otp);
    };

    const focusNextInput = (nextInputRef) => {
        nextInputRef.current.focus();
    };

    const handleInputChange = (value, inputRef) => {
        if (value.length === 1) {
            focusNextInput(inputRef);
        }
    };

    let maskedContact;
    if (!isNaN(contact) && typeof contact === 'string') {
        console.log("here in if")
        maskedContact = contact.substring(0, contact.length - 4) + '****';
    } else {
        maskedContact = contact;
    }

    return (
        <SafeAreaView>
            <View style={{ paddingVertical: hp(1), paddingHorizontal: wp(5) }}>
                <Header />
                <space.s4 />
                <Text style={styles.forgotTitle}>Enter Verification Code</Text>
                <space.s1 />
                <Text style={styles.forgotSubtitle}>Enter code that we have sent to your {"\n"} number <Text style={{ color: 'black' }}>{maskedContact}</Text> </Text>
                <space.s5 />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        ref={input1Ref}
                        onChangeText={(value) => handleInputChange(value, input2Ref)}
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        ref={input2Ref}
                        onChangeText={(value) => handleInputChange(value, input3Ref)}
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        ref={input3Ref}
                        onChangeText={(value) => handleInputChange(value, input4Ref)}
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        ref={input4Ref}
                        onChangeText={(value) => handleInputChange(value, input4Ref)}
                    />
                </View>
                <space.s5 />
                <Button title="Verify" background={color.Primary} width="100%" onPress={() => navigation.navigate("CreatePasswordScreen")} />
                <space.s3 />
                <Text style={styles.resendText}>Didn’t receive the code? <Text style={{ color: color.Primary}}>Resend</Text></Text>
            </View>
        </SafeAreaView>
    )
}

export default VerificationScreen

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
        lineHeight: 26,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    input: {
        borderWidth: 1.3,
        borderColor: color.Primary,
        borderRadius: wp(2.5),
        fontSize: 20,
        fontWeight: "bold",
        width: wp(15),
        height: hp(7),
        textAlign: 'center',
    },
    resendText: { 
        alignSelf: 'center', 
        fontSize: 15, 
        color: '#A1A8B0', 
    }
})