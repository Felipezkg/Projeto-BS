import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, ScrollView, TextInput } from 'react-native';
//------------------------------------------------------------------------------------------------------------------
import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
//------------------------------------------------------------------------------------------------------------------
import * as firebase from 'firebase/app';
import 'firebase/database';
//------------------------------------------------------------------------------------------------------------------
import { Ionicons } from '@expo/vector-icons'
//------------------------------------------------------------------------------------------------------------------
export function ProfileScreen({ navigation }) {

    const { user } = useContext(UserContext);

    const [esconderSenha, setEscondersenha] = useState(true);


    // Estado para armazenar as informações editadas
    const [editedUser, setEditedUser] = useState(user);

    const handleSave = () => {
        // Salva as informações editadas no banco de dados
        firebase
            .database()
            .ref(`Pais/${user.chave}`)
            .update({
                nome: editedUser?.nome,
                telefone: editedUser?.telefone,
                endereco: editedUser?.endereco,
                dtnascimento: editedUser?.dtnascimento,
                cpf: editedUser?.cpf,
                email: editedUser?.email,
                senha: editedUser?.senha,
                qtdfilhos: editedUser?.qtdfilhos,
            })
            .then(() => {
                window.alert('Informações Atualizadas com Sucesso!')
                console.log('Informações salvas com sucesso!');
                navigation.navigate('Home')
            })
            .catch((error) => {
                console.error('Erro ao salvar informações:', error);
            });
    };


    const switchState = () => {
        if (esconderSenha == true) {
            setEscondersenha(false)

        }

        if (esconderSenha == false) {
            setEscondersenha(true)
        }
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style='dark' />
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Nome:</Text>
                    <TextInput
                        style={styles.userInfo}
                        onChangeText={(text) => setEditedUser({ ...editedUser, nome: text })}
                        value={editedUser?.nome}
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Telefone:</Text>
                    <TextInput
                        style={styles.userInfo}
                        onChangeText={(text) => setEditedUser({ ...editedUser, telefone: text })}
                        value={editedUser?.telefone}
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Endereço:</Text>
                    <TextInput
                        style={styles.userInfo}
                        onChangeText={(text) => setEditedUser({ ...editedUser, endereco: text })}
                        value={editedUser?.endereco}
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Data de Nascimento:</Text>
                    <TextInput
                        style={styles.userInfo}
                        maxLength={10}
                        onChangeText={(text) => setEditedUser({ ...editedUser, dtnascimento: text })}
                        value={editedUser?.dtnascimento}
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>CPF:</Text>
                    <TextInput
                        style={styles.userInfo}
                        maxLength={15}
                        onChangeText={(text) => setEditedUser({ ...editedUser, cpf: text })}
                        value={editedUser?.cpf}
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>E-Mail:</Text>
                    <TextInput
                        style={styles.userInfo}
                        onChangeText={(text) => setEditedUser({ ...editedUser, email: text })}
                        value={editedUser?.email}
                        keyboardType='email-address'
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Senha:</Text>
                    <View style={styles.pwAlign}>
                        <TextInput
                            style={styles.userInfo}
                            keyboardType='numeric'
                            maxLength={6}
                            secureTextEntry={esconderSenha}
                            onChangeText={(text) => setEditedUser({ ...editedUser, senha: text })}
                            value={editedUser?.senha}
                        />
                        <Pressable onPress={switchState}>
                            <Ionicons name="md-eye" style={styles.icon} size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Quantidade de Filhos:</Text>
                    <TextInput
                        style={styles.userInfo}
                        onChangeText={(text) => setEditedUser({ ...editedUser, qtdfilhos: text })}
                        value={editedUser?.qtdfilhos}
                    />
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