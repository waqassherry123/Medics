import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

// package
import { useNavigation } from "@react-navigation/native";

// assets
import Icon from '../../assets/Icon'


//constants
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'

const Header = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => navigation.goBack() }>
        <Icon name="Back"
          height={hp(4)}
          width={wp(8)}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={{fontSize:wp(7), fontWeight: "600"}}>{props.title}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  textContainer:{ 
    alignItems: 'center', 
    marginLeft: wp(20) 
  },

})