import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

//utils
import { color } from '../theme/colors';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from '../theme/metrics';


const HealthArticleCard = ({ imageSource, title, description, buttonText, onPressButton }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity onPress={onPressButton} style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  imageContainer: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 125,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    flex: 2,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
  button: {
    marginTop: hp(3),
    backgroundColor: color.Primary,
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(3),
    borderRadius: wp(4),
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HealthArticleCard;
