import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

import { useFonts, Comfortaa_400Regular, Comfortaa_300Light } from '@expo-google-fonts/comfortaa';

export function HomeScreen() {

    const [fonteLoaded] = useFonts({
        Comfortaa_400Regular,
        Comfortaa_300Light,
    });

    if (!fonteLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.infoBox}>
                <Text style={styles.boxTitle}>Pai / Mãe</Text>
                <Pressable style={styles.btn_login}>
                    <Text style={styles.textBtn}>Meu Perfil</Text>
                </Pressable>
                <Pressable style={styles.btn_login}>
                    <Text style={styles.textBtn}>Mensagens</Text>
                </Pressable>
                <Pressable style={styles.btn_login}>
                    <Text style={styles.textBtn}>Procurar Babás</Text>
                </Pressable>
            </View>
            <Text style={styles.traco}>____________________________________________</Text>
            <View style={styles.infoBox2}>
                <Text style={styles.boxTitle}>Babás</Text>
                <Pressable style={styles.btn_login}>
                    <Text style={styles.textBtn}>Meu Perfil</Text>
                </Pressable>
                <Pressable style={styles.btn_login}>
                    <Text style={styles.textBtn}>Mensagens</Text>
                </Pressable>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.supTitle}>Está com Problemas?</Text>
                <Pressable style={styles.btn_sup}>
                    <Text style={styles.textBtn}>SUPORTE</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },

    traco: {
        maxWidth: '70%',
        fontWeight: 'bold',
    },

    infoBox: {
        marginTop: 100,
        margin: 15,
        alignItems: 'center',
    },

    infoBox2: {
        marginTop: 30,
        margin: 15,
        alignItems: 'center',
    },

    boxTitle: {
        fontSize: 25,
        fontFamily: 'Comfortaa_400Regular',
    },

    textBtn: {
        color: '#fff',
        fontWeight: 800,
    },

    btn_login: {
        marginTop: 10,
        width: 185,
        height: 50,
        backgroundColor: '#00CCE1',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn_sup: {
        marginTop: 10,
        width: 185,
        height: 50,
        backgroundColor: '#F34D00',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    supTitle: {
        fontSize: 15,
        fontFamily: 'Comfortaa_400Regular',
    },
})