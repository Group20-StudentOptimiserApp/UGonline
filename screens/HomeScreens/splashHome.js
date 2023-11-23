import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { Button, Text} from "@rneui/themed";



const Splash = ({navigation}) =>{

    return(
        <View style={styles.container} >
            <View style={styles.container1}>
                <Image 
                source={require('../assets/screenImages/UoGG.png')}
                style={{width: 209, height: 209, position: 'absolute', bottom: -100, alignSelf: 'center'}}
                />
            </View>
            <View style={styles.conatiner2}>
                <View style={{marginBottom: 48, marginTop: 40}}>
                    <Text  style={styles.header}>Welcome to the</Text>
                    <Text  style={styles.header}>University of Ghana</Text>
                </View>
                <Button 
                    title="Let's get started" 
                    containerStyle={styles.button} 
                    buttonStyle={{backgroundColor: '#002D5D',borderRadius: 8,}} 
                    titleStyle={{color: '#DCDCDC', fontSize: 20, fontFamily: 'Poppins_500Medium',}}
                    onPress={()=>navigation.navigate('SignUp')}
                    />
                <Button 
                    title="Login" 
                    containerStyle={styles.button}
                    buttonStyle={{backgroundColor: '#D0AA66',borderRadius: 8,}} 
                    titleStyle={{color: '#404040', fontSize: 20, fontFamily: 'Poppins_500Medium'}}
                    onPress={()=>navigation.navigate('Login')}
                    />
            </View>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F7F9FF"
    },
    container1:{
        // flex: 1,
        width: '100%',
        height: '40%',
        backgroundColor: "#fff"
    },
    conatiner2:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    button:{
        width: 240,
        // height: 48,
        marginBottom: 8,

    },
    header:{
        fontSize: 32,
        color: '#002D5D',
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
    },
})