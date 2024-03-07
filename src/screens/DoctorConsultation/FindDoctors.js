import { SafeAreaView, StyleSheet, View, FlatList, Image, Text } from 'react-native'
import React, {useState} from 'react'

// components
import Header from '../../components/common/Header'
import CategoryCard from '../../components/DoctorConsultation/CategoryCard'

// utils
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics'
import TextInputWithIcon from '../../components/common/TextInputWithIcon'
import * as images from '../../assets/images/index'
import * as space from '../../components/common/Spacer'
import { Title } from '../../components/common/Text'

const FindDoctors = () => {
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
            about: "Dr. John Doe is a highly experienced pulmonologist with expertise in treating various lung diseases.",
            image: images.Doc1,
        },
        {
            docName: "Dr. Jane Smith",
            field: "Dentist",
            rating: 4.8,
            distance: "1.5 miles",
            about: "Dr. Jane Smith specializes in providing comprehensive dental care for patients of all ages.",
            image: images.Doc2,
        },
        {
            docName: "Dr. David",
            field: "Psychiatrist",
            rating: 4.2,
            distance: "3 miles",
            about: "Dr. David Johnson is dedicated to providing compassionate mental health care and treatment.",
            image: images.Doc4,
        },
        {
            docName: "Dr. Maria",
            field: "Cardiologist",
            rating: 4.5,
            distance: "3 miles",
            about: "Dr. David Johnson is specilized and global awad winner in cardiology and world famous for her skills.",
            image: images.Doc3,
        },
        
    ];
    

    const renderItem = ({item, index}) => {
        return(
            <CategoryCard item={item} index={index} />
        )
    }
    
  return (
      <SafeAreaView>
          <View style={{ paddingHorizontal: wp(5), paddingVertical: hp(1) }}>
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
              <View style={{}}>
                  <FlatList
                      data={categories}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
                      numColumns={4}
                  />
              </View>
              <space.s3 />
              <Title >Recommended Doctors</Title>
              <View style={styles.card}>
                  <Image source={doctorDetails[0].image} style={styles.image} />
                  <View style={styles.content}>
                      <Text style={styles.docName}>{doctorDetails[0].docName}</Text>
                      <Text style={styles.field}>{doctorDetails[0].field}</Text>
                      <space.s3 />
                      <View style={{flexDirection:'row'}}>
                          <Text style={styles.rating}>{doctorDetails[0].rating}</Text>
                          <Text style={styles.distance}>Distance: {doctorDetails[0].distance}</Text>
                      </View>
                  </View>
              </View>
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
    rating: {
        fontSize: 14,
        color: '#888',
        marginRight: wp(1),
    },
    distance: {
        fontSize: 14,
        color: '#888',
    },
})