import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Error from '../../components/Error/Error'
import DetailCard from '../../components/DetailCard'
import Loading from '../../components/Loading/Loading'
import useFetch from '../../hooks/useFetch/useFetch'
import Config from 'react-native-config'

const Detail = ({ route }) => {
    const { idMeal } = route.params;
    const { loading, error, data } = useFetch(`${Config.DETAIL_URL}${idMeal}`)

    const renderDetailCard = ({ item }) => {
        return <DetailCard item={item} />
    }

    if (error) {
        return <Error />
    }
    if (loading) {
        return <Loading />
    }


    return (
        <FlatList
            data={data.meals}
            renderItem={renderDetailCard}
            keyExtractor={item => item.idMeal}
        >

        </FlatList>
    )
}

export default Detail