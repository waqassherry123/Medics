import { StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'

//utils
import * as space from '../../components/common/Spacer';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics';


//component
import Header from '../../components/common/Header'
import * as images from "../../assets/images/index";
import TextInputWithIcon from '../../components/common/TextInputWithIcon';
import LearnMoreCard from "../../components/LearnMoreCard";
import TitleWithButton from '../../components/common/TitleWithButton';
import ProductCard from '../../components/ProductCard';

const Pharmacy = () => {
    const [search, setSearch] = useState('')

    const LearnMore = [
        { description: 'Order quickly with Prescription', icon: images.Prescription },
        { description: 'Find your desire Prescription', icon: images.Prescription },
    ];
    const PopularProductdata = [
        { id: '1', image: images.Prescription, title: 'Product 1', quantity: '20pcs', price: '$10' },
        { id: '2', image: images.Prescription2, title: 'Product 2', quantity: '50ml', price: '$20' },
        { id: '3', image: images.Prescription2, title: 'Product 2', quantity: '50ml', price: '$20' },
        { id: '4', image: images.Prescription2, title: 'Product 2', quantity: '50ml', price: '$20' },
    ];
    const ProductOnSale = [
        { id: '1', image: images.Prescription2, title: 'Product 1', quantity: '20pcs', price: '$10' },
        { id: '2', image: images.Prescription, title: 'Product 2', quantity: '50ml', price: '$20' },
        { id: '3', image: images.Prescription2, title: 'Product 2', quantity: '50ml', price: '$20' },
        { id: '4', image: images.Prescription, title: 'Product 2', quantity: '50ml', price: '$20' },
    ];


    return (
        <SafeAreaView>
            <ScrollView style={{ paddingHorizontal: wp(5) }}>
                <Header title="Pharmacy" />
                <space.s3 />
                <TextInputWithIcon
                    icon={images.Search}
                    placeholder="Search drugs,Categories..."
                    value={search}
                    height={hp(2.5)}
                    onChangeText={(text) => setSearch(text)}
                />
                <LearnMoreCard data={LearnMore} showBorder={false} buttonText="Upload Prescription" />
                <space.s2 />
                <TitleWithButton
                    title="Popular Products"
                    onPress={() => navigation.navigate("TopDoctors", { doctors: doctorDetails })}
                    buttonText="See all"
                />
                <FlatList
                    data={PopularProductdata}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ProductCard
                            image={item.image}
                            title={item.title}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    )}
                />
                <space.s2 />
                <TitleWithButton
                    title="Products on Sale"
                    onPress={() => navigation.navigate("TopDoctors", { doctors: doctorDetails })}
                    buttonText="See all"
                />
                <FlatList
                    data={ProductOnSale}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ProductCard
                            image={item.image}
                            title={item.title}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Pharmacy

const styles = StyleSheet.create({})