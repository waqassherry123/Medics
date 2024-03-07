import React, { useRef ,useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

//packages
import { useNavigation } from '@react-navigation/native';

//utils
import { color } from '../../../theme/colors';
import * as images from "../../../assets/images/index";
import { heightPercentageToDP as hp ,widthPercentageToDP as wp } from '../../../theme/metrics';
import { SafeAreaView } from 'react-native-safe-area-context';


const IntroSlides = () => {
    const navigation = useNavigation();
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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


    // const handleNextSlide = () => {
    //     if (scrollViewRef.current) {
    //         const nextIndex = activeSlideIndex + 1;
    //         if (activeSlideIndex === slidesContent.length) {
    //             // If it's the last slide, navigate to another screen
    //             navigation.navigate('GetStartedScreen');
    //         } else {
    //             scrollViewRef.current.scrollTo({
    //                 x: (scrollViewRef.current.contentOffset?.x || 0) + Dimensions.get('window').width,
    //                 animated: true,
    //             });
    //             setActiveSlideIndex((prev)=> prev+1);
    //             console.log("active index", activeSlideIndex)
    //         }
    //     }
    // };
    const handleNextSlide = () => {
        if (scrollViewRef.current) {
            const nextIndex = activeSlideIndex + 1;
            if (nextIndex >= slidesContent.length) {
                // If it's the last slide or beyond, navigate to another screen
                navigation.navigate('GetStartedScreen');
            } else {
                scrollViewRef.current.scrollTo({
                    x: nextIndex * Dimensions.get('window').width,
                    animated: true,
                });
                setActiveSlideIndex(nextIndex);
            }
        }
    };
    
    
     console.log(activeSlideIndex)

    return (
        <SafeAreaView style={{flex:1}} >
            <TouchableOpacity onPress={() => navigation.navigate("GetStartedScreen")}>
                <Text style={{ textAlign: "right", paddingRight: wp(6), color: "#A1A8B0", fontSize: 16 }}>Skip</Text>
            </TouchableOpacity>
          <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {slidesContent.map((slide, i) => (
                    <TouchableOpacity key={slide.key} style={styles.slide} activeOpacity={1} >
                        <Image source={slide.image} style={styles.image} />
                        <View style={{ backgroundColor: "#F5F7FF", height: 160, width: "85%", borderRadius: 15, padding: 9 }}>
                            <Text style={{ fontSize: 22, lineHeight: 29.7, fontWeight: "700" }}>{slide.title}</Text>
                            <View style={{ flexDirection: "row", justifyContent: "", alignItems: "center", justifyContent: "space-between", marginVertical: 30 }}>
                                {/* <View style={{flexDirection:"row"}}>
                                <View key={i} style={[styles.dot, { backgroundColor: activeSlideIndex === i ? color.Primary : 'blue' }]} /> */}
                                {/* <View style={styles.dot} />
                                <View style={styles.dot} /> */}
                                {/* </View> */}
                                <View style={styles.dotcontainer}>
                                    <View style={[styles.dot, activeSlideIndex === 0 && styles.activeDot]} />
                                    <View style={[styles.dot, activeSlideIndex === 1 && styles.activeDot]} />
                                    <View style={[styles.dot, activeSlideIndex === 2 && styles.activeDot]} />
                                </View>
                                <TouchableOpacity style={styles.nextIconContainer} onPress={handleNextSlide}>
                                    <Image source={images.RightArrow} />
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
    nextIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: color.Primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      dot: {
        width: wp(5),
        height: hp(0.5),
        borderRadius: 5,
        backgroundColor:'rgba(25, 154, 142, 0.3)',
        marginHorizontal: 4,
      },
      activeDot: {
        backgroundColor: color.Primary, // Active dot color
      },
});

export default IntroSlides;
