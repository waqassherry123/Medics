import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

//utils
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../theme/metrics';
import { color } from '../theme/colors';
import * as images from "../assets/images/index";


const DoctorCard = ({ doctor }) => {
    return (
        <View style={styles.card}>
            <Image source={doctor.image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.docName}>{doctor.docName}</Text>
                <Text style={styles.field}>{doctor.field}</Text>
                <View style={{flexDirection:"row",marginTop:wp(1)}}>
                <View style={styles.ratingContainer}>
                    <Image source={images.Star} />
                    <Text style={styles.rating}>{doctor.rating}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
                    <Image source={images.Location} style={{ width: wp(4), height: wp(5), marginRight: wp(1) }} />
                    <Text style={styles.distance}>{doctor.distance} away</Text>
                </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: wp(3),
        backgroundColor: '#ffffff',
        paddingVertical: hp(2),
        width: wp(35),
        height:hp(20),
        marginHorizontal:wp(1),
        alignItems:"center",
        borderWidth:1,
        borderColor:color.Gray
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
        marginBottom: hp(0.5)
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
        height: hp(3),
        paddingHorizontal: wp(1),
        paddingVertical: hp(0.5),
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
});

export default DoctorCard;
