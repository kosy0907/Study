import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SignUp</Text>
            <TextInput style={styles.input} placeholder={'E-mail'} placeholderTextColor="#FFF"></TextInput>
            <TextInput style={styles.input} placeholder={'Password'} placeholderTextColor="#FFF"></TextInput>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>SignUp</Text>
                </View>

                <View style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        maxHeight: 200,
        height: 100,
        fontWeight: 'bold',
        color: '#11B67A',
    },
    input: {
        backgroundColor: '#5E5E5E',
        width: 285,
        height: 50,
        borderRadius: 5,
        opacity: 0.6,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 5,
    },
    buttonContainer: {
        marginVertical: 35
    },
    button: {
        width: 280,
        height: 45,
        backgroundColor: '#11B67A',
        borderRadius: 5,
        marginVertical: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default SignUp;