import React from "react";
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView } from "react-native";
import { Button, Input} from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const SignUpScreen =({navigation}) => {
    const [studentEmail, setStudentEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');

    

    const signUp = () =>{

    }
    
    return(
        
        <View  style={styles.container}>
            <ScrollView>
            <View style={styles.container1}>
            <Image
            source={require('../../assets/projectImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            <Text style={{textAlign:"center", color: "#002D5D", fontSize: 22, fontFamily: "Poppins_700Bold", marginTop: 28,}}>New here? Join us now</Text>
            <View style={styles.inputContainers}>
                <Input
                    placeholder="Student email" 
                    leftIcon={<FontAwesome
                        name='envelope'
                        size={16}
                        color= '#999999'
                />}
                    // autoFocus 
                    type="email"
                    value={studentEmail}
                    onChangeText={(text)=>setStudentEmail(text)}
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputstyle}
                    />
                <Input
                    placeholder="Username" 
                    leftIcon={<FontAwesome
                        name='user'
                        size={24}
                        color= '#999999'
                />}
                    type="text"
                    value={userName}
                    onChangeText={(text)=>setUserName(text)}
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputstyle}
                    />
                <Input
                    placeholder="Create Password" 
                    leftIcon={<FontAwesome
                        name='lock'
                        size={24}
                        color= '#999999'
                />}
                    secureTextEntry 
                    type="password"
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputstyle}
                    />
                <Input
                    placeholder="Confirm Password" 
                    leftIcon={<FontAwesome
                        name='lock'
                        size={24}
                        color= '#999999'
                />}
                    secureTextEntry 
                    type="password1"
                    value={password1}
                    onChangeText={(text)=>setPassword1(text)}
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputstyle}
                    onSubmitEditing={signUp}
                    />
            </View>
            <Button onPress={signUp} containerStyle={styles.button} titleStyle={{fontSize: 20,fontFamily: 'Poppins_500Medium',}} buttonStyle={styles.buttonS} title='Sign up'/>
            <Text style={{fontFamily: 'Poppins_400Regular', fontSize: 16, color: '#1E1D1D'}}>Already have an account? <Text style={{color:'#D0AA66', fontFamily: 'Poppins_700Bold'}} onPress={()=>navigation.navigate('Login')}>Log in here</Text></Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}> Terms and conditions</Text>
                <Text style={styles.footerText}> Privacy Policy</Text>
            </View>
            </ScrollView>
            <StatusBar style="auto"/>
        </View>
        
        
    )
}


export default SignUpScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F7F9FF",
        
    },
    container1:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 70,
    },
    inputContainers:{
        width: '100%',
        marginTop: 40,
        marginBottom: 10,
    },
    button:{
        marginTop: 4,
        marginBottom: 24,
        width: 200,
        
    },
    buttonS:{
        backgroundColor: "#002D5D",
        // backgroundColor: "#1AA7EC",
        borderRadius: 10,
        padding: 6,
    },
    input:{
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
    },
    inputstyle:{
        marginVertical: 4,
        marginHorizontal: 8,
    },
    inputContainer:{
        borderWidth: 0,
        borderColor: "#fff",
        padding: 4,
        // paddingHorizontal: 12,
        paddingLeft: 14,
        // fontSize: 16,
        borderRadius: 10,
        backgroundColor: "#FFF",
        shadowRadius: 8,
        shadowOpacity: 0.2,
        shadowColor: "#ccc",
        shadowOffset: {width: 1, height: 1},
        elevation: 4,
    },
    
    footer:{
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 16,

    },

    footerText:{
        fontSize: 13,
        fontFamily: 'Poppins_400Regular',
        color: '#1E1D1D'
    }
})