import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 8,
    },
    imageContainer: { padding: 10 },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        borderBottomLeftRadius: 60,
        borderTopLeftRadius: 60,
    },

    title: {
        fontSize: 20,
        marginLeft: 10,
    },
});