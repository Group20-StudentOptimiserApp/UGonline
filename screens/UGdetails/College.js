import { useEffect, useState } from "react"
import { View , Text, Image, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { db } from "../../firebase";
import {color, font} from '../../global/styles'
import { collection, getDocs } from "firebase/firestore";

const College = ({navigation}) => {

    const [collegeData, setCollegeData] = useState([])
    const getCollege = async ()  =>{
        const getCollegeData = [];

        const querySnapshot = await getDocs(collection(db, "College"));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getCollegeData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setCollegeData(getCollegeData);
    }

    useEffect(()=>{
        getCollege();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../assets/projectImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your college</Text>
            <View style={styles.collegeConatiner}>
                {collegeData.map((data)=>{
                    return(
                        <TouchableOpacity activeOpacity={0.7}  key={data.key} onPress={()=> navigation.navigate(data['College Name'])} >
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['College Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 1 of 4</Text>
            </View>
        </View>
        </ScrollView>
        </View>
    )
}

export default College;

const styles = StyleSheet.create({
    Container :{
        flex: 1,
        backgroundColor: "#F7F9FF",
    },
    container :{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        marginTop: 70,
        marginBottom: 50,
    },
    collegeConatiner:{
        width: '100%',
    },
    college:{
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