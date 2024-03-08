import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

//packages
import { useRoute } from '@react-navigation/native';

//components
import Header from '../../components/common/Header'

//utils
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import { color } from '../../theme/colors'
import * as space from '../../components/common/Spacer'
import * as images from '../../assets/images/index'

const DoctorDetail = () => {
    const route = useRoute();
    const item = route.params.item
    console.log("item", item)
  return (
      <SafeAreaView>
          <View style={{ paddingHorizontal: wp(5), paddingVertical: hp(1)}}>
            <Header title="Doctor Detail" />
            <space.s2 />
            <View style={styles.card}>
                  <Image source={item?.image} style={styles.image} />
                  <View style={styles.content}>
                      <Text style={styles.docName}>{item?.docName}</Text>
                      <Text style={styles.field}>{item?.field}</Text>
                      <View style={{height: hp(0.1), backgroundColor: color.Gray, width: wp(50), marginVertical: hp(1)}} />
                      {/* <space.s3 /> */}
                      <View style={{ flexDirection: 'row', alignItems:'center' }}>
                          <View style={styles.ratingContainer}>
                              <Image source={images.Star} />
                              <Text style={styles.rating}>{item?.rating}</Text>
                          </View>
                          <View style={{flexDirection:'row', alignItems:'center'}}>
                              <Image source={images.Location} style={{width: wp(4), height: wp(5), marginRight: wp(0.5)}} />
                              <Text style={styles.distance}> {item.distance} away</Text>
                          </View>
                      </View>
                  </View>
              </View>
          </View>
      </SafeAreaView>
  )
}

export default DoctorDetail

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderRadius: wp(3),
        backgroundColor: '#ffffff',
        paddingVertical: hp(2),
        paddingHorizontal: wp(5),
    },
    image: {
        width: wp(25),
        height: wp(25),
        borderRadius:wp(50),
        marginRight: wp(3),
    },
    content: {
        padding: 10,
    },
    docName: {
        fontSize: 16,
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
        justifyContent:"space-between", 
        alignItems:'center', 
        backgroundColor: "rgba(25, 154, 142, 0.2)",  
        width: wp(11),
        height: hp(3),
        paddingHorizontal: wp(1),
        paddingVertical: hp(0.5),
        borderRadius: wp(1),
        marginRight: wp(6)
    },
    rating: {
        fontSize: 14,
        color: color.Primary,
        marginLeft: wp(1),
    },
    distance: {
        fontSize: 14,
        color: '#3B4453',
    },
})