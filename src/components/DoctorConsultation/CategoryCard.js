import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

//UTILS
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'

const CategoryCard = ({ item, index, onPress }) => {

    const itemStyle = index !== 0 && index !== 4 ? { marginLeft: wp(4.6) } : {};

    return (
        <TouchableOpacity style={[styles.container, itemStyle]} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={item?.icon} />
            </View>
            <Text style={styles.text}>{item?.category}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(2)
    },
    imageContainer: {
        backgroundColor: 'white',
        borderRadius: wp(5),
        marginBottom: hp(1),
        width: wp(19),
        height: hp(9),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(5),
    },
    text: {
        color: "#A1A8B0",
        fontSize: 13,
        alignSelf: "center"
    }
})