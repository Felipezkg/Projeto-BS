import { StatusBar } from 'expo-status-bar';

import { Ionicons } from '@expo/vector-icons'

import React, { useContext, useState } from 'react';

import UserContext from '../contexts/UserContext';

import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';

import secImg from '../images/Secure-login.png';

import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


export function LoginScreen({ navigation }) {

    const { login } = useContext(UserContext); // Acesse o contexto do usuário

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [esconderSenha, setEscondersenha] = useState(true);

    const switchState = () => {
        if (esconderSenha == true) {
            setEscondersenha(false)

        }

        if (esconderSenha == false) {
            setEscondersenha(true)
        }
    }



    const handleLogin = () => {
        firebase
            .database()
            .ref('Pais')
            .orderByChild('email')
            .equalTo(String(email)) // Converta para string
            .once('value')
            .then((snapshot) => {
                const userData = snapshot.val();

                if (userData) {
                    const userKey = Object.keys(userData)[0];
                    const user = userData[userKey];

                    if (user.senha === password) {
                        // Login bem-sucedido
                        console.log('Usuário logado:', user);
                        // Salve as informações do usuário no contexto
                        login(user);
                        // Navegar para a Tela Home do App
                        navigation.navigate('Home');
                    } else {
                        // Senha incorreta
                        console.error('Senha incorreta');
                    }
                } else {
                    // Usuário não encontrado
                    console.error('Usuário não encontrado');
                }
            })
            .catch((error) => {
                // Tratamento de erro
                console.error('Erro ao fazer login:', error);
            });


    };


    return (
        <View style={styles.container}>
            <StatusBar style='dark' />
            <Image
                style={styles.secImg}
                source={secImg}
            />
            <View style={styles.infoBox}>
                <Text style={styles.boxTitle}>E-mail</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Exemplo@exemplo.com'
                    placeholderTextColor="gray"
                    onChangeText={(email) =>
                        setEmail(email)
                    }
                />
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.boxTitle}>SENHA</Text>
                <View style={styles.pwAlign}>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='numeric'
                        maxLength={6}
                        secureTextEntry={esconderSenha}
                        placeholder='Até 6 Dígitos.'
                        placeholderTextColor="gray"
                        onChangeText={(password) =>
                            setPassword(password)
                        }
                    />
                    <Pressable onPress={switchState}>
                        <Ionicons name="md-eye" style={styles.icon} size={24} color="black" />
                    </Pressable>
                </View>
            </View>
            <Pressable style={styles.btn_logar} onPress={handleLogin}>
                <Text style={styles.text_btn}>LOGAR</Text>
            </Pressable>
            <Text style={styles.lostPw}>Esqueceu sua Senha?</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    secImg: {
        width: 300,
        height: 300,
    },

    infoBox: {
        margin: 15,
        alignItems: 'center',
    },

    boxTitle: {
        fontSize: 25,
        fontFamily: 'Comfortaa_400Regular',
    },

    textInput: {
        marginTop: 5,
        padding: 3,
        width: 200,
        height: 40,
        backgroundColor: '#EBEBEB',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        borderRadius: 5,
    },

    btn_logar: {
        marginTop: 50,
        width: 185,
        height: 50,
        backgroundColor: '#C300F3',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text_btn: {
        color: '#fff',
        fontWeight: 800,
    },

    lostPw: {
        marginTop: 15,
        color: '#6C6C6C',
        fontFamily: 'Comfortaa_300Light',
    },

    pwAlign: {
        flexDirection: 'row',
        gap: 10,
        left: 17,
    },

    icon: {
        top: 13,
    },
})