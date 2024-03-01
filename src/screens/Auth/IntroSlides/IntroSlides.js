import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, Image  } from 'react-native'
import React from 'react'

//packages
import AppIntroSlider from 'react-native-app-intro-slider';

//utilities
import { color } from '../../../theme/colors';
import * as images from "../../../assets/images/index"

//screens
import Slides from './Slides';



const IntroSlides = () => {

    const slidesContent = [
        {
            key: 'screen1',
            title: 'Consult only with a doctor you trust',
            image: images.Slide1,
        },
        {
            key: 'screen2',
            title: 'Find a lot of specialist doctors in one place',
            image: images.Slide2,
        },
        {
            key: 'screen3',
            title: 'Get connect our Online Consultation',
            image: images.Slide3,
        },
    ];

  const renderSlides = ({ item }) => {
    return <Slides item={item} />;
  };

  const renderSkipButton = () => {
    return (
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
    );
  };
  

  return (
    <SafeAreaView style={{backgroundColor: color.bkgBlue}}>
      <View style={{backgroundColor: 'aqua'}}>
        <Image source={images.Slide1} />
      <AppIntroSlider
        dotStyle={{ backgroundColor: 'rgba(25, 154, 142, 0.4)' }}
        activeDotStyle={{ backgroundColor: color.Primary }}
        renderItem={renderSlides}
        renderSkipButton={renderSkipButton}
        data={slidesContent}
      // onDone={onDone}
      />   
      </View>
    </SafeAreaView>
  )
}

export default IntroSlides

const styles = StyleSheet.create({
  skipButtonText: {
    fontSize: 18,
    color: 'red',
}
})