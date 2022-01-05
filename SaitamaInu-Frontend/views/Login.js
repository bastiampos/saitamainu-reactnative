import React, {useState} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Zocial, Fontisto, Feather} from '@expo/vector-icons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import YellowButton from '../components/YellowButton'
import BoxAlert from '../components/BoxAlert'

const Login = (props) => {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    return (
        <SafeAreaView style={styles.bg}>
            <Image source={require('../assets/fullWhiteLogo.png')} />
            <Text style={styles.title}>Log In</Text>
            <View style={styles.form}>
                <View style={[styles.inputContainer, {marginBottom: 20}]}>
                    <Zocial name="email" size={17} color="#D3D3D3" />
                    <View style={{marginLeft: 10}}> 
                        <Text style={styles.label}>Email</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Email'
                            keyboardType='email-address'
                            placeholderTextColor='#707070'
                            textContentType='emailAddress'
                        />
                    </View>
                </View>
                <View style={[styles.inputContainer, {justifyContent: 'space-between'}]}>
                    <View style={styles.password}>
                        <Fontisto name="locked" size={20} color="#D3D3D3" />
                        <View style={{marginLeft: 10}}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder='Password'
                                secureTextEntry={!showPassword}
                                placeholderTextColor='#707070'
                                textContentType='password'
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {!showPassword ? <Feather name="eye" size={18} color="#707070" /> : <Feather name="eye-off" size={18} color="#707070" />}
                    </TouchableOpacity>
                </View>
            </View>
            {/* {!error ? <BoxAlert 
                text='The user is not registered. Please try again'
                buttonStyle={{
                    width: '86%',
                    borderColor: 'rgba(218, 46, 48, 0.4)',
                    backgroundColor: 'rgba(218, 46, 48, 0.4)'
                }}
                textStyle={{color: '#DA2E30', fontSize: 12}}
            /> : <></>} */}
            <View style={{width: '86%'}}>
                <Text style={[styles.yellow, {marginLeft: '7%'}]}>Forgot Password</Text>
                <YellowButton customStyles={{marginVertical: 10}} text='Log In'/>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 12}}>Not account yet?</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('signup')}>
                        <Text style={[styles.yellow, {marginLeft: 5}]}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#15171D',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: '20%',
        justifyContent: 'space-evenly'
    },
    logo: {},
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    form: {
        width: '86%',
        paddingHorizontal: '5%',
        paddingVertical: '6%',
        backgroundColor: '#10111B',
        borderWidth: 0.25,
        borderColor: '#3D3E48',
        borderRadius: 25,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        paddingBottom: 7,
        borderBottomWidth: 2,
        borderColor: '#707070',
        marginBottom: 20
    },
    label: {
        color: '#fff',
        fontSize: 10,
    },
    password: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    input: {
        fontSize: 16,
        color: 'white'
    },
    yellow: {color: '#E1AA0F', fontSize: 12}
})

// #D50006