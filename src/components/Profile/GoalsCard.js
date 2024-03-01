import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from '../../assets/Icon'

// constants
import cardBackground from "../../assets/images/card-background.png"

//componenes
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../theme/metrics'

const GoalsCard = (props) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <TouchableOpacity style={{marginVertical: hp(0.3), marginHorizontal:wp(4)}} onPress={() => setIsOpened(prev => !prev)}>
      {
        isOpened && props.text 
        ?
          <ImageBackground source={cardBackground} style={{paddingVertical: wp(2), paddingHorizontal: wp(4) }} resizeMode='cover'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: hp(1) }}>
              <Text style={{fontWeight: '700'}}>{props.title}</Text>
              <Icon
                name={props.icon}
                height={hp(3)}
                width={hp(3)} />
            </View>
            <Text style={styles.text}>{props.text}</Text>
          </ImageBackground>
        :
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: hp(1) }}>
                <Text>{props.title}</Text>
                <Icon
                  name={props?.icon ? props.icon : "Weight"}
                  height={hp(3)}
                  width={hp(3)} 
                  />
          </View>
      }
    </TouchableOpacity>

  )
}

export default GoalsCard

const styles = StyleSheet.create({
  text: {
    width: wp(70),
    marginBottom: hp(1),
  }
})