import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';

import secImg from '../images/Secure-login.png';

export function LoginScreen({ navigation }) {

    const logar = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <StatusBar style='dark' />
            <Image
                style={styles.secImg}
                source={secImg}
            />
            <View style={styles.infoBox}>
                <Text style={styles.boxTitle}>CPF</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    maxLength={11}
                    placeholder='000.000.000-00'
                    placeholderTextColor="gray"
                />
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.boxTitle}>SENHA</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    maxLength={6}
                    placeholder='Até 6 Dígitos.'
                    placeholderTextColor="gray"
                />
            </View>
            <Pressable style={styles.btn_logar} onPress={logar}>
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
})