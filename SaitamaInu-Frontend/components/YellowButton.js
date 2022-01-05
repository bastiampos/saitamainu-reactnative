import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const YellowButton = ({text, actionPress, customStyles, disabled}) => {
    return (
        <>
        {!disabled ? <TouchableOpacity 
            style={[styles.button, customStyles, {backgroundColor: '#E1AA0F'}]}
            onPress={actionPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity> : <View style={[styles.button, customStyles, {backgroundColor: '#9F9FA6'}]}>
            <Text style={styles.text}>{text}</Text>
        </View>}
        </>
    )
}

export default YellowButton

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 25,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
