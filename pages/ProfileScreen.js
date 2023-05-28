import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput } from 'react-native';
//------------------------------------------------------------------------------------------------------------------
import React, { useContext, useState } from 'react';
// import UserContext from '../contexts/UserContext';
//------------------------------------------------------------------------------------------------------------------
// import firebase from 'firebase/app';
// import 'firebase/database';
//------------------------------------------------------------------------------------------------------------------
import { Ionicons } from '@expo/vector-icons'
//------------------------------------------------------------------------------------------------------------------
export function ProfileScreen({ navigation }) {

    // const { user } = useContext(UserContext);

    const [esconderSenha, setEscondersenha] = useState(true);

    // //Estado para armazenar as informações editadas
    // const [editedUser, setEditedUser] = useState(user);

    // const handleSave = () => {
    //     // Salva as informações editadas no banco de dados
    //     firebase
    //         .database()
    //         .ref(`Pais/${user.chave}`)
    //         .update({
    //             nome: editedUser?.nome,
    //             telefone: editedUser?.telefone,
    //             endereco: editedUser?.endereco,
    //             dtnascimento: editedUser?.dtnascimento,
    //             cpf: editedUser?.cpf,
    //             email: editedUser?.email,
    //             senha: editedUser?.senha,
    //             qtdfilhos: editedUser?.qtdfilhos,
    //         })
    //         .then(() => {
    //             window.alert('Informações Atualizadas com Sucesso!');
    //             console.log('Informações salvas com sucesso!');
    //             navigation.navigate('Home');
    //         })
    //         .catch((error) => {
    //             console.error('Erro ao salvar informações:', error);
    //         });
    // };

    const handleSave = () => {
        navigation.navigate('Home');
    }


    const switchState = () => {
        setEscondersenha(!esconderSenha);
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style='dark' />
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Nome:</Text>
                    <Text style={styles.userInfo}>INFORMAÇÂO</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Telefone:</Text>
                    <Text style={styles.userInfo}>INFORMAÇÂO</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Endereço:</Text>
                    <Text style={styles.userInfo}>INFORMAÇÂO</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Data de Nascimento:</Text>
                    <Text style={styles.userInfo}>INFORMAÇÂO</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>CPF:</Text>
                    <Text style={styles.userInfo}>INFORMAÇÂO</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>E-Mail:</Text>
                    <Text style={styles.userInfo}>INFORMAÇÂO</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Senha:</Text>
                    <View style={styles.pwAlign}>
                        <Text style={styles.userInfo}>INFORMAÇÂO</Text>
                        <Pressable onPress={switchState}>
                            <Ionicons name="md-eye" style={styles.icon} size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Quantidade de Filhos:</Text>
                    <Text style={styles.userInfo}>INFORMAÇÂO</Text>
                </View>
                <View style={styles.btn_group}>
                    <Pressable style={styles.btn_salv} onPress={handleSave}>
                        <Text style={styles.textBtn}>SALVAR</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingLeft: 50,
    },

    infoBox: {
        marginTop: 15,
    },

    boxTitle: {
        fontSize: 15,
        fontFamily: 'Comfortaa_400Regular',
    },

    userInfo: {
        marginTop: 5,
        fontSize: 18,
        fontFamily: 'Rubik_300Light_Italic',
        backgroundColor: '#EBEBEB',
        width: 270,
        height: 30,
        textAlign: 'center',
        padding: 5,
        borderRadius: 4,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },

    btn_group: {
        flexDirection: 'row',
        gap: 30,
    },

    btn_salv: {
        marginTop: 25,
        width: 140,
        height: 50,
        backgroundColor: '#20EC00',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        left: 70,
    },

    textBtn: {
        color: '#fff',
        fontWeight: 800,
    },

    pwAlign: {
        flexDirection: 'row',
        gap: 10,
    },

    icon: {
        top: 5,
    },

})