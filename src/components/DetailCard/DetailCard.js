import { View, Text, SafeAreaView, TouchableOpacity, Image, Linking } from 'react-native'
import React from 'react'
import styles from './DetailCard.style'

const DetailCard = ({ item }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{ uri: item.strMealThumb }} />
            <View style={styles.titleContainer}>
                <Text style={[styles.title, styles.titleTextProps]}>{item.strMeal}</Text>
                <Text style={[styles.country, styles.titleTextProps]}>{item.StrArea}</Text>
            </View>
            <Text style={styles.description}>{item.strInstructions}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.openURL(item.strYoutube)}
            >
                <Text style={styles.buttonText}>Watch on Youtube</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default DetailCard