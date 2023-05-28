import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
//---------------------------------------------------------------------------------------------------------------------------------------
import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView } from 'react-native';
//---------------------------------------------------------------------------------------------------------------------------------------
import { Ionicons } from '@expo/vector-icons';
//---------------------------------------------------------------------------------------------------------------------------------------
// import firebase from 'firebase/app';
// import 'firebase/database';
//---------------------------------------------------------------------------------------------------------------------------------------
export function CadpaisScreen({ navigation }) {

    const [esconderSenha, setEscondersenha] = useState(true);

    const switchState = () => {
        setEscondersenha(!esconderSenha);
    }

    //---------------------------------------------------------------------------------------------------------------------------------------
    // const [profile, setNewprofile] = useState({
    //     nome: 'null',
    //     telefone: 0,
    //     endereco: 'null',
    //     dtnascimento: 'null',
    //     cpf: 'null',
    //     email: 'null',
    //     senha: 0,
    //     qtdfilhos: 0,
    //     foto: 'null',
    // });
    //---------------------------------------------------------------------------------------------------------------------------------------

    // const cadastraPai = () => {
    //     firebase
    //         .database()
    //         .ref('Pais/')
    //         .push(profile)
    //         .then((data) => {
    //             const novaChave = data.key; // Obtém a chave gerada pelo push
    //             const novoProfile = { ...profile, chave: novaChave }; // Adiciona a chave ao objeto profile
    //             firebase
    //                 .database()
    //                 .ref('Pais/' + novaChave)
    //                 .set(novoProfile) // Salva o objeto com a chave adicionada
    //                 .then(() => {
    //                     console.log('Objeto salvo com a chave:', novaChave);
    //                     window.alert('Cadastrado com Sucesso!')
    //                 })
    //                 .catch((error) => {
    //                     console.log('Erro ao salvar objeto:', error);
    //                 });
    //         })
    //         .catch((error) => {
    //             console.log('Erro ao salvar mensagem ', error);
    //         });
    //     
    // };

    const cadastraPai = () => {
        navigation.navigate('Inicial');
    }


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
                        onChangeText={(nome) =>
                            setNewprofile({
                                ...profile, nome: nome,
                            })
                        }
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Telefone:</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='numeric'
                        maxLength={11}
                        type='cc-number'
                        placeholder='Telefone'
                        placeholderTextColor="gray"
                        onChangeText={(telefone) =>
                            setNewprofile({
                                ...profile, telefone: telefone,
                            })
                        }
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Endereço:</Text>
                    <TextInput
                        style={styles.textInput}
                        type='street-address'
                        placeholder='Seu Endereço'
                        placeholderTextColor="gray"
                        onChangeText={(endereco) =>
                            setNewprofile({
                                ...profile, endereco: endereco,
                            })
                        }
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Data de Nascimento:</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='numeric'
                        type='birthdate-full'
                        placeholder='00/00/0000'
                        placeholderTextColor="gray"
                        onChangeText={(dtnascimento) =>
                            setNewprofile({
                                ...profile, dtnascimento: dtnascimento,
                            })
                        }
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
                            onChangeText={(cpf) =>
                                setNewprofile({
                                    ...profile, cpf: cpf,
                                })
                            }
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
                        keyboardType='email-address'
                        style={styles.textInput}
                        placeholder='Exemplo@exemplo.com'
                        placeholderTextColor="gray"
                        onChangeText={(email) =>
                            setNewprofile({
                                ...profile, email: email,
                            })
                        }
                    />
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Senha:</Text>
                    <View style={styles.pwAlign}>
                        <TextInput
                            style={styles.textInput}
                            keyboardType='numeric'
                            maxLength={6}
                            placeholder='Até 6 Dígitos.'
                            placeholderTextColor="gray"
                            secureTextEntry={esconderSenha}
                            onChangeText={(senha) =>
                                setNewprofile({
                                    ...profile, senha: senha,
                                })
                            }
                        />
                        <Pressable onPress={switchState}>
                            <Ionicons name="md-eye" style={styles.icon} size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.boxTitle}>Quantidade de Filhos:</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='numeric'
                        maxLength={3}
                        placeholder='Ex: 3'
                        placeholderTextColor="gray"
                        onChangeText={(qtdfilhos) =>
                            setNewprofile({
                                ...profile, qtdfilhos: qtdfilhos,
                            })
                        }
                    />
                    <Pressable style={styles.anexo_foto_btn}>
                        <Text>Enviar Foto</Text>
                        <Ionicons name="cloud-upload-outline" size={24} color="black" />
                    </Pressable>
                </View>
                <View style={styles.infoBox}>
                    <Pressable style={styles.btn_cad} onPress={cadastraPai}>
                        <Text style={styles.textBtn}>CADASTRAR</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
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

    anexo_btn: {
        flexDirection: 'row',
        gap: 5,
        top: 5,
    },

    anexo_foto_btn: {
        marginTop: 30,
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

    btn_cad: {
        marginTop: 15,
        width: 185,
        height: 50,
        backgroundColor: '#61D6FF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        left: 40,
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
        top: 13,
    },
})