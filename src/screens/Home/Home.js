import { StyleSheet, Text, View ,SafeAreaView, Image,FlatList} from 'react-native'
import React, {useState} from 'react'

//packages
import { useNavigation } from '@react-navigation/native';

//utils
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../theme/metrics'
import * as images from "../../assets/images/index";

//components
import TextInputWithIcon from '../../components/common/TextInputWithIcon';
import * as space from '../../components/common/Spacer';
import CategoryCard from '../../components/DoctorConsultation/CategoryCard';




const Home = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('')

    const categories = [
        { category: 'Doctor', icon: images.General },
        { category: 'Pharmacy', icon: images.Pharmacy },
        { category: 'Hospital', icon: images.Hospital },
        { category: 'Ambulance', icon: images.Ambulance },
    ];
    const handleCategoryPress = (category) => {
        if (category == "Doctor"){
            navigation.navigate("FindDoctor")
        }
    };

    const renderItem = ({ item, index }) => {
        return (
            <CategoryCard item={item} index={index} onPress={() => handleCategoryPress(item.category)} />
        );
    };

  return (
      <SafeAreaView style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: wp(5) }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ fontSize: 22, fontWeight: "600", lineHeight: 32 }}>Find your desire{"\n"}health solution</Text>
                  <Image source={images.Notification} style={styles.icon} />
              </View>

              <space.s3 />
              <TextInputWithIcon
                  icon={images.Search}
                  placeholder="Search doctor, drugs, articles..."
                  keyboardType="email-address"
                  value={search}
                  height={hp(2.5)}
                  onChangeText={(text) => setEmail(text)}
              />

              <View style={{}}>
                  <FlatList
                      data={categories}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
                      numColumns={4}
                  />
              </View>
          </View>
      </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})