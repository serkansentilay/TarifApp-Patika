import { View, Text, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import React from 'react'
import styles from './ProductCard.style'

const ProductCard = ({ product, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <ImageBackground
                    imageStyle={styles.imagebackground}
                    style={styles.image}
                    source={{ uri: product.strMealThumb }}
                >
                    <Text numberOfLines={1} style={styles.title}>{product.strMeal}</Text>
                </ImageBackground>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCard