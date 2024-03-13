import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

//utils
import * as images from "../assets/images/index";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../theme/metrics';
import { color } from '../theme/colors';
import * as space from "../components/common/Spacer"


const ProductCard = ({ image, title, quantity, price }) => {
  return (
      <View style={styles.card}>
          <View style={styles.imageContainer}>
              <Image source={image} style={styles.image} />
          </View>
          <View style={styles.detailsContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.quantity}>{quantity}</Text>
              <space.s0 />
              <View style={styles.priceContainer}>
                  <Text style={styles.price}>{price}</Text>
                  <Image source={images.Add} style={{ width: wp(5), height: wp(5), marginRight: wp(1), borderRadius: wp(1) }} />
              </View>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical:5,
    margin: 10,
    borderWidth: 1,
    borderColor: color.Gray,
    paddingHorizontal:15
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  detailsContainer: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight:14
  },
  quantity: {
    fontSize: 9,
    fontWeight:"500",
    color: '#888',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between"
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight:16,
  },
});

export default ProductCard;
