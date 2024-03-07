import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

//packages
import { useNavigation } from '@react-navigation/native';

//utils
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import { color } from '../../theme/colors'
import * as space from '../../components/common/Spacer'

//assets
import * as images from '../../assets/images/index'

//components
import Header from '../../components/common/Header'
import TextInputWithIcon from '../../components/common/TextInputWithIcon'
import Button from '../../components/common/Button'
import SuccessModal from '../../components/common/SuccessModal'

const CreatePasswordScreen = () => {
    const navigation = useNavigation();

    //states
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [showModal, setShowModal] = useState (false)

    const handleCreatePassword = () => {
        setShowModal(true);
    };

    return (
        <SafeAreaView>
            <View>
            <SuccessModal
                    title="Success"
                    subTitle="You have successfully reset your."
                    text="password"
                    visible={showModal}
                    onPress={() => {
                        setShowModal(false);
                        navigation.navigate("Login");
                    }}
                /> 
            <View style={{ paddingVertical: hp(1), paddingHorizontal: wp(5), }}>
                <Header />
                <space.s4 />
                <Text style={styles.forgotTitle}>Create New Password</Text>
                <space.s1 />
                <Text style={styles.forgotSubtitle}>Create your new password to login</Text>
                <space.s3 />
                <TextInputWithIcon
                    icon={password == null ? images.Lock : images.GreenLock}
                    placeholder="Enter password"
                    keyboardType="number"
                    value={password}
                    onChangeText={(num) => setPassword(num)}
                />
                <TextInputWithIcon
                    icon={images.Lock}
                    placeholder="Confirm password"
                    keyboardType="number"
                    value={confirmPassword}
                    onChangeText={(num) => setConfirmPassword(num)}
                />
                <space.s2 />
                <Button title="Create Password" background={color.Primary} width="100%" onPress={handleCreatePassword} />
            </View>
            </View>
        </SafeAreaView>
    )
}

export default CreatePasswordScreen

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
})