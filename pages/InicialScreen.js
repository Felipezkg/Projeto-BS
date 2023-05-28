import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
//---------------------------------------------------------------------------------------------------------------------------------------
import babyImg from '../images/Baby-cuate.png';
//---------------------------------------------------------------------------------------------------------------------------------------
export function InicialScreen({ navigation }) {

    const cadastrarPais = () => {
        navigation.navigate('Cadastro de Pais');
    };

    const cadastrarBabas = () => {
        navigation.navigate('Cadastro de Babás');
    };

    const Login = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <StatusBar style='dark' />
            <Image
                style={styles.baby}
                source={babyImg}
            />
            <View style={styles.infoBox}>
                <Text style={styles.boxTitle}>Sou Pai / Mãe</Text>
                <Pressable style={styles.btn_cad} onPress={cadastrarPais}>
                    <Text style={styles.textBtn}>CADASTRAR</Text>
                </Pressable>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.boxTitle}>Sou Babá</Text>
                <Pressable style={styles.btn_cad} onPress={cadastrarBabas}>
                    <Text style={styles.textBtn}>CADASTRAR</Text>
                </Pressable>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.boxTitle}>Já possui Cadastro?</Text>
                <Pressable style={styles.btn_login} onPress={Login}>
                    <Text style={styles.textBtn}>LOGIN</Text>
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

    baby: {
        marginTop: 50,
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

    textBtn: {
        color: '#fff',
        fontWeight: 'bold',
    },

    btn_cad: {
        marginTop: 10,
        width: 185,
        height: 50,
        backgroundColor: '#D461FF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn_login: {
        marginTop: 10,
        width: 185,
        height: 50,
        backgroundColor: '#00CCE1',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

})