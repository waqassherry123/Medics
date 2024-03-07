import { SafeAreaView, StyleSheet, View, FlatList } from 'react-native'
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
          </View>
      </SafeAreaView>
  )
}

export default FindDoctors

const styles = StyleSheet.create({})