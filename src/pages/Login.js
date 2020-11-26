import React, { Component } from 'react';
import { View, StyleSheet, Image, AsyncStorage, Dialog, Alert } from 'react-native';
import * as Components from '../components';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false
        };
        this.doLogin = this.doLogin.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }


    doLogin() {
        var bodyFormData = new FormData();
        bodyFormData.append('username', this.state.username);
        bodyFormData.append('password', this.state.password);

        axios({
            method: 'post',
            url: 'http://192.168.1.45:82/api/login/gettoken',
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(function (response) {

                if (response.status === 204) {
                    Alert.alert("Giriş başarısız.",
                        "Kullanıcı adı ya da şifre hatalı!",
                        [{
                            text: "OK",
                        }]);
                    return;
                }

                AsyncStorage.setItem("token", JSON.stringify(response.data.accessToken));
                const token = AsyncStorage.getItem("token")
                console.log(token);
            })
            .catch(function (response) {
                console.log(response);
            }).finally(
                this.clearInput()
            );
    }

    clearInput() {
        this.setState({ username: '', password: '' });
    }
    render() {
        return (

            <View style={styles.container}>

                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    colors={['#8e2c53', '#63255a', '#61255a']}
                    style={styles.header}>
                    <Image
                        style={{ width: 350, height: 150 }}
                        source={require('../assest/images/logo.png')} />
                </LinearGradient>

                <View style={styles.contentArea}>
                    <Components.TextInput
                        placeholder="Username"
                        icon='user'
                        onChangeText={(username) => this.setState({ username })}
                        value={this.state.username}
                    />
                    
                    <Components.TextInput
                        placeholder="Password"
                        icon="unlock-alt"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        secureTextEntry={true}
                    />

                    <Components.Button
                        onPress={this.doLogin}
                        buttonText="Giriş Yap"
                        buttonColor="primary"
                    />
                </View>

                <View style={styles.footer}>
                    <Components.Footer />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: 1,
        borderBottomRightRadius: 40,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentArea: {
        flex: 1,
        justifyContent: 'center',

    },
    footer: {
        flex: 1,

        justifyContent: 'flex-end'
    }
})