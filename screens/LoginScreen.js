import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, SafeAreaView, Image, DeviceEventEmitter, ActivityIndicator, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from 'react-native-size-matters';
function LoginScreen() {




    const navigation = useNavigation();
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);







    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/240_F_275369197_JaafKVoLCxXBX3nF4s4LmXuSDi6Io6ay.jpg')} style={styles.container}>

                <View style={{ flex: 0.3, justifyContent: 'center', }}>



                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Scanify</Text>

                </View>

                <View style={{ backgroundColor: '#f6f6f6', flex: 0.8, borderTopLeftRadius: moderateScale(30), borderTopRightRadius: moderateScale(30), paddingHorizontal: '5%' }}>

                    <ScrollView showsHorizontalScrollIndicator={false}>


                        <TextInput
                            placeholder={"Enter Name"}
                            placeholderTextColor={'lightgrey'}
                            onChangeText={(value) => setName(value)}
                            value={name}
                            style={{
                                backgroundColor: 'white', padding: moderateScale(10), shadowColor: '#e5e5e5',
                                shadowOffset: {
                                    width: 5,
                                    height: 10,
                                },
                                shadowOpacity: 1,
                                fontSize: moderateScale(15),
                                shadowRadius: 5,
                                elevation: 4, marginTop: moderateScale(15),
                                borderRadius: 10,
                                marginTop: 50
                            }}
                            selectionColor="black"
                        />
                        <TextInput
                            placeholder={"Enter Email Id"}
                            placeholderTextColor={'lightgrey'}

                            onChangeText={(value) => setEmail(value)}
                            value={email}
                            style={{
                                backgroundColor: 'white', padding: moderateScale(10), shadowColor: '#e5e5e5',
                                shadowOffset: {
                                    width: 5,
                                    height: 10,
                                },
                                shadowOpacity: 1,
                                fontSize: moderateScale(15),
                                shadowRadius: 5,
                                elevation: 4, marginTop: moderateScale(15),
                                borderRadius: 10
                            }}

                            selectionColor="black"



                        />

                        <TextInput
                            placeholder={"Enter Password"}
                            placeholderTextColor={'lightgrey'}

                            onChangeText={(value) => setEmail(value)}
                            value={email}
                            style={{
                                backgroundColor: 'white', padding: moderateScale(10), shadowColor: '#e5e5e5',
                                shadowOffset: {
                                    width: 5,
                                    height: 10,
                                },
                                shadowOpacity: 1,
                                fontSize: moderateScale(15),
                                shadowRadius: 5,
                                elevation: 4, marginTop: moderateScale(15),
                                borderRadius: 10
                            }}

                            selectionColor="black"



                        />
                        <TouchableOpacity style={{ alignSelf: 'center', elevation: 5, marginTop: moderateScale(30) }}
                            onPress={() => navigation.navigate('LoginScreen2')}>
                            <Text style={{ paddingVertical: moderateScale(10), color: 'black', fontSize: moderateScale(15), textAlign: 'center' }}>
                                Already have an account?<Text style={{ color: 'green', fontWeight: 'bold' }}>Sign In</Text>
                            </Text>
                        </TouchableOpacity>



                    </ScrollView>
                    <TouchableOpacity style={{ width: '100%', backgroundColor: 'purple', borderWidth: 1, bottom: moderateScale(20), alignSelf: 'center', position: 'absolute', shadowColor: 'grey', elevation: 5 }}
                        onPress={() =>
                            navigation.navigate('LoginScreen')

                        }>
                        <Text style={{ paddingVertical: moderateScale(10), color: 'white', fontWeight: 'bold', fontSize: moderateScale(20), textAlign: 'center' }}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground >
        </View >

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },



});
export default LoginScreen;