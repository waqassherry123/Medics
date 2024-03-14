import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

//packages
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

//utils
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import { color } from '../../theme/colors'
import * as images from '../../assets/images/index'

//components
import * as space from '../../components/common/Spacer'
import Header from '../../components/common/Header';
import { Title } from '../../components/common/Text';
import Button from '../../components/common/Button';
import SuccessModal from '../../components/common/SuccessModal';

const Appointment = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item
    const Date = route.params.Date
    const Time = route.params.Time

    //states
    const [modalVisible, setModalVisible] = useState(false);

  return (
      <SafeAreaView>
          <SuccessModal
              title="Payment Success"
              buttonTitle="Chat Doctor"
              subTitle="Your payment has been successful, you can have a consultation session"
              text="with your trusted doctor"
              visible={modalVisible}
              onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("Chat");
              }}
          />
          <View style={{ paddingHorizontal: wp(5), paddingVertical: hp(1) }}>
            <Header title="Appointment" />
            <space.s3 />
              
              {/* Profile Card */}
              <View style={styles.card}>
                  <Image source={item?.image} style={styles.image} />
                  <View style={styles.content}>
                      <Text style={styles.docName}>{item?.docName}</Text>
                      <Text style={styles.field}>{item?.field}</Text>
                      <space.s1 />
                      <View >
                          <View style={styles.ratingContainer}>
                              <Image source={images.Star} />
                              <Text style={styles.rating}>{item?.rating}</Text>
                          </View>
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(1) }}>
                              <Image source={images.Location} style={{ width: wp(4), height: wp(4), marginRight: wp(0.5) }} />
                              <Text style={styles.distance}> {item.distance} away</Text>
                          </View>
                      </View>
                  </View>
              </View>
              <space.s2 />

              {/* Date */}
              <View>
                  <View style={{ flexDirection:'row', justifyContent:"space-between"}}>
                      <Title>Date</Title>
                      <TouchableOpacity>
                          <Text style={{ color: color.Secondary}}>Change</Text>
                      </TouchableOpacity>
                  </View>
                  <space.s1 />
                  <View style={{flexDirection:"row", alignItems:"center",}}>
                      <View style={styles.imageContainer}>
                          <Image source={images.Calendar2} />
                      </View>
                      <Text style={styles.dateTime}>{Date} | {Time}</Text>
                  </View>
              </View>
              <View style={{ height: hp(0.1), backgroundColor: "rgba(61, 168, 176, 0.2)", width:"100%", marginVertical: hp(1.5) }} />
    

              {/* Reason */}
              <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                  <Title>Reason</Title>
                  <TouchableOpacity>
                      <Text style={{ color: color.Secondary }}>Change</Text>
                  </TouchableOpacity>
              </View>
              <space.s1 />
              <View style={{ flexDirection: "row", alignItems: "center", }}>
                  <View style={styles.imageContainer}>
                      <Image source={images.Edit} />
                  </View>
                  <Text style={styles.dateTime}>Chest Pain</Text>
              </View>
              <View style={{ height: hp(0.1), backgroundColor: "rgba(61, 168, 176, 0.2)", width:"100%", marginVertical: hp(1.5) }} />
              

              {/* Payment Detail */}
              <View>
                  <Title>Payment Detail</Title>
                  <View style={styles.paymentContainer}>
                      <Text style={styles.paymentText}>Consultation</Text>
                      <Text>$60.00</Text>
                  </View>
                  <View style={styles.paymentContainer}>
                      <Text style={styles.paymentText}>Admin Fee</Text>
                      <Text>$01.00</Text>
                  </View>
                  <View style={styles.paymentContainer}>
                      <Text style={styles.paymentText}>Additional Discount</Text>
                      <Text>-</Text>
                  </View>
                  <View style={styles.paymentContainer}>
                      <Text style={styles.totalText}>Total</Text>
                      <Text style={[styles.totalText, { color: color.Primary }]}>$61.00</Text>
                  </View>
              </View>
              <View style={{ height: hp(0.1), backgroundColor: "rgba(61, 168, 176, 0.2)", width:"100%", marginVertical: hp(1) }} />

              {/* Payment Method */}
              <View>
                  <Title>Payment Method</Title>
                  <TouchableOpacity style={{justifyContent:"space-between", flexDirection:"row", borderColor: 'rgba(61, 168, 176, 0.2)', borderWidth: 1, paddingVertical: hp(2.5), paddingHorizontal: wp(4), borderRadius: wp(4)}}>
                    <Image source={images.Visa} />
                    <Text style={{ color: color.Secondary}}>Change</Text>
                  </TouchableOpacity>
              </View>
              <space.s2 />

              {/* Booking Button */}
              <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <View>
                      <Text style={{ color: color.Secondary}}>Total</Text>
                      <Text style={{fontSize: 14, fontWeight:"bold", marginTop: hp(0.5)}}>$61.00</Text>
                  </View>
                  <Button title="Booking" width={wp(60)} background={color.Primary} onPress={() => setModalVisible(true)} />
              </View>
          </View>
      </SafeAreaView>
  )
}

export default Appointment

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderRadius: wp(3),
        paddingVertical: hp(1),
        paddingHorizontal: wp(2),
        borderWidth:0.5,
        borderColor: color.Secondary,
    },
    image: {
        width: wp(27),
        height: wp(27),
        borderRadius:wp(2),
        marginRight: wp(3),
    },
    content: {
        paddingVertical: hp(0.1),
    },
    docName: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.7,
        marginBottom: hp(0.2)
    },
    field: {
        fontSize: 12,
        color: '#ADADAD',
    },
    ratingContainer: { 
        flexDirection: 'row',
        justifyContent:"space-between", 
        alignItems:'center', 
        backgroundColor: "rgba(25, 154, 142, 0.1)",  
        width: wp(11),
        height: hp(2.8),
        paddingHorizontal: wp(1),
        borderRadius: wp(1),
        marginTop: hp(1),
    },
    rating: {
        fontSize: 14,
        color: color.Primary,
        marginLeft: wp(1),
    },
    distance: {
        fontSize: 14,
        color: '#ADADAD',
    },
    imageContainer: { 
        padding: wp(4), 
        backgroundColor: "rgba(25, 154, 142, 0.1)", 
        borderRadius: wp(10), 
        height: wp(11), 
        width: wp(11),
        justifyContent:'center',
        alignItems:'center'
    },
    dateTime: {
        fontSize: 14,
        fontWeight: "800",
        color: "#555555",
        marginLeft: wp(4)
    },
    paymentContainer: { 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        marginBottom: hp(1.5) 
    },
    paymentText: {
        fontSize: 14,
        color:"#A1A8B0"
    },
    totalText: {
        fontSize: 14,
        fontWeight:"bold"
    }
})