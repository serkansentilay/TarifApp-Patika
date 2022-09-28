import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import CategorieCard from '../../components/CategorieCard';

import styles from './Categories.style'



const Categories = ({ navigation }) => {

    const { loading, error, data } = useFetch(Config.CATEGORY_URL);

    const handleCategorySelect = (strCategory) => {
        navigation.navigate('ProductsPage', { strCategory });
    }

    const renderCategory = ({ item }) =>
        <CategorieCard category={item}
            onSelect={() => handleCategorySelect(item.strCategory)} />

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={data.categories}
                renderItem={renderCategory}
                keyExtractor={item => item.idCategory}
            />
        </View>
    )
}

export default Categories