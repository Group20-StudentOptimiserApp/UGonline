import { View, Text, StyleSheet, Alert } from "react-native"
import { auth } from "../../firebase";
import { useState } from "react"
import { Button, Input} from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { color, font } from "../../global/styles";

const ForgotPassword = ({navigation}) =>{
    const [email, setEmail] = useState('')

    const passwordReset = async () =>{
        await auth.sendPasswordResetEmail(email)
        .then(()=>{
            Alert.alert('Alert', "Password reset email sent",[
                {text: 'Okay', onPress: ()=>navigation.goBack()}
            ])
        })
        .catch((error)=>{
            if(error.code === 'auth/missing-email'){
                Alert.alert('Email field cannot be empty')
            }
            else if(error.code === 'auth/invalid-email'){
                Alert.alert('Type in a valid email please')
            }
            else{
                Alert.alert(error.code)
            }
        })
    }

    return(
        <View style={styles.container}>
            <Text style={{fontFamily : font.bold, fontSize: 32, textAlign: 'left', color: color.primary}}>Oops... Forgot your password??</Text>
            <View style={styles.inputCon}>
            <Input
                    placeholder="Enter email address here" 
                    leftIcon={<FontAwesome
                        name='envelope'
                        size={20}
                        color= '#999999'
                        style={{paddingRight: 12,}}
                />}
                    type="email"
                    value={email}
                    onChangeText={(email)=> setEmail(email)}
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputstyle}
                    />
            </View>
            <Button onPress={passwordReset} containerStyle={styles.button} titleStyle={{fontSize: 20,fontFamily: font.medium,}} buttonStyle={styles.buttonS} title='Send password reset link'/>
            <Text style={{fontFamily : font.medium, fontSize: 14, paddingLeft: 8, paddingRight: 8 }}>Check your email or spam folder to find the password reset link </Text>
        </View>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: color.background,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        // marginTop: 70,
    },
    inputCon:{
        width: '100%',
        marginTop: 40,
        // marginBottom: 10,
    },
    inputContainer:{
        borderWidth: 0,
        borderColor: color.light,
        padding: 4,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 10,
        backgroundColor: color.light,
        shadowRadius: 8,
        shadowOpacity: 0.2,
        shadowColor: "#ccc",
        shadowOffset: {width: 1, height: 1},
        elevation: 4,
    },
    input:{
        fontSize: 18,
        fontFamily: font.regular,
    },
    button:{
        marginTop: 4,
        marginBottom: 28,
        width: '100%',
        paddingRight: 20,
        paddingLeft: 20,
    },
    buttonS:{
        backgroundColor: color.primary,
        borderRadius: 10,
        padding: 6,
    },
})