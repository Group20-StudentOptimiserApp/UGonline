import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image, ScrollView } from 'react-native';
import { color, font } from '../../../global/styles';
import { Feather } from '@expo/vector-icons';
import { db } from '../../../firebase';
import { collection, getDocs } from "firebase/firestore";
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';

const L200 = ({currentUser}) => {

    const navigation = useNavigation();
    const [courseCode, setCourseCode] = useState('')
    const [courseName, setCourseName] = useState('')

    const [courseData, setCourseData] = useState([])
    const [defaultCourseData, setDefaultCourseData] = useState([])

    const getCourse = async ()  =>{
        const getCourseData = [];

        const querySnapshot = await getDocs(collection(db, "Courses", currentUser.Programme, "L200"));
        
        querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        getCourseData.push({
            ...doc.data(),
            key: doc.id,
        });
    });
    setCourseData(getCourseData);
    }

    const getDefaultCourse = async ()  =>{
        const getDefaultCourseData = [];

        const querySnapshot = await getDocs(collection(db, "DefaultCourses", 'ForAll', "L200"));
        
        querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        getDefaultCourseData.push({
            ...doc.data(),
            key: doc.id,
        });
    });
    setDefaultCourseData(getDefaultCourseData);
    }

    useEffect(()=>{
        getCourse();
        getDefaultCourse();
    }, [])

  return (
    <View style={styles.Container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.primaryContainer}>
            {defaultCourseData.map((data)=>{
                    return(
                        <TouchableOpacity activeOpacity={0.7} key={data.key} style={styles.secondaryContainer} onPress={()=> {navigation.navigate('CourseDetails', {
                            coursesCode: data['Course Code'],
                            coursesName: data['Course Name'],
                        })}} >
                            <View style={{width: '15%',}}>
                                <View style={{backgroundColor: color.dark, borderRadius: 4, width: 1, height: 1, padding: 18, justifyContent: 'center', alignItems: 'center',width: 1, alignSelf:'flex-start', marginRight: 6}}>
                                    <Image
                                        source={require('../../../assets/forcourses.png')}
                                        style={{position: 'absolute', height: 24, width: 28}}
                                        
                                    />
                                </View>
                            </View>
                            <View style={{width: '65%', }}>
                                <Text style={{ fontFamily: font.semiBold, fontSize: 20, color: color.dark, includeFontPadding:false, marginTop: -4}}>{data['Course Code']}</Text>
                                <Text style={{ fontFamily: font.medium, fontSize: 16, color: color.dark, includeFontPadding:false, marginTop: -4}}>{data['Course Name']}</Text>
                            </View>
                            <View style={{width: '18%'}}>
                            <Pressable style={{backgroundColor: color.light, borderRadius: 4, height: 1, padding:16, justifyContent: 'center', alignItems: 'center',width: 1, alignSelf:'flex-end' }}>
                                <Feather
                                    name='chevron-right'
                                    size={24}
                                    style={{ position: 'absolute',}}
                                />
                            </Pressable>
                            </View>
                        </TouchableOpacity>
                    )
                })}
                
                {courseData.map((data)=>{
                    return(
                        <TouchableOpacity activeOpacity={0.7} key={data.key} style={styles.secondaryContainer} onPress={()=> {navigation.navigate('CourseDetails', {
                            coursesCode: data['Course Code'],
                            coursesName: data['Course Name'],
                        })}} >
                            <View style={{width: '15%',}}>
                                <View style={{backgroundColor: color.dark, borderRadius: 4, width: 1, height: 1, padding: 18, justifyContent: 'center', alignItems: 'center',width: 1, alignSelf:'flex-start', marginRight: 6}}>
                                    <Image
                                        source={require('../../../assets/forcourses.png')}
                                        style={{position: 'absolute', height: 24, width: 28}}
                                        
                                    />
                                </View>
                            </View>
                            <View style={{width: '65%', }}>
                                <Text style={{ fontFamily: font.semiBold, fontSize: 20, color: color.dark, includeFontPadding:false, marginTop: -4}}>{data['Course Code']}</Text>
                                <Text style={{ fontFamily: font.medium, fontSize: 16, color: color.dark, includeFontPadding:false, marginTop: -4}}>{data['Course Name']}</Text>
                            </View>
                            <View style={{width: '18%'}}>
                            <Pressable style={{backgroundColor: color.light, borderRadius: 4, height: 1, padding:16, justifyContent: 'center', alignItems: 'center',width: 1, alignSelf:'flex-end' }}>
                                <Feather
                                    name='chevron-right'
                                    size={24}
                                    style={{ position: 'absolute',}}
                                />
                            </Pressable>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
        </ScrollView>
      <StatusBar style="auto" translucent={false} />
    </View>
  )
}

export default L200;


const styles = StyleSheet.create({
    Container :{
        flex: 1,
        backgroundColor: color.background,
    },
    container: {
        flex: 1,
        marginTop: 16,
        marginBottom: 64,
        paddingHorizontal: 24,
    },
    primaryContainer:{
        width: "100%",
    },
    secondaryContainer:{
        backgroundColor: color.lightGrey,
        flexDirection: 'row',
        padding: 16,
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