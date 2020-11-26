import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as color from '../utils/colors';


const Footer = () => {
    return (
        <View style={styles.content}>
            <View style={styles.textWrapper}>
                <Text style={styles.textStyle}> Smg Yazılım ©</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
    },
    textWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: color.mainColor,
        color:'#fff'
    },
    textStyle:{
        color:'#fff'
    }
})

export default Footer;