import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

//packages
import { useNavigation } from '@react-navigation/native';

//utils
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import { color } from '../../theme/colors'
import * as images from '../../assets/images/index'
import * as space from '../../components/common/Spacer'
import Button from '../../components/common/Button'

const Chat = () => {
  const navigation = useNavigation();
  
  return (
      <SafeAreaView>
          <View style={{paddingHorizontal: wp(5)}}>
              <View style={styles.container}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Image source={images.Left} />
                  </TouchableOpacity>
                  <Text style={styles.title}>Dr.Marcus</Text>
                  <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                  <Image source={images.VideoCamera} style={{marginRight: wp(7)}} />
                  <Image source={images.Phone} />
                  </View>
              </View>
              <space.s4 />
              <View style={{justifyContent:"center", alignItems:"center", borderWidth: 1, borderColor: "#E8E8E8", paddingVertical: hp(2), borderRadius: wp(3)}}>
                <Text style={{fontSize:16, fontWeight:"700", color: color.Primary}}>Consultation Start</Text>
                <space.s1 />
                <Text style={{fontSize:12, color: color.Secondary}}>You can consult your problem to the doctor</Text>
              </View>
              <space.s2 />
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image source={images.Doc1} style={{borderRadius: wp(20), width: wp(14), height: wp(14)}} />
                  <View style={{marginLeft: wp(4), justifyContent:"space-between"}}>
                      <Text style={{ fontSize: 14, fontWeight: "600" }}>Dr.Marcus Andy</Text>
                      <Text style={{ color: color.Secondary, marginTop: hp(0.3) }}>10 min ago</Text>
                  </View>
              </View>
              <space.s2 />
              <View style={{padding: wp(3), backgroundColor: "#E8F3F1", width: wp(65), borderBottomLeftRadius: wp(2), borderBottomRightRadius: wp(2), borderTopRightRadius: wp(2)}}>
                  <Text style={{fontSize:14, color: "#555555"}}>Hello! Can I help you?</Text>
              </View>
              <space.s2 />
              <View style={{padding: wp(3), backgroundColor: color.Primary, width: wp(60), alignSelf:"flex-end",borderBottomLeftRadius: wp(2), borderBottomRightRadius: wp(2), borderTopLeftRadius: wp(2)}}>
                  <Text style={{fontSize:14, color: color.White}}>I have suffering from headache and cold for 3 days, I took 2 tablets of dolo, but still pain</Text>
              </View>
              <space.s6 />
              <View style={styles.messageContainer}>
                <View style={styles.messageInput}> 
                  <TextInput placeholder='Type message...'
                      style={{
                          flex: 1,
                      }}
                  />
                  <Image source={images.Paperclip}
                      style={{
                          width: 24,
                          height: 24,
                          marginHorizontal: 5,
                      }}
                      resizeMode="contain"
                  />
                </View>
                <Button title="Send" background={color.Primary} width={wp(34)} />
              </View>
          </View>
      </SafeAreaView>
  )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: wp(2),
        paddingHorizontal: wp(3),
        width: wp(90)
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: wp(7),
        fontFamily: "Gilroy-Regular",
        lineHeight:22
      },
      messageContainer: {
        flex: 1,
        position:"absolute",
        flexDirection:"row", 
        justifyContent:"space-between",
        left: wp(5),
        bottom:hp(-40),
      },
      messageInput: {
        flexDirection:"row", 
        padding: wp(3), 
        borderWidth: 1, 
        borderColor: color.Secondary, 
        width: wp(54), 
        borderRadius: wp(8), 
        alignItems:"center", 
        marginRight: wp(3)
    }
})