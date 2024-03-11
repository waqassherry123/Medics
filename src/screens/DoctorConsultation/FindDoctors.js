import { SafeAreaView, StyleSheet, View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

//packages
import { useNavigation } from '@react-navigation/native';

// components
import Header from '../../components/common/Header'
import CategoryCard from '../../components/DoctorConsultation/CategoryCard'

// utils
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import TextInputWithIcon from '../../components/common/TextInputWithIcon'
import * as images from '../../assets/images/index'
import * as space from '../../components/common/Spacer'
import { Title } from '../../components/common/Text'
import { color } from '../../theme/colors'

const FindDoctors = () => {
    const navigation = useNavigation()
    //states
    const [search, setSearch] = useState('')

    const categories = [
        { category: 'General', icon: images.General },
        { category: 'Pulmonolo', icon: images.Lungs },
        { category: 'Dentist', icon: images.Dentist },
        { category: 'Psychiatrist', icon: images.Psychiatrist },
        { category: 'Covid-19', icon: images.Covid },
        { category: 'Surgeon', icon: images.Syringe },
        { category: 'Cardiologist', icon: images.Cardiologist },
    ];

    const doctorDetails = [
        {
            docName: "Dr. Marcus",
            field: "Lungs Specialist",
            rating: 4.5,
            distance: "2 miles",
            about: "Dr. John Doe is a highly experienced pulmonologist with expertise in treating various lung diseases. He has been practicing for over 15 years and has successfully treated thousands of patients. His dedication to patient care and continuous learning sets him apart in the field.",
            image: images.Doc1,
        },
        {
            docName: "Dr. Jane",
            field: "Dentist",
            rating: 4.8,
            distance: "1.5 miles",
            about: "Dr. Jane Smith specializes in providing comprehensive dental care for patients of all ages. She is known for her gentle approach and personalized treatment plans. With over 10 years of experience, she stays updated with the latest advancements in dentistry.",
            image: images.Doc2,
        },
        {
            docName: "Dr. David",
            field: "Psychiatrist",
            rating: 4.2,
            distance: "3 miles",
            about: "Dr. David Johnson is dedicated to providing compassionate mental health care and treatment. He believes in a holistic approach to mental well-being and integrates therapy with medication management. Dr. Johnson is committed to destigmatizing mental illness and promoting mental health awareness.",
            image: images.Doc4,
        },
        {
            docName: "Dr. Maria",
            field: "Cardiologist",
            rating: 4.5,
            distance: "3 miles",
            about: "Dr. David Johnson is specilized and global awad winner in cardiology and world famous for her skills. She has authored numerous research papers and contributed to advancements in cardiac care. Dr. Maria is passionate about educating her patients on heart health and preventive measures.",
            image: images.Doc3,
        },    
    ];
    
    
    const renderItem = ({item, index}) => {
        return(
            <CategoryCard item={item} index={index} onPress={() => navigation.navigate("DoctorDetail", {item: item})} />
        )
    }

    const renderRecent = ({item, index}) => {
        const itemStyle = index !== 0 ? { marginLeft: wp(3) } : {};
        return (
            <TouchableOpacity style={[styles.recentContainer, itemStyle]} onPress={() => navigation.navigate("DoctorDetail", {item: item})}>
                <Image source={item?.image} style={{ borderRadius: wp(10), width: wp(18), height: hp(8), resizeMode:'cover', marginBottom: hp(0.5)}} />
                <Text style={[styles.distance, {marginTop: hp(0.5)}]}>{item?.docName}</Text>
            </TouchableOpacity>
        )
    }
    
  return (
      <SafeAreaView>
          <View style={{ paddingHorizontal: wp(5), paddingVertical: hp(1), }}>
              <Header title="Find Doctors" />
              <space.s3 />
              <TextInputWithIcon
                  icon={images.Search}
                  placeholder="Find a doctor"
                  keyboardType="email-address"
                  value={search}
                  height= {hp(2.5)}
                  onChangeText={(text) => setEmail(text)}
              />
              <space.s2 />
              <Title >Category</Title>
              <FlatList
                  data={categories}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={4}
              />
              <space.s2 />
              <Title >Recommended Doctors</Title>
              <View style={styles.card}>
                  <Image source={doctorDetails[0].image} style={styles.image} />
                  <View style={styles.content}>
                      <Text style={styles.docName}>{doctorDetails[0].docName}</Text>
                      <Text style={styles.field}>{doctorDetails[0].field}</Text>
                      <View style={{height: hp(0.1), backgroundColor: color.Gray, width: wp(50), marginVertical: hp(1)}} />
                      {/* <space.s3 /> */}
                      <View style={{ flexDirection: 'row', alignItems:'center' }}>
                          <View style={styles.ratingContainer}>
                              <Image source={images.Star} />
                              <Text style={styles.rating}>{doctorDetails[0].rating}</Text>
                          </View>
                          <View style={{flexDirection:'row', alignItems:'center'}}>
                              <Image source={images.Location} style={{width: wp(4), height: wp(5), marginRight: wp(0.5)}} />
                              <Text style={styles.distance}> {doctorDetails[0].distance} away</Text>
                          </View>
                      </View>
                  </View>
              </View>
              <space.s3 />
              <Title >Your Recent Doctors</Title>
              {/* <space.s0 /> */}
              <FlatList
                  data={doctorDetails}
                  renderItem={renderRecent}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={4}
                  contentContainerStyle={{justifyContent:'space-between', width:"100%"}}
              />
          </View>
      </SafeAreaView>
  )
}

export default FindDoctors

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderRadius: wp(3),
        backgroundColor: '#ffffff',
        paddingVertical: hp(2),
        paddingHorizontal: wp(5),
    },
    image: {
        width: wp(25),
        height: wp(25),
        borderRadius:wp(50),
        marginRight: wp(3),
    },
    content: {
        padding: 10,
    },
    docName: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.7,
        marginBottom: hp(0.5)
    },
    field: {
        fontSize: 12,
        color: '#ADADAD',
    },
    ratingContainer: { 
        flexDirection: 'row',
        justifyContent:"space-between", 
        alignItems:'center', 
        backgroundColor: "rgba(25, 154, 142, 0.2)",  
        width: wp(11),
        height: hp(3),
        paddingHorizontal: wp(1),
        paddingVertical: hp(0.5),
        borderRadius: wp(1),
        marginRight: wp(6)
    },
    rating: {
        fontSize: 14,
        color: color.Primary,
        marginLeft: wp(1),
    },
    distance: {
        fontSize: 14,
        color: '#3B4453',
    },
    recentContainer: {
        justifyContent:"center", 
        alignItems:"center", 
        padding: wp(1)
    }
})