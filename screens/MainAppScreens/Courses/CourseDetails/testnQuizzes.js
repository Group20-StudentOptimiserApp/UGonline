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

const Stack = createStackNavigator();



const TestnQuizzes = ({route}) => {


    const [data, setData] = useState([])


    const {coursesCode, coursesName} = route.params;
    let title = 'Test and Quizzes for ' + coursesCode;


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

const Quiz = () => {
const navigation = useNavigation();

        return(
            <View style={styles.Container}>
                <ScrollView showsVerticalScrollIndicator={false}>


                <View style={styles.container}>
                    <View style={{marginBottom: 32}}>
                        <Text style={{fontSize: 20, fontFamily: font.medium}}>1. Take an assessment</Text>
                        <Text style={{fontSize: 20, fontFamily: font.medium}}>There are currently no assessment for you to take.</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 20, fontFamily: font.medium}}>2. Submitted assessments</Text>
                        <Text style={{fontSize: 20, fontFamily: font.medium}}>You have not submitted any assessment yet.</Text>
                    </View>
                {/* {data.map((data)=>{
                    const title = data.Title;
                    const uriLink = data.Uri;
                    return(
                        <TouchableOpacity key={data.key} activeOpacity={0.7} style={styles.secondaryContainer} onPress={()=> {navigation.navigate('TestsDoc', {
                            uriPdf: uriLink,
                        })}}>
                            <View style={{width: '15%', justifyContent: 'center'}}>
                                <View style={{ borderRadius: 4, width: 1, height: 1, padding: 18, justifyContent: 'center', alignItems: 'center',width: 1, alignSelf:'flex-start', marginRight: 6}}>
                                    <Ionicons
                                        name="documents"
                                        size={32}
                                        style={{position: 'absolute', }}
                                        color={color.primary}
                                    />
                                </View>
                            </View>
                            <View style={{width: '65%', justifyContent: 'center'}}>
                                <Text style={{ fontFamily: font.medium,fontSize: 18, color: color.dark, includeFontPadding:false, marginTop: -4}}>{title}</Text>
                            </View>
                            <View style={{width: '18%', justifyContent: 'center'}}>
                            <OpenURLButton url={uriLink} />
                            </View>

                </TouchableOpacity>
                    )
                })} */}
                </View>
                </ScrollView>
            </View>
        )
    }

    return(
        <SafeAreaView style={{flex: 1, }}>
            <Stack.Navigator>
                <Stack.Screen name={title} component={Quiz} options={{headerTitle:title, headerShadowVisible:false,
                    headerTintColor: color.primary,
                    headerStyle: { backgroundColor: color.background },
                    headerTitleStyle: {fontFamily: font.semiBold}}}/>
            </Stack.Navigator>
        </SafeAreaView>   
    )
}


export default TestnQuizzes;


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