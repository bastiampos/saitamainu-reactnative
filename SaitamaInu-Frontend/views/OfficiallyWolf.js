import React from 'react'
import { StyleSheet, Text, Image, ImageBackground, View, SafeAreaView} from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'

const OfficiallyWolf = (props) => {

    React.useEffect( () => {
        setTimeout(() => props.navigation.navigate('home'), 10000)
    }, [])

    return (
        <View style={{flex:1, backgroundColor: "#15171D"}}> 
            <SafeAreaView />
            <SafeAreaView style={{flex:1, backgroundColor: '#070607'}}> 
                <ImageBackground style={styles.container} source={require('../assets/bgWolf.png')} >
                    <Image style={styles.logo} source={require('../assets/fullWhiteLogo.png')} />
                    <Text style={[styles.text, styles.divisor]}>You are officialy a wolf!</Text>
                    <Text style={styles.text}>
                        Welcome to Saitama Inu wolfpack!
                    </Text>
                </ImageBackground>
            </SafeAreaView> 
        </View>
    )
}

export default OfficiallyWolf

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#15171D',
        width: '100%',
        height: '100%'
    },
    logo: {
        width: 100,
        height: 121,
        marginTop: 20
    },
    text: {
        width: '80%',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    divisor: {marginVertical: 30}
})
