import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const CodeInput = ({width}) => {
    const [inputCode, setInputCode] = useState({one: 0, two: 0, three: 0, four: 0, five: 0, six: 0})
    console.log(inputCode)
    return (
        <View style={[styles.container, {width}]}> 
            <TextInput 
                style={styles.input}
                keyboardType='numeric'
                maxLength={1}
                onChange={(e) => setInputCode({...inputCode, one: e.nativeEvent.text})}
            />
            <TextInput 
                style={styles.input}
                keyboardType='numeric'
                maxLength={1}
                onChange={(e) => setInputCode({...inputCode,  two: e.nativeEvent.text})}
            />
            <TextInput 
                style={styles.input} 
                keyboardType='numeric'
                maxLength={1}
                onChange={(e) => setInputCode({...inputCode,  three: e.nativeEvent.text})}
            />
            <TextInput 
                style={styles.input}
                keyboardType='numeric'
                maxLength={1}
                onChange={(e) => setInputCode({...inputCode,  four: e.nativeEvent.text})}
            />
            <TextInput 
                style={styles.input}
                keyboardType='numeric'
                maxLength={1}
                onChange={(e) => setInputCode({...inputCode,  five: e.nativeEvent.text})}
            />
            <TextInput 
                style={styles.input}
                keyboardType='numeric'
                maxLength={1}
                onChange={(e) => setInputCode({...inputCode,  six: e.nativeEvent.text})}
            />
        </View>
    )
}

export default CodeInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 6.87,
        color: '#fff',
        paddingHorizontal: 8,
        height: 70,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        fontWeight: '300'
    }
})
