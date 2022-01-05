import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Image, ImageBackground } from 'react-native'

const FirstView = (props) => {

    React.useEffect( () => {
        setTimeout(() => props.navigation.navigate('signin'), 1000)
    }, [])

    return (
            <ImageBackground style={styles.bg} source={require('../assets/bgMontainsWolf.png')}>
                <Image style={styles.logo} source={require('../assets/fullBlackLogo.png')} />
            </ImageBackground>
        
    )
}

export default FirstView

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: '20%',
        width: 155,
        height: 190
    }
})
