import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'

//packages
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

//utils
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics';
import * as images from '../../assets/images/index';
import * as space from '../../components/common/Spacer'

//components
import TextInputWithIcon from '../../components/common/TextInputWithIcon';
import Header from '../../components/common/Header';
import { color } from '../../theme/colors';
import Button from '../../components/common/Button';

const SignUp = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
    };

    const handleSignUp = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false); // Close modal
    };

    return (
        
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{flex: 1}}>
                {/* Success modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity style={{padding: wp(5),}} onPress={closeModal}><Text>Close</Text></TouchableOpacity>
                            <Image source={images.Done} />
                            <Text style={styles.modalText}>Success</Text>
                            <Text>Your account has been successfully {"\n"}
                                <Text style={{ textAlign: 'center' }}>registered</Text>
                            </Text>
                            <space.s4 />
                            <Button title="Login" background={color.Primary} width= {wp(56)} onPress={() => navigation.navigate("Login")} />
                            <space.s4 />
                        </View>
                    </View>
                </Modal>

                {/* page body */}
                    <Header title="Sign Up" onPress={() => navigation.goBack()} />
                    <space.s5 />
                    <View style={{ paddingHorizontal: wp(6), width: "100%" }}>
                        <TextInputWithIcon
                            icon={images.User}
                            placeholder="Enter your name"
                            keyboardType="email-address"
                        />
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
                    </View>
                    <View style={{ paddingHorizontal: wp(6), width: "90%", flexDirection: 'row' }}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={isChecked}
                                onValueChange={toggleCheckBox}
                                style={styles.checkbox}
                                tintColors={{ true:'#199A8E', false:'#000000' }}
                                onFillColor= {color.Primary}
                                onCheckColor={'white'}
                            />
                        </View>
                        <Text style={{ marginLeft: wp(3), fontSize: 14, letterSpacing: 0.7, lineHeight: 22 }}>
                            I agree to the Medics <Text style={{ color: color.Primary }}>Terms of Service and Privacy Policy</Text>
                        </Text>
                    </View>
                    <space.s5 />
                    <View style={{ paddingHorizontal: wp(6), justifyContent: 'center', alignItems: 'center' }}>
                        <Button title="Sign Up" background={color.Primary} width="100%" onPress={handleSignUp} />
                        <space.s4 />
                        <Text style={{ fontSize: 15, color: "#717784" }}>Don’t have an account? <Text style={{ color: color.Primary }}>Sign Up</Text></Text>
                    </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        marginHorizontal: wp(5),
        backgroundColor: "white",
        borderRadius: wp(5),
        paddingHorizontal: wp(9),
        paddingTop: hp(4),
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5
      },
    modalText: {
        marginTop: hp(4),
        marginBottom: hp(2),
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

})