import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

//packages
import { useNavigation } from '@react-navigation/native';

//utils
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../theme/metrics'
import * as images from "../../assets/images/index";

//components
import TextInputWithIcon from '../../components/common/TextInputWithIcon';
import * as space from '../../components/common/Spacer';
import CategoryCard from '../../components/DoctorConsultation/CategoryCard';
import LearnMoreCard from '../../components/LearnMoreCard';
import DoctorCard from '../../components/DoctorCard';
import { Title } from '../../components/common/Text';
import { color } from '../../theme/colors';
import HealthArticleCard from '../../components/HealthArticleCard';




const Home = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('')

    const categories = [
        { category: 'Doctor', icon: images.General },
        { category: 'Pharmacy', icon: images.Pharmacy },
        { category: 'Hospital', icon: images.Hospital },
        { category: 'Ambulance', icon: images.Ambulance },
    ];

    const LearnMore = [
        { description: 'Early protection for your family health', icon: images.LearnMore },
        { description: 'Find your desire healt solution', icon: images.Slide1 },
    ];

    const doctorDetails = [
        {
            docName: "Dr. Marcus Horizon",
            field: "Chardiologist",
            rating: 4.5,
            distance: "2 miles",
            about: "Dr. John Doe is a highly experienced pulmonologist with expertise in treating various lung diseases.",
            image: images.LearnMore,
        },
        {
            docName: "Dr. Maria Elena",
            field: "Psychologist",
            rating: 4.8,
            distance: "1.5 miles",
            about: "Dr. Jane Smith specializes in providing comprehensive dental care for patients of all ages.",
            image: images.Slide1,
        },
        {
            docName: "Dr. Stevi Jessi",
            field: "Orthopedist",
            rating: 4.2,
            distance: "3 miles",
            about: "Dr. David Johnson is dedicated to providing compassionate mental health care and treatment.",
            image: images.Slide2,
        },
        {
            docName: "Dr. Maria",
            field: "Cardiologist",
            rating: 4.5,
            distance: "3 miles",
            about: "Dr. David Johnson is specilized and global awad winner in cardiology and world famous for her skills.",
            image: images.Slide3,
        },
    ];

    const handleCategoryPress = (category) => {
        if (category == "Doctor") {
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
            <ScrollView style={{ paddingHorizontal: wp(5) }}>
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
                    onChangeText={(text) => setSearch(text)}
                />

                <View>
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                    />
                </View>
                <space.s2 />
                <LearnMoreCard data={LearnMore} />
                <space.s2 />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Title> Top Doctors </Title>
                    <TouchableOpacity onPress={() => navigation.navigate("TopDoctors", { doctors: doctorDetails })}>
                        <Text style={{ color: color.Primary, fontSize: 14, fontWeight: "400", }}>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>
                <space.s1 />
                <FlatList
                    data={doctorDetails}
                    renderItem={({ item }) => <DoctorCard doctor={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            <space.s2/>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Title> Health article </Title>
                    <Text style={{ color: color.Primary, fontSize: 14, fontWeight: "400", }}>
                        See all
                    </Text>
                </View>
                <space.s1/>
                <View style={styles.Articlecontainer}>
                    <HealthArticleCard
                        imageSource={images.Doc1}
                        title="Dr. Stevi Jessi"
                        description="Dr. David Johnson is specilized and global awad winner"
                        buttonText="Learn More"
                        // onPressButton={handleButtonPress}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    Articlecontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      },
})