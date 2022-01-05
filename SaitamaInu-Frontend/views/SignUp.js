import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView } from 'react-native'
import {Zocial, Fontisto, Feather, Ionicons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import YellowButton from '../components/YellowButton'
import CheckBox from 'react-native-check-box'
import authActions from '../redux/actions/authentication'
import Load from '../components/Load'


const SignUp = (props) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [user, setUser] = useState({firstname: '', lastname: '', email: '', password: ''})

    const dispatch = useDispatch()

    const sendUser = async () => {
        setIsSending(true)
        try {
            const response = await dispatch(authActions.authUser(user, 'signup'))
            if(response.success) {
                props.navigation.navigate('registeredCode', {code: response.code})
                setIsSending(false)
            } else {
                setIsSending(false)
            }
        } catch(e) {console.log('error')}
    }

    return (
        <SafeAreaView style={styles.bg}>
            <Image style={styles.logo} source={require('../assets/fullWhiteLogo.png')} />
            <Text style={styles.title}>Get Started</Text>
            <View style={styles.form}>
                <View style={[styles.inputContainer, {marginBottom: 20}]}>
                    <Ionicons name="ios-person-circle" size={24} color="#D3D3D3" />
                    <View style={{marginLeft: 10}}> 
                        <Text style={styles.label}>First name</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='First Name'
                            keyboardType='default'
                            placeholderTextColor='#fff'
                            textContentType='givenName'
                            onChange={(e) => setUser({...user, firstname: e.nativeEvent.text})}
                        />
                    </View>
                </View>
                <View style={[styles.inputContainer, {marginBottom: 20}]}>
                    <Ionicons name="ios-person-circle-outline" size={24} color="#D3D3D3" />
                    <View style={{marginLeft: 10}}> 
                        <Text style={styles.label}>Last name</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Last name'
                            keyboardType='default'
                            placeholderTextColor='#fff'
                            textContentType='familyName'
                            onChange={(e) => setUser({...user, lastname: e.nativeEvent.text})}
                        />
                    </View>
                </View>
                <View style={[styles.inputContainer, {marginBottom: 20}]}>
                    <Zocial name="email" size={17} color="#D3D3D3" />
                    <View style={{marginLeft: 10}}> 
                        <Text style={styles.label}>Email</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Email'
                            keyboardType='email-address'
                            placeholderTextColor='#fff'
                            textContentType='emailAddress'
                            onChange={(e) => setUser({...user, email: e.nativeEvent.text})}
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
                                placeholderTextColor='#fff'
                                textContentType='password'
                                onChange={(e) => setUser({...user, password: e.nativeEvent.text})}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {!showPassword ? <Feather name="eye" size={18} color="#707070" /> : <Feather name="eye-off" size={18} color="#707070" />}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{width: '86%'}}>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        onClick={() => setIsChecked(!isChecked)}
                        isChecked={isChecked}
                        leftTextStyle={{color: '#15171D'}}
                        checkBoxColor='#fff'
                    />
                    <View style={{marginLeft: 5}}>
                        <Text style={styles.textCheckbox}>I agree to the</Text>
                        <View style={[styles.textCheckbox, styles.link]}>
                            <TouchableOpacity>
                                <Text style={styles.yellow}>Saitama Inu Terms of Use</Text>
                            </TouchableOpacity>
                            <Text style={[styles.textCheckbox, {marginHorizontal: 5}]}>and</Text>
                            <TouchableOpacity>
                                <Text style={styles.yellow}>Privacy Policy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <YellowButton customStyles={{marginVertical: 10}} text='Create account' actionPress={sendUser} /> 
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 12}}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('signin')}>
                        <Text style={[styles.yellow, {marginLeft: 5}]}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {isSending ? <Load texts={['Sending data.', 'Creating account.']} newAction={setIsSending} /> : <></>}
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#15171D',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: '20%',
        justifyContent: 'space-evenly',
        position: 'relative'
    },
    logo: {
        width: 140,
        height: 170
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    form: {
        width: '86%',
        paddingHorizontal: '5%',
        paddingTop: '6%',
        paddingBottom: '3%',
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
    yellow: {color: '#E1AA0F', fontSize: 12},
    checkboxContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCheckbox: {color: '#fff', fontSize: 12},
    link: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
