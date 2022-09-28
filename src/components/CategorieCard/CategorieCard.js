import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import styles from './CategorieCard.style'

const CategorieCard = ({ category, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: category.strCategoryThumb }}
                    />
                </View>
                <Text style={styles.title}>{category.strCategory}</Text>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategorieCard