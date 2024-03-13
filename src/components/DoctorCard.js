import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

//utils
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../theme/metrics';
import { color } from '../theme/colors';
import * as images from "../assets/images/index";


const DoctorCard = ({ doctor ,flexDirection, customWidth, customHeight}) => {
    return (
        <View style={[styles.card, {flexDirection: flexDirection ? flexDirection : "column", width: customWidth, height:customHeight }]}>
            <Image source={doctor.image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.docName}>{doctor.docName}</Text>
                <Text style={styles.field}>{doctor.field}</Text>
                <View style={[styles.featureContainer, { flexDirection: flexDirection ? "column" : "row" }]}>
                    <View style={styles.ratingContainer}>
                        <Image source={images.Star} />
                        <Text style={styles.rating}>{doctor.rating}</Text>
                    </View>
                    <View style={[styles.milesContainer,]}>
                        <Image source={images.Location} style={{ width: wp(3), height: wp(3), marginRight: wp(1) }} />
                        <Text style={styles.distance}>{doctor.distance} away</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding:wp(2),
        borderRadius: wp(3),
        backgroundColor: '#ffffff',
        paddingVertical: hp(2),
        width: wp(37),
        height:hp(20.5),
        marginHorizontal:wp(1),
        alignItems:"center",
        borderWidth:1,
        borderColor:color.Gray,
    },
    image: {
        width: wp(15),
        height: hp(10),
        marginRight: wp(3),
        borderRadius:wp(20)
    },
    content: {
        flex: 1,
    },
    docName: {
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.7,
    },
    field: {
        fontSize: 12,
        color: '#ADADAD',

    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: "rgba(25, 154, 142, 0.2)",
        width: wp(11),
        height: hp(2),
        paddingHorizontal: wp(1),
        borderRadius: wp(1),
    },
    rating: {
        fontSize: 9,
        fontWeight: "500",
        color: color.Primary,
        marginLeft: wp(1),
    },
    distance: {
        fontSize: 8,
        fontWeight: "500",
        color: '#ADADAD',
    },
    featureContainer:{
        marginTop: hp(1),
        justifyContent: "space-between",
    },
    milesContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: wp(1) 
    }
});

export default DoctorCard;
