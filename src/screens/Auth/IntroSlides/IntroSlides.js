import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { color } from '../../../theme/colors';
import * as images from "../../../assets/images/index";
import { heightPercentageToDP } from '../../../theme/metrics';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icons

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
            title: 'Get connected to our Online Consultation',
            image: images.Slide3,
        },
    ];

    const scrollViewRef = useRef();

    const handleNextSlide = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({
                x: (scrollViewRef.current.contentOffset?.x || 0) + Dimensions.get('window').width,
                animated: true,
            });
        }
    };

    return (
        <SafeAreaView style={{flex:1}} >
          <Text style={{textAlign:"right",paddingRight:10,color:color.Gray}}>Skip</Text>
          <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {slidesContent.map((slide, index) => (
                    <TouchableOpacity key={slide.key} style={styles.slide} activeOpacity={1} onPress={handleNextSlide}>
                        <Image source={slide.image} style={styles.image} />
                            <View style={{backgroundColor:"#F5F7FF",height:160,width:"85%",borderRadius:15,padding:9}}>
                            <Text style={{fontSize:22,lineHeight:29.7,fontWeight:"700"}}>{slide.title}</Text>
                            <View style={{flexDirection:"row",justifyContent:"",alignItems:"center",justifyContent:"space-between",marginVertical:30}}>
                            <View style={{flexDirection:"row"}}>
                                <View style={styles.dot} />
                                <View style={styles.dot} />
                                <View style={styles.dot} />
                            </View>
                            <TouchableOpacity style={styles.nextIconContainer} onPress={handleNextSlide}>
                     <Image source={images.RightArrow}/>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.bkgBlue,
    },
    scrollContent: {
        flexGrow: 1,
    },
    slide: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 468,
        height: 450,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    dot: {
        width: 10,
        height: 4,
        borderRadius: 3,
        backgroundColor: color.Primary,
        marginRight: 5,
    },
    nextIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: color.Primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default IntroSlides;
