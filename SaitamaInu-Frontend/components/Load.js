import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Load = ({texts, newAction}) => {
    return (
        <View style={styles.sendingData}>
            <Image style={styles.spinner} source={require('../assets/load.gif')} />
            {texts ? texts.map(text => <Text key={text}>{text}</Text>) : <></>}
            <Text onPress={() => newAction(false)}>Back</Text>
        </View>
    )
}

export default Load

const styles = StyleSheet.create({
    sendingData: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '115%',
        backgroundColor: 'rgba(255,255,255, 0.92)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    spinner: {
        marginBottom: 10
    }
})
