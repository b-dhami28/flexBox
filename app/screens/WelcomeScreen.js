import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        style = {styles.background}
        source={require("../assets/phone.jpg")}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo.jpg')} />
            <Text style={styles.text}>Make what you want</Text>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={()=>console.log("Login Successful!")}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton} onPress={()=>console.log("Register Successful!")}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton:{
        alignItems: "center",
        justifyContent: "center",
        width: '60%',
        height: 70,
        backgroundColor: "#fc5c65",
        borderRadius: 50,
        bottom: 60,
    },
    registerButton: {
        alignItems: "center",
        justifyContent: "center",
        width: '60%',
        height: 70,
        backgroundColor: "#4ecdc4",
        borderRadius: 50,
        bottom: 40,
    },
    buttonText:{
        color: "white",
        fontSize: 21,
        fontWeight: "bold",
        letterSpacing: 3,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 40,
        position: "absolute",
        top: 50,
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    text: {
        color: "white",
        top: 170,
        fontSize: 28,
        fontWeight: "bold",
        
    },
})

export default WelcomeScreen;