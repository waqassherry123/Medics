import { StyleSheet, Text, View ,SafeAreaView, Image} from 'react-native'
import React from 'react'

//utils
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../theme/metrics'
import * as images from "../../assets/images/index";


const Home = () => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: wp(5) }}>
            
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ fontSize: 22, fontWeight: "600", lineHeight: 32 }}>Find your desire{"\n"}health solution</Text>
                  <Image source={images.Notification} style={styles.icon} />
              </View>

          </View>
      </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})