import React from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import YellowButton from './YellowButton'
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Terms = () => {
    return (
        <SafeAreaView style={{flex: 1, marginHorizontal: '7%'}}>
            <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Privacy Policy</Text>
                <TouchableOpacity>
                    <FontAwesome name="close" size={24} color="#E1AA0F" />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit leo mattis dolor lacinia bibendum. Sed eu orci at neque mollis consectetur placerat non tortor. In volutpat sit amet tellus vel aliquam. In erat tortor, consectetur malesuada tortor id, mattis varius ligula. Aenean rhoncus lacus at felis feugiat, et feugiat ex tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate dui tortor, vitae lobortis ex fermentum id. Quisque pellentesque rutrum justo, vel finibus neque iaculis non. Vivamus non tincidunt mi, vel hendrerit ligula. Nulla pretium tristique dolor, a euismod elit cursus in. Sed semper velit sit amet sapien placerat efficitur sed at orci. Vivamus enim velit, feugiat sit amet porttitor sed, mattis ut ex. Ut a gravida nibh. Curabitur id sem accumsan, interdum leo quis, gravida mi. Sed blandit euismod nisi ac aliquam.</Text>
                <Text style={styles.text}>
                    Nam eu felis vel nulla rutrum scelerisque at ac nulla. Vestibulum turpis velit, gravida ac convallis et, fringilla eget dolor. Aenean viverra odio velit, sed tincidunt justo finibus sit amet. Nullam quis euismod ligula, in mattis tellus. Mauris ultrices viverra turpis venenatis posuere. In maximus lorem accumsan nisi convallis scelerisque. Maecenas nec nisi ac nisl imperdiet tempus id sed tortor. Curabitur massa nunc, fringilla sit amet libero in, commodo semper tortor. Morbi porttitor lorem risus, sit amet fermentum lacus malesuada a. Nullam feugiat ante scelerisque rutrum aliquam. Integer id volutpat orci. Duis in lacinia purus.
                </Text>
            </View>
            <YellowButton text='I agree' />
        </ScrollView>
        </SafeAreaView>
    )
}

export default Terms

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'space-between'
        paddingBottom: 20
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#E1AA0F',
        paddingBottom: 10
    },
    title: {fontSize: 25, fontWeight: 'bold'},
    textContainer: {
        marginTop: 30,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16, 
        fontWeight: '200',
        marginBottom: 20
    }
})
