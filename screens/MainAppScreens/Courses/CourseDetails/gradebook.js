import React, { useState, useEffect, useCallback} from 'react'

import { SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable, Linking, TouchableOpacity} from "react-native";
import { color, font } from "../../../../global/styles";
import { Ionicons, Feather, } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack"

import { StatusBar } from 'expo-status-bar';
import Pdf from 'react-native-pdf';
import { db } from '../../../../firebase';
import { collection, getDocs } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';

import { Table, Row, Rows } from 'react-native-table-component'; 

const Stack = createStackNavigator();



const Gradebook = ({route}) => {


    const [data, setData] = useState([])

    const gradeHeader = ['Gradebook Item', 'Grade'] 
    const gradeData = [ 
        ['Quiz 1', '20/60'], 
        ['Assignment 1', '25/40'], 
        ['Assignment 2', '20/40'] 
  
    ] 

    const {coursesCode, coursesName, currentUserName} = route.params;
    let title = 'Gradebook for ' + coursesCode;


    const get = async ()  =>{
        const getData = [];

        const querySnapshot = await getDocs(collection(db, 'Course Details', coursesCode, "Tests"));
        
        querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        getData.push({
            ...doc.data(),
            key: doc.id,
        });
    });
    setData(getData);
    }

    useEffect(()=>{
        get();
    }, [])


    // const OnTestsDoc = ({route}) =>{

    //     const {uriPdf} = route.params;

    //     const pdfSource = {uri : uriPdf, cache: true}
    //     return(
    //         <SafeAreaView style={{flex: 1, }}>
    //         <View style={{flex: 1, backgroundColor: color.background,}}>
    //         <View style={{flex: 1, marginHorizontal: 4, marginTop: 4 }}>
    //                 <Pdf
    //                     trustAllCerts={false}
    //                     source={pdfSource}
    //                     onLoadComplete={(numberOfPages, filePath)=>{
    //                         console.log(`Number of pages: ${numberOfPages}`)
    //                     }}
    //                     onError={(error)=>{
    //                         console.log(error)
    //                     }}
    //                     style={{flex: 1, alignSelf: 'stretch'}}
    //                 />
    //                 </View>
    //                 </View>
    //             <StatusBar style="auto" translucent={false} />
    //         </SafeAreaView>
    //     )
    // }
    // const OpenURLButton = ({url}) => {
    //     const handlePress = useCallback(async () => {
    //       const supported = await Linking.canOpenURL(url);
      
    //       if (supported) {
    //         await Linking.openURL(url);
    //       } 
    //     }, [url]);
      
    //     return (
    //         <Pressable style={{backgroundColor: color.light, borderRadius: 4, height: 1, padding:14, justifyContent: 'center', alignItems: 'center',width: 1, alignSelf:'flex-end' }} onPress={handlePress}>
    //             <Feather
    //                 name='arrow-down'
    //                 size={24}
    //                 style={{ position: 'absolute',}}
    //             />
    //         </Pressable>
    //     )
    //   };

const Grade = () => {
const navigation = useNavigation();

        return(
            <View style={styles.Container}>
                <ScrollView showsVerticalScrollIndicator={false}>


                <View style={styles.container}>
                    <View style={{marginBottom: 32}}>
                        <Text style={{fontSize: 20, fontFamily: font.medium, color: color.primary}}>Grade report for {currentUserName}</Text>
                    </View>
                    <View style={{borderRadius: 8, paddingVertical: 8, paddingLeft: 8, borderWidth: 1, borderColor: color.primaryAlt, width: 200, marginBottom: 32}}>
                        <Text style={{fontSize: 16, fontFamily: font.medium,}}>Course Grade:   - </Text>
                    </View>
                    <Table borderStyle={{ borderWidth: 2, borderColor: color.primaryAlt, }}> 
                        <Row data={gradeHeader} style={{backgroundColor: color.lightGrey, height: 40}} textStyle={{fontFamily: font.medium, fontSize: 16, textAlign: 'center'}}/> 
                        <Rows data={gradeData} style={{height: 36}} textStyle={{fontFamily: font.medium, fontSize: 16, textAlign: 'center'}}/> 
                    </Table> 
                </View>
                </ScrollView>
            </View>
        )
    }

    return(
        <SafeAreaView style={{flex: 1, }}>
            <Stack.Navigator>
                <Stack.Screen name={title} component={Grade} options={{headerTitle:title, headerShadowVisible:false,
                    headerTintColor: color.primary,
                    headerStyle: { backgroundColor: color.background },
                    headerTitleStyle: {fontFamily: font.semiBold}}}/>
            </Stack.Navigator>
        </SafeAreaView>   
    )
}


export default Gradebook;


const styles = StyleSheet.create({
    Container :{
        flex: 1,
        backgroundColor: color.background,
    },
    container: {
        flex: 1,
        marginTop: 8,
        marginBottom: 64,
        paddingHorizontal: 16,

    },
    secondaryContainer:{
        backgroundColor: color.lightGrey,
        flexDirection: 'row',
        padding: 14,
        borderRadius: 14,
        shadowRadius: 8,
        shadowOpacity: 0.2,
        shadowColor: "#ccc",
        shadowOffset: {width: 1, height: 1},
        elevation: 4,
        marginBottom: 16,
        justifyContent: 'space-between',
    }
})