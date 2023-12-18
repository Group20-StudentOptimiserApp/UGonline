import { useEffect, useState } from "react"
import { View , Text, Image, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { db } from "../../../firebase";
import { color, font } from "../../../global/styles";
import { collection, getDocs } from "firebase/firestore";




export const BiomedicalandAlliedHealthScience = () => {
    const [departmentData, setDepartmentData] = useState([])
    const getDepartment = async ()  =>{
        const getDepartmentData = [];

        const querySnapshot = await getDocs(collection(db, "Department", "3", "Biomedical and Allied Health Science"));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getDepartmentData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setDepartmentData(getDepartmentData);
    }

    useEffect(()=>{
        getDepartment();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../../assets/screenImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your Department</Text>
            <View style={styles.collegeConatiner}>
                {departmentData.map((data)=>{
                    return(
                        <TouchableOpacity key={data.key} >
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['Department Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 3 of 4</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}

export const SchoolofNursingandMidwifery= () => {
    const [departmentData, setDepartmentData] = useState([])
    const getDepartment = async ()  =>{
        const getDepartmentData = [];

        const querySnapshot = await getDocs(collection(db, "Department", "3", "School of Nursing and Midwifery"));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getDepartmentData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setDepartmentData(getDepartmentData);
    }

    useEffect(()=>{
        getDepartment();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../../assets/screenImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your Department</Text>
            <View style={styles.collegeConatiner}>
                {departmentData.map((data)=>{
                    return(
                        <TouchableOpacity key={data.key} >
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['Department Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 3 of 4</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}

export const SchoolofPharmacy= () => {
    const [departmentData, setDepartmentData] = useState([])
    const getDepartment = async ()  =>{
        const getDepartmentData = [];

        const querySnapshot = await getDocs(collection(db, "Department", "3", "School of Pharmacy"));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getDepartmentData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setDepartmentData(getDepartmentData);
    }

    useEffect(()=>{
        getDepartment();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../../assets/screenImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your Department</Text>
            <View style={styles.collegeConatiner}>
                {departmentData.map((data)=>{
                    return(
                        <TouchableOpacity key={data.key} >
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['Department Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 3 of 4</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}

export const SchoolofPublicHealth = () => {
    const [departmentData, setDepartmentData] = useState([])
    const getDepartment = async ()  =>{
        const getDepartmentData = [];

        const querySnapshot = await getDocs(collection(db, "Department", "3", "School of Public Health"));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getDepartmentData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setDepartmentData(getDepartmentData);
    }

    useEffect(()=>{
        getDepartment();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../../assets/screenImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your Department</Text>
            <View style={styles.collegeConatiner}>
                {departmentData.map((data)=>{
                    return(
                        <TouchableOpacity key={data.key} >
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['Department Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 3 of 4</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}


export const UGDentalSchool= () => {
    const [departmentData, setDepartmentData] = useState([])
    const getDepartment = async ()  =>{
        const getDepartmentData = [];

        const querySnapshot = await getDocs(collection(db, "Department", "3", "UG Dental School"));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getDepartmentData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setDepartmentData(getDepartmentData);
    }

    useEffect(()=>{
        getDepartment();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../../assets/screenImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your Department</Text>
            <View style={styles.collegeConatiner}>
                {departmentData.map((data)=>{
                    return(
                        <TouchableOpacity key={data.key} >
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['Department Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 3 of 4</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}

export const UGMedicalSchool = () => {
    const [departmentData, setDepartmentData] = useState([])
    const getDepartment = async ()  =>{
        const getDepartmentData = [];

        const querySnapshot = await getDocs(collection(db, "Department", "3", "UG Medical School"));
        
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getDepartmentData.push({
            ...doc.data(),
            key: doc.id,
        });
    //    return () => querySnapshot(); 
    });
    setDepartmentData(getDepartmentData);
    }

    useEffect(()=>{
        getDepartment();
    }, [])

    return(
        <View style={styles.Container}>
        <ScrollView>
        <View  style={styles.container}>
            <View>
            <Image
            source={require('../../../assets/screenImages/UoG.png')}
            style={{width: 160, height: 160}}
            />
            </View>
            <Text style={{textAlign:"center", color: color.primary, fontSize: 22, fontFamily: font.bold, marginTop: 20,}}>Select your Department</Text>
            <View style={styles.collegeConatiner}>
                {departmentData.map((data)=>{
                    return(
                        <TouchableOpacity key={data.key} >
                            <View style={styles.college}>
                                <Text style={{fontSize: 18, color: color.dark, textAlign: 'center', fontFamily: font.bold}}>{data['Department Name']}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text style={{color: color.primaryAlt, fontSize: 12, fontFamily: font.medium, paddingTop: 40}}>Step 3 of 4</Text>
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