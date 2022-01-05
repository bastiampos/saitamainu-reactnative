import React from 'react'
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native'

const Home = (props) => {
    return (
        <SafeAreaView style={styles.main}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('signin')}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    button: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black'
    }
})
