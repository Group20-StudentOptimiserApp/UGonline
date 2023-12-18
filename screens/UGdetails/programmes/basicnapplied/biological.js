import { useEffect, useState } from "react"
import { View , Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert} from "react-native";
import { auth, db } from "../../../../firebase";
import { color, font } from "../../../../global/styles";
import { collection, getDocs } from "firebase/firestore";


const College = "Basic and Applied Sciences"

const userDetails = (Programme, Department, School, navigation) =>{
    db.collection("users")
    .doc(auth.currentUser.uid)
    .set({
        Programme,
        Department,
        School,
        College,
        
    }, {merge: true} )
    navigation.navigate('Main')
}
const confirmDetails = (Programme, Department, School, navigation) =>{

    Alert.alert('Confirm details', "Continue with the details selected?",[
        {text: 'Cancel', onPress: ()=> navigation.goBack()},
        {text: 'Okay', onPress: () => userDetails(Programme, Department, School, navigation)}
    ])
}

export const AnimalBiologyandConversationScience = ({navigation}) => {
    
    const Department = "Animal Biology and Conversation Science"
    const School = "Biological Science"

    const [programmeData, setProgrammeData] = useState([])
    const getProgramme = async ()  =>{
        const getProgrammeData = [];

        const querySnapshot = await getDocs(collection(db, "Programme", "1", "Animal Biology and Conversation Science"));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getProgrammeData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setProgrammeData(getProgrammeData);
    }

    useEffect(()=>{
        getProgramme();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../../../assets/screenImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your Programme</Text>
            <View style={styles.collegeConatiner}>
                {programmeData.map((data)=>{
                    return(
                        <TouchableOpacity key={data.key} onPress={()=>confirmDetails(data['Programme Name'], Department, School, navigation)}>
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['Programme Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 4 of 4</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}


export const NutritionandFoodScience = ({navigation}) => {
    
    const Department = "Nutrition and Food Science"
    const School = "Biological Science"

    const [programmeData, setProgrammeData] = useState([])
    const getProgramme = async ()  =>{
        const getProgrammeData = [];

        const querySnapshot = await getDocs(collection(db, "Programme", "1", "Nutrition and Food Science"));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getProgrammeData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setProgrammeData(getProgrammeData);
    }

    useEffect(()=>{
        getProgramme();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../../../assets/screenImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your Programme</Text>
            <View style={styles.collegeConatiner}>
                {programmeData.map((data)=>{
                    return(
                        <TouchableOpacity key={data.key} onPress={()=>confirmDetails(data['Programme Name'], Department, School, navigation)}>
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['Programme Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 4 of 4</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}

export const MarineandFisheriesScience = ({navigation}) => {
    
    const Department = "Marine and Fisheries Science"
    const School = "Biological Science"

    const [programmeData, setProgrammeData] = useState([])
    const getProgramme = async ()  =>{
        const getProgrammeData = [];

        const querySnapshot = await getDocs(collection(db, "Programme", "1", "Marine and Fisheries Science"));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getProgrammeData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setProgrammeData(getProgrammeData);
    }

    useEffect(()=>{
        getProgramme();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../../../assets/screenImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your Programme</Text>
            <View style={styles.collegeConatiner}>
                {programmeData.map((data)=>{
                    return(
                        <TouchableOpacity key={data.key} onPress={()=>confirmDetails(data['Programme Name'], Department, School, navigation)}>
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['Programme Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 4 of 4</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}


export const PlantandEnvironmentalBiology = ({navigation}) => {
    
    const Department = "Plant and Environmental Biology"
    const School = "Biological Science"

    const [programmeData, setProgrammeData] = useState([])
    const getProgramme = async ()  =>{
        const getProgrammeData = [];

        const querySnapshot = await getDocs(collection(db, "Programme", "1", "Plant and Environmental Biology"));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getProgrammeData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setProgrammeData(getProgrammeData);
    }

    useEffect(()=>{
        getProgramme();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../../../assets/screenImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your Programme</Text>
            <View style={styles.collegeConatiner}>
                {programmeData.map((data)=>{
                    return(
                        <TouchableOpacity key={data.key} onPress={()=>confirmDetails(data['Programme Name'], Department, School, navigation)}>
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['Programme Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 4 of 4</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}


export const BioChemistryCellandMolecularBio = ({navigation}) => {
    
    const Department = "BioChemistry, Cell and Molecular Bio."
    const School = "Biological Science"

    const [programmeData, setProgrammeData] = useState([])
    const getProgramme = async ()  =>{
        const getProgrammeData = [];

        const querySnapshot = await getDocs(collection(db, "Programme", "1", "BioChemistry, Cell and Molecular Bio."));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getProgrammeData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setProgrammeData(getProgrammeData);
    }

    useEffect(()=>{
        getProgramme();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../../../assets/screenImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your Programme</Text>
            <View style={styles.collegeConatiner}>
                {programmeData.map((data)=>{
                    return(
                        <TouchableOpacity key={data.key} onPress={()=>confirmDetails(data['Programme Name'], Department, School, navigation)}>
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['Programme Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 4 of 4</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}


export const Other = ({navigation}) => {
    
    const Department = "Other"
    const School = "Biological Science"

    const [programmeData, setProgrammeData] = useState([])
    const getProgramme = async ()  =>{
        const getProgrammeData = [];

        const querySnapshot = await getDocs(collection(db, "Programme", "1", "Other"));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getProgrammeData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setProgrammeData(getProgrammeData);
    }

    useEffect(()=>{
        getProgramme();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../../../assets/screenImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your Programme</Text>
            <View style={styles.collegeConatiner}>
                {programmeData.map((data)=>{
                    return(
                        <TouchableOpacity key={data.key} onPress={()=>confirmDetails(data['Programme Name'], Department, School, navigation)}>
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['Programme Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 4 of 4</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}


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