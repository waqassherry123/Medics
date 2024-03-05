import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';

//packages
import { useNavigation } from '@react-navigation/native';

//assets
import { Left } from '../../assets/images';

// Utils
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../theme/metrics';
import { color } from '../../utils/colors';

const Header = ({ title, right, onPress }) => {
  const navigation = useNavigation();
  const rightContent = right ? <Text>{right}</Text> : <View />;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Left} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View />
      </View>
    </SafeAreaView>
  );
};

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
});

export default Header;
