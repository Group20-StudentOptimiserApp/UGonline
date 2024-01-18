import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { color, font } from '../../global/styles';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import L100 from './Courses/l100';
import L200 from './Courses/l200';
import L300 from './Courses/l300';
import L400 from './Courses/l400';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CourseDetails from './Courses/courseDetails';
import Lessons from './Courses/CourseDetails/lessons';
import Resources from './Courses/CourseDetails/resources';
import Syllabus from './Courses/CourseDetails/syllabus';
import Exams from './Courses/CourseDetails/pastExams';
import Tests from './Courses/CourseDetails/pastQuizzes';
import Assignments from './Courses/CourseDetails/assignments';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


const Courses = ({currentUser}) => {
  const Level100 = () =>{
    return(
      <L100 currentUser={currentUser} />
    )
  }
  const Level200 = () =>{
    return(
      <L200 currentUser={currentUser} />
    )
  }
  const Level300 = () =>{
    return(
      <L300 currentUser={currentUser} />
    )
  }
  const Level400 = () =>{
    return(
      <L400 currentUser={currentUser} />
    )
  }

  const All = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.primary,
        tabBarLabelStyle: { fontSize: 16, fontFamily: font.semiBold },
        // lazy: false,
      }}
    >
      <Tab.Screen name='L100' component={Level100} />
      <Tab.Screen name='L200' component={Level200} />
      <Tab.Screen name='L300' component={Level300} />
      <Tab.Screen name='L400' component={Level400} />
      
    </Tab.Navigator>

  </SafeAreaView>
  )
}

return (
  <NavigationContainer independent={true} >
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Courses' component={All} />
      <Stack.Screen name='CourseDetails' component={CourseDetails}/>
      <Stack.Screen name='Lessons' component={Lessons}/>
      <Stack.Screen name='Syllabus' component={Syllabus}/>
      <Stack.Screen name='Resources' component={Resources}/>
      <Stack.Screen name='Assignments' component={Assignments}/>
      <Stack.Screen name='Exams' component={Exams}/>
      <Stack.Screen name='Tests' component={Tests}/>
    </Stack.Navigator>
  </NavigationContainer>
)
}

export default Courses;