import React, { useEffect, useState, useCallback} from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, Linking } from 'react-native'
import { color, font } from '../../global/styles';
import { Avatar, Input } from '@rneui/themed';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';


import timeImg from '../../assets/time.png'
import complainImg from '../../assets/complain.png'
import scheduleImg from '../../assets/schedule.png'
import weeklyImg from '../../assets/weekly.png'
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';



const Home = ({currentUser}) => {
    const [news, setNews] = useState([])
    const [open, setOpen] = useState(false)


    const getNews = async ()  =>{
        const getNewsData = [];

        const querySnapshot = await getDocs(collection(db, "news"));
        
        querySnapshot.forEach((doc) => {
        getNewsData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setNews(getNewsData);
    }
    
    useEffect(()=>{
        getNews();
    }, [])
    
    let today = new Date()
    let currentHour = today.getHours()
    let greetings;
    if (currentHour < 12){
        greetings = "Good Morning,"
    }else if(currentHour < 16){
        greetings = "Good Afternoon,"
    }else{
        greetings = "Good Evening,"
    }

    const someData = [
        {id: 1, text: "Daily", text1: "Homework", img: timeImg, color: '#FC6238'},
        {id: 2, text: "Submit", text1: "a complaint", img: complainImg, color: "#273D52"},
        {id: 3, text: "Weekly", text1: "Update", img: weeklyImg, color: "#1B75FF"},
        {id: 4, text: "Weekly", text1: "Schedule", img: scheduleImg, color: "#858EF8"},
    ]

    const academicFeesLink = 'https://sts.ug.edu.gh/services/pay/academic';
    const residentialFeesLink = 'https://sts.ug.edu.gh/services/pay/residential';
    const internshipFeesLink = 'https://sts.ug.edu.gh/services/pay/internship';


    const OpenURLButton = ({url, children}) => {
        const handlePress = useCallback(async () => {
          const supported = await Linking.canOpenURL(url);
      
          if (supported) {
            await Linking.openURL(url);
          } 
        }, [url]);
      
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
                <View style={styles.feesContainer}>
                    <Text style={{fontSize: 18, color: color.primary, textAlign: 'center', fontFamily: font.semiBold}}>{children}</Text>
                </View>
            </TouchableOpacity>
        )
      };
    const PayFees = () => {
        return(
            <SafeAreaView>
                <View>
                    <OpenURLButton url={academicFeesLink}>Make Payment for Academic Fees</OpenURLButton>
                    <OpenURLButton url={residentialFeesLink}>Make Payment for Residential Fees</OpenURLButton>
                    <OpenURLButton url={internshipFeesLink}>Make Payment for Internship Fees</OpenURLButton>
                </View>
            </SafeAreaView>
        )
    }


    return (
    <View style={styles.Container}>
    <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
    <Modal visible={open} animationType="slide">
            <SafeAreaView style={{flex: 1, }}>
            <View style={{flex: 1, backgroundColor: color.background,}}>
            <View style={{flex: 1, marginHorizontal: 20, marginTop: 16 }}>
                <MaterialIcons
                    name="close"
                    size={24}
                    onPress={()=>setOpen(false)}
                    style={{marginBottom: 10,
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 6,
                        borderColor: '#ddd',
                        alignSelf: "flex-end",}}
                    />
                    <PayFees/>
                    </View>
                    </View>
            </SafeAreaView>
        <StatusBar style="auto" translucent={false} />
        </Modal>

        <View style={{marginHorizontal: 26,}}>
        <View style={styles.topContainer}>
            <View style={styles.userContainer}>
                    <Avatar
                    rounded
                    title= {currentUser.name.charAt(0)}
                    titleStyle={{fontFamily: font.medium, fontSize: 44, color: color.primary}}
                    size={72}
                    // activeOpacity = {0.7}
                    overlayContainerStyle={{backgroundColor: '#D3F5E3',}}
                    containerStyle={{marginRight: 8}}
                    />
                <View style={{alignSelf: 'center',}}>
                    <Text style={{fontFamily: font.regular, fontSize: 16, color: "#757575", textAlignVertical: 'center' }}>{greetings}</Text>
                    <Text style={{fontFamily: font.medium, fontSize: 20, color: color.primary, textAlignVertical:'center', maxWidth: 200}}>{currentUser.name}</Text>
                </View>
            </View>

            <View>
            <MaterialCommunityIcons
                name='bell'
                color= {color.primary}
                size={32}
                style={{paddingTop: 9}}
            />
            </View>
        </View>
        <View >
            <Input
                placeholder="Search for a course" 
                placeholderTextColor={color.primaryAlt}
                rightIcon={<Ionicons
                    name={"search"}
                    size={24}
                color= {color.primaryAlt}
                />}
                type="search"
                style={styles.input}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputstyle}
                    // onSubmitEditing={signUp}
                containerStyle={styles.search}
            />
        </View>
        <View style={{flexDirection: 'row', marginTop: 16,}}>
            <TouchableOpacity activeOpacity={0.7} style={{alignItems: 'center'}} onPress={()=>setOpen(true)}>
                <Image
                    source={require('../../assets/Cash.png')}
                    style={{width: 48, height: 48}}
                />
                <Text style={styles.supportText}>Pay Fees</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={{alignItems: 'center', paddingLeft: 36}}>
                <Image
                    source={require('../../assets/Support.png')}
                    style={{width: 48, height: 48}}
                />
                <Text style={styles.supportText}>Meet a counsellor</Text>
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.secondaryContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.newsContainer}>
                {news.map((data)=> {
                    return(
                        <View key={data.key} style={styles.newscontainer}>
                        <Image
                            source={require('../../assets/friends.png')}
                            style={{width: "60%", height: '100%', }}
                        />
                        <View style={{width: "40%", alignSelf: 'center',}} >
                            <Text style={{fontFamily: font.regular, fontSize: 16, textAlign: 'center', alignSelf: 'flex-end'}}>{data.Topic}</Text>
                            <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: color.secondary, marginTop: 8, width:120, alignSelf: 'flex-end', borderRadius: 50, paddingVertical: 4}}>
                                <Text style={{fontFamily: font.medium, fontSize: 14, color: "#fff", textAlign: 'center', }}>Read More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    )
                })}
            </View>
            </ScrollView>

            <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap', columnGap: 16, rowGap:16, justifyContent: 'center'}}>
                {someData.map((data)=> {
                    const {id, text, text1, img, color} = data
                    return(
                        <TouchableOpacity key={id} style={{width: "45%", height: 120, backgroundColor: color, borderRadius: 20,}} activeOpacity={0.7}>
                            <Image
                            source={img}
                            style={{width: "100.5%", height: '100.5%', borderRadius: 20 }}
                            />
                            <View style={{marginHorizontal: 16, marginVertical:12, position:'absolute'}}>
                                <Text style={{fontFamily: font.medium, fontSize: 16, color: '#fff',}}>{text}</Text>
                                <Text style={{fontFamily: font.regular, fontSize: 16, color: '#fff'}}>{text1}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    </View>
    </ScrollView>
    <StatusBar style="auto" translucent={false} />
    </SafeAreaView>
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
    Container :{
        flex: 1,
        backgroundColor: color.background,
        // padding: 0,
    },
    container: {
        flex: 1,
        // backgroundColor: color.background,
        // padding: 12,
        marginTop: 16,
        marginBottom: 50,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userContainer:{
        flexDirection: 'row',
    },
    input:{
        fontSize: 16,
        fontFamily: font.medium,
        color: color.primaryAlt,
    },
    inputstyle:{
        color: color.primaryAlt,
    },
    search:{
        // width: "100%",
        borderColor: color.primaryAlt,
        borderWidth: 1.5,
        alignContent: 'center',
        height: 0,
        paddingVertical: 20,
        borderRadius: 8,
        marginTop: 16,
    },
    inputContainer:{
        borderWidth: 0,
        borderColor: color.background,
        borderRadius: 10,
    },
    supportText:{
        fontFamily: font.regular,
        fontSize: 14,
        textAlign: 'center'
    },
    secondaryContainer:{
        backgroundColor: '#ffffff',
        color: "#fff",
        marginTop: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
        // borderColor: '#000',
        // borderWidth: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginBottom: 20,
    },
    newsContainer:{
        flexDirection: 'row',
        // columnGap: 12,
        columnGap: 16,
        rowGap:16,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 16,
        marginBottom: 30,
        // justifyContent: 'center',
    },
    newscontainer: {
        width: 338,
        height: 132,
        borderWidth: 2,
        borderColor: color.grey,
        flexDirection: 'row',
        // paddingHorizontal: 10,
        // paddingBottom: 10,
        
        paddingTop: 4,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    feesContainer: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        shadowRadius: 8,
        padding: 18,
        shadowOpacity: 0.2,
        shadowColor: "#ccc",
        shadowOffset: {width: 1, height: 1},
        elevation: 4,
        marginTop: 18,    
    }

})