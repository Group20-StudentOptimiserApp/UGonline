import { useEffect, useState } from "react"
import { View , Text, Image, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { db } from "../../../firebase";
import { color, font } from "../../../global/styles";
import { collection, getDocs } from "firebase/firestore";




const storeDetails = (navigation, data) => {
    navigation.navigate(data)
}

export const BiologicalScience = ({navigation}) => {
    const [departmentData, setDepartmentData] = useState([])
    const getDepartment = async ()  =>{
        const getDepartmentData = [];

        const querySnapshot = await getDocs(collection(db, "Department", "1", "Biological Science"));
        
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
                        <TouchableOpacity key={data.key} onPress={()=>storeDetails(navigation, data['Department Name'])}>
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

export const EngineeringScience = ({navigation}) => {
    const [departmentData, setDepartmentData] = useState([])
    const getDepartment = async ()  =>{
        const getDepartmentData = [];

        const querySnapshot = await getDocs(collection(db, "Department", "1", "Engineering Science"));
        
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
                        <TouchableOpacity key={data.key} onPress={()=>storeDetails(navigation, data['Department Name'])}>
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

export const PhysicalnMathematicalScience = ({navigation}) => {
    const [departmentData, setDepartmentData] = useState([])
    const getDepartment = async ()  =>{
        const getDepartmentData = [];

        const querySnapshot = await getDocs(collection(db, "Department", "1", "Physical and Mathematical Science"));
        
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
                        <TouchableOpacity key={data.key} onPress={()=>storeDetails(navigation, data['Department Name'])} >
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

export const VeterinarySciences = ({navigation}) => {
    const [departmentData, setDepartmentData] = useState([])
    const getDepartment = async ()  =>{
        const getDepartmentData = [];

        const querySnapshot = await getDocs(collection(db, "Department", "1", "Veterinary Sciences"));
        
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
                        <TouchableOpacity key={data.key} onPress={()=>storeDetails(navigation, data['Department Name'])}>
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

export const AgricultureScience = ({navigation}) => {
    const [departmentData, setDepartmentData] = useState([])
    const getDepartment = async ()  =>{
        const getDepartmentData = [];

        const querySnapshot = await getDocs(collection(db, "Department", "1", "School of Agriculture"));
        
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
                        <TouchableOpacity key={data.key} onPress={()=>storeDetails(navigation, data['Department Name'])}>
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





// export default BasicandAppliedDepartment;

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