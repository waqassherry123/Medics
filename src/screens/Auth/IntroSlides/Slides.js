import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//utilities
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../theme/metrics'

const Slides = ({item}) => {
  console.log("item", item?.image)
  return (
    <View style={styles.container}>
     <Image source={item?.image} style={styles.image}  />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  )
}

export default Slides

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // Ensure this property is set to 'column'
    paddingHorizontal: wp(4),
    marginVertical: hp(4),
  },
  image: { 
    width: wp(100), 
    height: hp(50), 
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: wp(6),
    fontWeight: '700',
    alignSelf: 'center',
  },
})