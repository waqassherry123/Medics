import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

//utils
import { color } from '../theme/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../theme/metrics';


const Card = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <View style={styles.card}>
      <View style={styles.leftContent}>
        <Text style={styles.text}>{data[currentIndex].description}</Text>
      </View>
      <View style={styles.rightContent}>
        <Image source={data[currentIndex].icon} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E8F3F1",
    borderRadius: wp(2.5),
    padding: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
    marginRight: wp(2.5),
    marginBottom:wp(12)
  },
  rightContent: {
    marginLeft: wp(2.5),
    borderWidth:wp(3.5),
    borderColor:"#FFFFFF",
    borderRadius:wp(38),
    height:110,
    width:115

  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight:25
  },
  image: {
    width: 91,
    height: 125,
    resizeMode: 'contain',
    bottom:25
  },
  button: {
    position: 'absolute',
    bottom: hp(3),
    left: wp(5),
    backgroundColor: color.Primary,
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(3),
    borderRadius: wp(4),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Card;
