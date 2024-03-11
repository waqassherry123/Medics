import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView} from 'react-native';

//Component
import Header from '../../components/common/Header';
import DoctorCard from '../../components/DoctorCard';

//utlis
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../theme/metrics';


const TopDoctors = ({ route }) => {
  const { doctors } = route.params;

  const renderDoctorItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <DoctorCard doctor={item} flexDirection="row" customWidth={wp(90)}/>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 ,alignItems:"center"}}>
    <View style={{}}>
      <Header title="Top Doctors" />
    <FlatList
      data={doctors}
      renderItem={renderDoctorItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          />
          </View>
  </SafeAreaView>
  );
};

export default TopDoctors;

const styles = StyleSheet.create({
  cardContainer: {
    // paddingHorizontal: 20,
    marginBottom: 10,
  },
});
