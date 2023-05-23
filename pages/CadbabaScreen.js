import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useFonts, Comfortaa_400Regular, Comfortaa_300Light } from '@expo-google-fonts/comfortaa';

export function CadbabaScreen({ navigation }) {

    const cadastroEfetuado = () => {
        navigation.navigate('Inicial');
    };


    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style='dark' />
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Nome:</Text>
                    <TextInput
                        style={styles.textInput}
                        type='name'
                        placeholder='Nome'
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Telefone:</Text>
                    <TextInput
                        style={styles.minitextInput}
                        keyboardType='numeric'
                        maxLength={11}
                        type='cc-number'
                        placeholder='Telefone'
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Endereço:</Text>
                    <TextInput
                        style={styles.textInput}
                        type='street-address'
                        placeholder='Seu Endereço'
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Data de Nascimento:</Text>
                    <TextInput
                        style={styles.minitextInput}
                        keyboardType='numeric'
                        type='birthdate-full'
                        placeholder='00/00/0000'
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>CPF:</Text>
                    <View style={styles.boxAlign}>
                        <TextInput
                            style={styles.textInput}
                            keyboardType='numeric'
                            maxLength={11}
                            placeholder='000.000.000-00'
                            placeholderTextColor="gray"
                        />
                        <Pressable style={styles.anexo_btn}>
                            <Text>Anexar</Text>
                            <Ionicons name="cloud-upload-outline" size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>E-Mail:</Text>
                    <TextInput
                        type='email'
                        style={styles.textInput}
                        placeholder='Exemplo@exemplo.com'
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Senha:</Text>
                    <TextInput
                        style={styles.minitextInput}
                        keyboardType='numeric'
                        maxLength={6}
                        placeholder='Até 6 Dígitos.'
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Horário Disponível:</Text>
                    <View style={styles.boxRow}>
                        <TextInput
                            style={styles.minitextInput}
                            placeholder='Ex: 09h-18h'
                            placeholderTextColor="gray"
                        />
                        <TextInput
                            style={styles.minitextInput}
                            placeholder='Ex: Seg-Sexta'
                            placeholderTextColor="gray"
                        />
                    </View>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Cursos:</Text>
                    <View style={styles.boxAlign}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Ex: Primeiros Socorros'
                            placeholderTextColor="gray"
                        />
                        <Pressable style={styles.anexo_btn}>
                            <Text>Anexar</Text>
                            <Ionicons name="cloud-upload-outline" size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Habilitação:</Text>
                    <View style={styles.boxAlign}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Ex: A, B, AB,...'
                            placeholderTextColor="gray"
                        />
                        <Pressable style={styles.anexo_btn}>
                            <Text>Anexar</Text>
                            <Ionicons name="cloud-upload-outline" size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.infoBox}>
                    <Pressable style={styles.anexo_foto_btn}>
                        <Text>Enviar Foto</Text>
                        <Ionicons name="cloud-upload-outline" size={24} color="black" />
                    </Pressable>
                </View>

                <View style={styles.infoBox}>
                    <Pressable style={styles.btn_cad} onPress={cadastroEfetuado}>
                        <Text style={styles.textBtn}>CADASTRAR</Text>
                    </Pressable>
                </View>

            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },

    infoBox: {
        margin: 5,
        paddingLeft: 50,
    },

    boxTitle: {
        fontSize: 17,
        fontFamily: 'Comfortaa_400Regular',
    },

    boxAlign: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
    },

    boxRow: {
        flexDirection: 'row',
        gap: 25,
    },

    anexo_btn: {
        flexDirection: 'row',
        gap: 5,
        top: 5,
    },

    anexo_foto_btn: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 5,
        top: 5,
    },

    textInput: {
        marginTop: 5,
        width: 200,
        height: 30,
        padding: 3,
        backgroundColor: '#EBEBEB',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        borderRadius: 5,
    },

    minitextInput: {
        marginTop: 5,
        width: 100,
        height: 30,
        padding: 3,
        backgroundColor: '#EBEBEB',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        borderRadius: 5,
    },

    btn_cad: {
        marginTop: 50,
        width: 185,
        height: 50,
        backgroundColor: '#61D6FF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        left: 40,
        bottom: 20,
    },

    textBtn: {
        color: '#fff',
        fontWeight: 800,
    },
})