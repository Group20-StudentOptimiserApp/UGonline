import { View, Text,StyleSheet, Pressable, ScrollView, SafeAreaView } from 'react-native'
import { color, font } from '../../global/styles'
import { Avatar } from '@rneui/themed'
import { AntDesign } from '@expo/vector-icons'
import { auth } from '../../firebase'
import { StatusBar } from "expo-status-bar";

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";

import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();


const Profile = ({currentUser}) => {

  const signOutUser = () => {
    auth.signOut();
  }
  const privacynSecurity = () => {
    navigation.navigate('Privacy')
  }
  const data = [
    // {id: 1, text: 'Personal Information', icon: 'user', press: userPersonalInformation},
    {id: 2, text: 'Privacy and Security', icon: 'Safety', press: privacynSecurity},
    {id: 3, text: 'Logout', icon: 'logout', press: signOutUser},
    // {id: 4, text: 'Academic Information', icon: 'book', press: userAcademicInformation},
    // {id: 5, text: 'Settings', icon: 'setting', press: userSettings},
    // {id: 6, text: 'Help', icon: 'questioncircleo', press: userHelp},
  ]
  const MainProfile = ({navigation}) =>{
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
              titleStyle={{fontFamily: font.semiBold, fontSize: 60, color: color.light}}
              size={140}
              // activeOpacity = {0.7}
              overlayContainerStyle={{backgroundColor: color.primaryAlt,}}
              containerStyle={{marginVertical: 8}}
            />
            <Text style={{textAlign:'center', fontFamily: font.semiBold, fontSize: 26, color: color.primary }}>{currentUser.name}</Text>
            <Text style={{textAlign:'center', fontFamily: font.regular, fontSize: 16, marginVertical: 4 }}>{currentUser.Programme}</Text>
            <Text style={{textAlign:'center', fontFamily: font.regular, fontSize: 16}}>{currentUser.studentId}</Text>
          </View>
          <View style={styles.secondContainer}>
                  <Pressable onPress={signOutUser} style={{flexDirection: 'row', marginBottom: 18, alignItems:'center'}}>
                      <AntDesign
                        name= 'logout'
                        color= {color.primary}
                        size={24}
                        style={{paddingRight: 12}}
                      />
                      <Text style={{fontFamily: font.regular, fontSize: 18}}>Logout</Text>
                  </Pressable>
                  <Pressable onPress={()=>navigation.navigate('Privacy')} style={{flexDirection: 'row', marginBottom: 18, alignItems:'center'}}>
                      <AntDesign
                        name= 'Safety'
                        color= {color.primary}
                        size={24}
                        style={{paddingRight: 12}}
                      />
                      <Text style={{fontFamily: font.regular, fontSize: 18}}>Privacy and Security</Text>
                  </Pressable>
          </View>
        </View>
        <StatusBar style="auto" translucent={false} />
        </ScrollView>
        </SafeAreaView>
    </View>
  )
  }
     
  const Privacy = ()=>{

    const privacyData = [
      {id: 1, tip: "Tip 1: Have a strong password"},
      {id: 2, tip: "Tip 2: Never leave your deice unattended to"},
      {id: 3, tip: "Tip 3: Use a secure network"},
      {id: 4, tip: "Tip 4: Practice safe browsing"},
      {id: 5, tip: "Tip 5: Don’t forget mobile Safety"},
      {id: 6, tip: "Tip 6: Be mindful of who you share your private information with"}

    ]
    return(
      <View style={{flex: 1, backgroundColor: color.background,}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, marginHorizontal: 20, marginTop: 8 }}>
            {privacyData.map((data)=>{
                    return(
                        <View key={data.id}>
                            <View style={{borderRadius: 10, backgroundColor: "#D7E9FF", paddingVertical: 16, marginBottom: 18, paddingHorizontal: 14}}>
                                <Text style={{fontSize: 16, color: '#000000', textAlign: 'left', fontFamily: font.regular}}>{data.tip}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
        <StatusBar style="auto" translucent={false} />
        </View>
    )
  }


  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator>
        <Stack.Screen name='MainProfile' component={MainProfile} options={{headerShown: false}}/>
        <Stack.Screen name='Privacy' component={Privacy} options={{headerTitle: 'Privacy and Security', headerShadowVisible:false,
                    headerTintColor: color.primary,
                    headerStyle: { backgroundColor: color.background },
                    headerTitleStyle: {fontFamily: font.semiBold,}}}/>
      </Stack.Navigator>
    </NavigationContainer>
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