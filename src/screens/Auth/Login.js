import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'

//packages
import { useNavigation } from '@react-navigation/native';

//assets
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import * as images from '../../assets/images/index'
import { color } from '../../theme/colors';

//components
import Header from '../../components/common/Header'
import TextInputWithIcon  from '../../components/common/TextInputWithIcon';
import * as space from '../../components/common/Spacer'
import Button from '../../components/common/Button';
import { SocialButton } from '../../components/common/Button';
import SuccessModal from '../../components/common/SuccessModal';

const Login = () => {
    const navigation = useNavigation();

    // states
    const [modalVisible, setModalVisible] = useState(false);

    // methods
    const handleLogin = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false); 
    };

    const forgotPassword = () => navigation.navigate("ForgotPasswordScreen")

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', }}>
            <Header title="Login" />
            <space.s5 />

            {/* Welcome Modal */}
            <SuccessModal
                title="Yeay! Welcome Back"
                subTitle="Once again you login successfully"
                text="into medidoc app"
                visible={modalVisible}
                onPress={() => {
                    setModalVisible(false);
                    navigation.navigate("Login");
                }}
            />

            {/* Input Fields */}
            <View style={{ alignItems: 'center', paddingHorizontal: wp(6) }}>
                <TextInputWithIcon
                    icon={images.Email}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />
                <TextInputWithIcon
                    icon={images.Lock}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={forgotPassword} style={{ alignSelf: 'flex-end', }}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <space.s4 />

            {/* Login Button */}
            <View style={{ paddingHorizontal: wp(6), width: "100%" }} >
                <Button title="Login" background={color.Primary} width="100%" onPress={handleLogin} />
            </View>
            <space.s3 />

            {/* Navigate to SignUp */}
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={{ color: '#717784', fontSize: 15, fontWeight: '400' }}>Don’t have an account?<Text style={{ color: color.Primary }}> Sign Up</Text></Text>
            </TouchableOpacity>
            <space.s3 />

            {/* OR text */}
            <View style={styles.textContainer}>
                <View style={styles.line} />
                <Text style={styles.text}>OR</Text>
                <View style={styles.line} />
            </View>

            {/* Social Buttons */}
            <View style={{ paddingHorizontal: wp(6), width: "100%" }}>
                <SocialButton
                    icon={images.Google} // Replace with your icon path
                    title="Sign in with Google"
                    onPress={() => console.log('Button pressed')}
                    width="100%"
                />
                <SocialButton
                    icon={images.Apple} // Replace with your icon path
                    title="Sign in with Apple"
                    onPress={() => console.log('Button pressed')}
                    width="100%"
                />
                <SocialButton
                    icon={images.Facebook} // Replace with your icon path
                    title="Sign in with Facebook"
                    onPress={() => console.log('Button pressed')}
                    width="100%"
                />
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        height: hp(6),
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    forgotPasswordText: {
        paddingRight: wp(2),
        fontSize: 14,
        color: color.Primary,
        fontWeight: '500'
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: wp(6)
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#A1A8B0',
        marginHorizontal: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#A1A8B0',
    },
})