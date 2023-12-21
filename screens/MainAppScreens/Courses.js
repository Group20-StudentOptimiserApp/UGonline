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
import { SafeAreaFrameContext, SafeAreaProvider } from 'react-native-safe-area-context';


const Tab = createMaterialTopTabNavigator();


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


  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View style={{flex: 1}}> */}
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
    {/* </View> */}
    {/* <StatusBar style="auto" translucent={false} /> */}

    </SafeAreaView>
  )
}

export default Courses;