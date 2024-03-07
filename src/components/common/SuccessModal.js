import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native'
import React, {useState} from 'react'

//packages
import { useNavigation } from '@react-navigation/native';

//asssets
import * as images from '../../assets/images/index'

//utils
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import * as space from '../common/Spacer'
import { color } from '../../theme/colors'

//components
import Button from './Button'

const SuccessModal = (props) => {
    //states
    const [modalVisible, setModalVisible] = useState(props.visible);

    const closeModal = () => {
        // setModalVisible(false); // Close modal
    };

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible}
                onRequestClose={closeModal}
            >
                <View style={[styles.centeredView, { backgroundColor: 'rgba(0,0,0,0.5)'}]}>
                    <View style={styles.modalView}>
                        <Image source={images.Done} />
                        <Text style={styles.modalText}>{props.title}</Text>
                        <Text style={styles.subTitle}>{props.subTitle} {"\n"}
                            <Text style={{ textAlign: 'center' }}>{props.text}</Text>
                        </Text>
                        <space.s4 />
                        <Button title="Login" background={color.Primary} width={wp(56)} onPress={props.onPress} />
                        <space.s4 />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default SuccessModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: wp(5),
        paddingHorizontal: wp(9),
        paddingTop: hp(6),
        paddingBottom: hp(1),
        alignItems: "center",
      },
    modalText: {
        marginTop: hp(4),
        marginBottom: hp(2),
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    subTitle: {
        color: "#A1A8B0",
        fontSize: 16,
        lineHeight:22.7,
    }
})