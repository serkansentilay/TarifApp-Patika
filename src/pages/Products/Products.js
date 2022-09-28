import { SafeAreaView, Text, FlatList } from 'react-native'
import React from 'react'
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import ProductCard from '../../components/ProductCard';

import styles from './Products.style'




const Product = ({ route, navigation }) => {
    const { strCategory } = route.params;

    const { loading, error, data } = useFetch(`${Config.MEALS_URL}${strCategory}`);

    const handleProductSelect = (idMeal) => {
        navigation.navigate('DetailPage', { idMeal });
    }

    const renderProduct = ({ item }) =>
        <ProductCard product={item}
            onSelect={() => handleProductSelect(item.idMeal)} />

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderProduct}
                keyExtractor={data => data.idMeal}
            />
        </SafeAreaView>
    )
}

export default Product