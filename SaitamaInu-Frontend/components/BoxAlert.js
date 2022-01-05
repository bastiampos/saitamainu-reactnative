import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxAlert = ({text, buttonStyle, textStyle}) => {
    return (
        <View style={[buttonStyle, styles.button]}>
            <Text style={[textStyle, styles.text]}>{text}</Text>
        </View>
    )
}

export default BoxAlert

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 9.23,
        borderWidth: 2,
    },
    text: {

    }
})
