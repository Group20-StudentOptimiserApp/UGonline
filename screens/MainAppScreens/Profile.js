import { View, Text,StyleSheet, Pressable, ScrollView, SafeAreaView } from 'react-native'
import { color, font } from '../../global/styles'
import { Avatar } from '@rneui/themed'
import { AntDesign } from '@expo/vector-icons'
import { auth } from '../../firebase'
import { StatusBar } from "expo-status-bar";

const Profile = ({currentUser}) => {

  const signOutUser = () => {
    auth.signOut();
  }
  const userSettings = () => {

  }
  const userPersonalInformation = () => {

  }
  const userAcademicInformation = () => {

  }
  const userHelp = () => {

  }
  const privacynSecurity = () => {

  }
  const data = [
    {id: 1, text: 'Personal Information', icon: 'user', press: userPersonalInformation},
    {id: 2, text: 'Academic Information', icon: 'book', press: userAcademicInformation},
    {id: 3, text: 'Settings', icon: 'setting', press: userSettings},
    {id: 4, text: 'Help', icon: 'questioncircleo', press: userHelp},
    {id: 5, text: 'Privacy and Security', icon: 'Safety', press: privacynSecurity},
    {id: 6, text: 'Logout', icon: 'logout', press: signOutUser},
  ]
  return (
    <View style={styles.Container}>
      <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.firstContainer}>
            <Text style={{textAlign:'center', fontFamily: font.medium, fontSize: 24}}>Profile</Text>
            <Avatar
              rounded
              title= {currentUser.name.charAt(0)}
              titleStyle={{fontFamily: font.semiBold, fontSize: 60, color: color.primary}}
              size={140}
              // activeOpacity = {0.7}
              overlayContainerStyle={{backgroundColor: '#D3F5E3',}}
              containerStyle={{marginVertical: 8}}
            />
            <Text style={{textAlign:'center', fontFamily: font.semiBold, fontSize: 26, }}>{currentUser.name}</Text>
            <Text style={{textAlign:'center', fontFamily: font.regular, fontSize: 16}}>{currentUser.Programme}</Text>
          </View>
          <View style={styles.secondContainer}>
              {data.map((data)=>{
                const {id, text, icon, press} = data
                return(
                  <Pressable onPress={press} key={id} style={{flexDirection: 'row', marginBottom: 18, alignItems:'center'}}>
                      <AntDesign
                        name= {icon}
                        color= {color.primary}
                        size={24}
                        style={{paddingRight: 12}}
                      />
                      <Text style={{fontFamily: font.regular, fontSize: 18}}>{text}</Text>
                  </Pressable>
                )
              })}
          </View>
        </View>
        <StatusBar style="auto" translucent={false} />
        </ScrollView>
        </SafeAreaView>
    </View>
  )
}

export default Profile


const styles = StyleSheet.create({
  Container:{
        flex: 1,
        backgroundColor: color.background,
        
    },
    container:{
        flex: 1,
        padding: 10,
        marginTop: 28,
        marginBottom: 36,
    },
    firstContainer:{
        marginBottom: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    secondContainer: {
      width: "100%",
      padding: 16,
    }
})