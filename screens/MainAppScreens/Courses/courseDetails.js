import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { color, font } from "../../../global/styles";

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

const CourseDetails = ({route}) => {
    const {coursesCode, coursesName} = route.params;
    let fullCourseName = coursesCode + ': ' + coursesName;
    const Details = () => {
        return(
            <View style={styles.Container}>
                {/* <SafeAreaView> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap', columnGap: 16, rowGap:16, justifyContent: 'center'}}>
                        <TouchableOpacity activeOpacity={0.7} style={{width: "45%", height: 120, backgroundColor: '#1597BB', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: font.semiBold, fontSize: 20, color: '#fff', textAlign: 'center'}}>Syllabus</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={{width: "45%", height: 120, backgroundColor: '#E79E4F', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: font.semiBold, fontSize: 20, color: '#fff', textAlign: 'center'}}>Lessons</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={{width: "45%", height: 120, backgroundColor: '#4E9F3D', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: font.semiBold, fontSize: 20, color: '#fff', textAlign: 'center'}}>Resources</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={{width: "45%", height: 120, backgroundColor: '#52057B', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: font.semiBold, fontSize: 20, color: '#fff', textAlign: 'center'}}>Assignments</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={{width: "45%", height: 120, backgroundColor: '#C147E9', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: font.semiBold, fontSize: 20, color: '#fff', textAlign: 'center'}}>Test & quizzes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={{width: "45%", height: 120, backgroundColor: '#C90F03', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: font.semiBold, fontSize: 20, color: '#fff', textAlign: 'center'}}>Past Examinations</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={{width: "45%", height: 120, backgroundColor: '#03C988', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: font.semiBold, fontSize: 20, color: '#fff', textAlign: 'center'}}>Gradebook</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={{width: "45%", height: 120, backgroundColor: '#4477CE', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: font.semiBold, fontSize: 20, color: '#fff', textAlign: 'center'}}>Schedule</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
                {/* </SafeAreaView> */}
            </View>
        )
    }

    return(
        <SafeAreaView style={{flex: 1, }}>
            <Stack.Navigator>
                <Stack.Screen name={fullCourseName} component={Details}/>
            </Stack.Navigator>
        </SafeAreaView>   
    )
}




export default CourseDetails;


const styles = StyleSheet.create({
    Container :{
        flex: 1,
        backgroundColor: color.background,
    },
    container: {
        // flex: 1,
        marginTop: 28,
        marginBottom: 100,
    },
})