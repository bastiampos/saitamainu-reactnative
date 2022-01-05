import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from 'react-native'
import CodeInput from '../components/CodeInput'
import YellowButton from '../components/YellowButton'
import {useState} from 'react'
import Load from '../components/Load'
import BoxAlert from '../components/BoxAlert'

const Error = () => (
    <Text>
        The code is not correct. Would you want to resend the activation code? <Text style={{color: 'yellow'}} onPress={() => {}}>Click here.</Text> (proximamente)
    </Text>
)

const RegisteredCode = (props) => {
    const [verifyingCode, setVerifyingCode] = useState(false)
    const [code, setCode] = useState('')
    const [showError, setShowError] = useState(false)

    const verifyCode = () => {
        setVerifyingCode(true)
        console.log(code, props.route.params.code)
        setTimeout(() => {
            if(code == props.route.params.code) {
                props.navigation.navigate('officiallyWolf')
            } else {
                setCode('')
                setShowError(true)
                setVerifyingCode(false)
            }
        }, 2000)
    }

    return (
        <SafeAreaView style={styles.container}> 
            <Image style={styles.logo} source={require('../assets/fullWhiteLogo.png')} />
            <View style={styles.textContainer}>
            <Image style={styles.checked} source={require('../assets/okIcon.png')} />
                <Text style={styles.title}>Congratulations! You are registered</Text>
                <Text style={styles.label}>
                    Please insert here the code that we sent to your email in order to activate your account
                </Text>
            </View>
            {/* <CodeInput width='86%' /> */}
            <TextInput style={styles.codeInput}
                keyboardType='numeric'
                maxLength={6}
                onChange={(e) => setCode(e.nativeEvent.text)}
                value={code}
            />
            {showError ? <BoxAlert 
                text={<Error />}
                buttonStyle={{
                    width: '86%',
                    borderColor: 'rgba(218, 46, 48, 0.4)',
                    backgroundColor: 'rgba(218, 46, 48, 0.4)'
                }}
                textStyle={{color: '#DA2E30', fontSize: 12}}
            /> : <></>}
            <View style={{width: '86%'}}>
                {(code && code.length > 5) ? <YellowButton text='Activate account' actionPress={verifyCode} /> : <YellowButton text='Activate account' disabled={true} />}
            </View>
            {verifyingCode ? <Load texts={['Validating code.', 'Activating account.']} newAction={setVerifyingCode} /> : <></>}
        </SafeAreaView> 
    )
}

export default RegisteredCode

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#15171D',
        flex: 1,
        justifyContent: 'space-evenly',
        paddingHorizontal: '7%'
    },
    logo: {
        width: 95,
        height: 115,
        marginTop: 20
    },
    checked: {
        width: 100,
        height: 100,
        marginBottom: 10
    },  
    textContainer: {
        width: '100%',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        width: '60%',
        marginBottom: 10
    },
    label: {
        color: '#fff',
        fontSize: 12,
        width: '70%',
        textAlign: 'center'
    },
    codeInput: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 6.87,
        color: '#fff',
        paddingHorizontal: 8,
        height: 70,
        width: '86%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        fontWeight: '300'
    }
})
